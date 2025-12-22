document.addEventListener('DOMContentLoaded', function () {

    // Khai báo hằng số cơ bản
    const shippingFee = 0;

    // ------------------------------------------------------------------
    // UTILS VÀ LOCAL STORAGE HANDLER (CẦN THIẾT)
    // ------------------------------------------------------------------

    // --- Hàm format tiền tệ (VND) ---
    function formatVND(amount) {
        return Math.max(0, amount).toLocaleString('vi-VN') + 'đ';
    }

    // --- Hàm chuyển đổi giá từ chuỗi sang số (VD: "320.000₫" -> 320000) ---
    function parsePrice(price) {
        if (typeof price === 'number') return price;
        return parseInt(price.replace(/\D/g, '')) || 0;
    }

    // --- Hàm ĐỌC giỏ hàng từ Local Storage ---
    function getCart() {
        const cartJson = localStorage.getItem('cart');
        return cartJson ? JSON.parse(cartJson) : [];
    }

    // --- Hàm tính tổng tiền tạm tính ---
    function calculateCartSubtotal(cart) {
        return cart.reduce((total, item) => total + (parsePrice(item.price) * item.quantity), 0);
    }

    // --- Hàm GHI giỏ hàng (Chỉ dùng khi đặt hàng thành công) ---
    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }


    // --- DOM Elements & Biến ---
    const orderForm = document.getElementById('order-form');
    const placeOrderBtn = document.querySelector('.place-order-btn');
    const currentCart = getCart();

    // --- TỰ ĐỘNG ĐIỀN THÔNG TIN KHÁCH HÀNG (Nếu đã đăng nhập) ---
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        const autoFillMap = {
            'full-name': currentUser.name,
            'phone-number': currentUser.phone,
            'province': currentUser.province,
            'district': currentUser.district,
            'ward': currentUser.ward,
            'address-detail': currentUser.address
        };
        for (const [id, value] of Object.entries(autoFillMap)) {
            const el = document.getElementById(id);
            if (el && value) el.value = value;
        }
    }

    // Phần địa chỉ (đã lược bỏ)

    // Phần tóm tắt đơn hàng
    const productListContainer = document.getElementById('product-list');
    const subtotalDisplay = document.getElementById('subtotal');
    const finalTotalDisplay = document.getElementById('final-total');
    const totalDiscountDisplay = document.getElementById('total-discount');
    const discountAppliedLine = document.querySelector('.discount-applied-line');

    // Phần khuyến mãi/thanh toán
    const promoCheckboxes = document.querySelectorAll('.promo-item input[type="checkbox"]');
    const couponCodeInput = document.getElementById('coupon-code');
    const applyCouponButton = document.getElementById('apply-coupon');
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const transferInfo = document.getElementById('transfer-info');

    // ------------------------------------------------------------------
    // XỬ LÝ CUSTOM MODAL (CẢNH BÁO LỖI VÀ THÀNH CÔNG)
    // ------------------------------------------------------------------

    // Biến và Hàm Modal (giữ nguyên logic của bạn)
    const customAlertModal = document.getElementById('custom-alert-modal');
    const closeAlertBtn = document.getElementById('close-alert-btn');
    const alertMessage = document.getElementById('alert-message');
    const successModal = document.getElementById('success-modal');
    const closeSuccessBtn = document.getElementById('close-success-btn');

// --------------------------------------------------
// CUSTOM MODAL FUNCTIONS
// --------------------------------------------------

function showAlert(message) {
    alertMessage.textContent = message;
    customAlertModal.classList.add('show');
}

function closeAlert() {
    customAlertModal.classList.remove('show');
}

function showSuccessModal(orderId) {
    // Gán mã đơn hàng vào modal
    const orderIdSpan = successModal.querySelector('.order-id-display span');
    if (orderIdSpan) {
        orderIdSpan.textContent = orderId;
    }

    // Hiển thị modal thành công
    successModal.classList.add('show');
}

    // CẬP NHẬT: Hàm đóng Success Modal để XÓA GIỎ HÀNG
    function closeSuccessModal() {
        successModal.classList.remove('show');
        orderForm.reset();

        // Xóa giỏ hàng sau khi đặt thành công (Quan trọng!)
        saveCart([]);

        // Cần phải tải lại tổng tiền và chuyển hướng
        // Dùng window.location.reload() nếu muốn reset, hoặc chuyển hướng về trang chủ
        // calculateTotal(); 
        // window.location.href = 'index.html'; 
    }

    closeAlertBtn.addEventListener('click', closeAlert);
    closeSuccessBtn.addEventListener('click', closeSuccessModal);

    // ------------------------------------------------------------------
    // HÀM CHÍNH: RENDER VÀ TÍNH TOÁN
    // ------------------------------------------------------------------

    // --- 1. Hàm Render (Vẽ) Danh sách sản phẩm (CẬP NHẬT) ---
    function renderProductList() {
        let htmlContent = '';
        let totalSubtotal = 0;

        currentCart.forEach(product => {
            const price = parsePrice(product.price);
            const currentTotal = price * product.quantity;
            // Giả định originalPrice có thể không tồn tại
            const currentOriginalPrice = product.originalPrice ? parsePrice(product.originalPrice) : price;
            const currentOriginalTotal = currentOriginalPrice * product.quantity;
            totalSubtotal += currentTotal;

            // KHÔI PHỤC CẤU TRÚC HTML CÓ HÌNH ẢNH VÀ MÔ TẢ
            htmlContent += `
            <div class="product-item">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <p class="product-name">${product.name}</p>
                    <p class="product-desc">${product.description || ''}<br>SL: ${product.quantity}</p>
                </div>
                <div class="product-price">
                    <span class="old-price">${formatVND(currentOriginalTotal)}</span>
                    <span class="current-price">${formatVND(currentTotal)}</span>
                </div>
            </div>
        `;
        });

        productListContainer.innerHTML = htmlContent;
        return totalSubtotal;
    }

    // --- 2. Hàm Tính toán Tổng tiền ---
    function calculateTotal() {
        const initialSubtotal = renderProductList(); // TỰ ĐỘNG gọi hàm hiển thị sản phẩm
        let totalDiscount = 0;

        let selectedDiscount = 0;
        promoCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const discountValue = parseInt(checkbox.dataset.discount);
                selectedDiscount = Math.max(selectedDiscount, discountValue);
            }
        });

        let couponDiscount = 0;
        if (couponCodeInput.value.toUpperCase() === 'SALE50') {
            couponDiscount = 50000;
        }

        totalDiscount = Math.max(selectedDiscount, couponDiscount);

        let finalTotal = initialSubtotal - totalDiscount + shippingFee;

        if (totalDiscount > 0) {
            totalDiscountDisplay.textContent = '-' + formatVND(totalDiscount);
            discountAppliedLine.style.display = 'flex';
        } else {
            discountAppliedLine.style.display = 'none';
        }

        subtotalDisplay.textContent = formatVND(initialSubtotal);
        document.getElementById('shipping-fee').textContent = formatVND(shippingFee);
        finalTotalDisplay.textContent = formatVND(finalTotal);
    }

    // ------------------------------------------------------------------
    // CHỨC NĂNG KIỂM TRA FORM VÀ XỬ LÝ ĐẶT HÀNG (Logic chính)
    // ------------------------------------------------------------------

    function validateForm(event) {
        event.preventDefault();

        let firstErrorElement = null;
        let isValid = true;

        // 1. Xóa trạng thái lỗi cũ (giữ nguyên logic của bạn)
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        document.querySelectorAll('.form-group.has-error').forEach(el => el.classList.remove('has-error'));

        const requiredFields = orderForm.querySelectorAll('[required]');

        // 2. Kiểm tra lỗi (giữ nguyên logic của bạn)
        requiredFields.forEach(field => {
            const formGroup = field.closest('.form-group');
            // ... (Logic kiểm tra rỗng) ...
            const isMissing = field.value.trim() === "" || (field.tagName === 'SELECT' && field.value === "");

            if (isMissing) {
                isValid = false;
                field.classList.add('input-error');
                if (formGroup) formGroup.classList.add('has-error');
                if (!firstErrorElement) firstErrorElement = field;
            }
        });

        if (!isValid) {
            showAlert("⚠️ Vui lòng điền đầy đủ các thông tin bắt buộc (*)...");
            if (firstErrorElement) {
                firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => { firstErrorElement.focus(); }, 300);
            }
            return false;
        }

        // THÀNH CÔNG
        const orderId = Math.floor(100000 + Math.random() * 900000);
        showSuccessModal(orderId);
    }

    // ------------------------------------------------------------------
    // KHỞI TẠO VÀ GẮN SỰ KIỆN 
    // ------------------------------------------------------------------

    // Gắn sự kiện: Nút Đặt hàng (giữ nguyên)
    placeOrderBtn.addEventListener('click', validateForm);

    // Gắn sự kiện: Khuyến mãi/Coupon (giữ nguyên)
    applyCouponButton.addEventListener('click', calculateTotal);

    promoCheckboxes.forEach(checkbox => { /* ... */ });

    // Gắn sự kiện: Thanh toán (giữ nguyên)
    paymentMethods.forEach(radio => {
        radio.addEventListener('change', function () {
            transferInfo.style.display = (this.value === 'TRANSFER') ? 'block' : 'none';
        });
    });

    // Khởi tạo tính toán tổng tiền khi tải trang (TỰ ĐỘNG)
    calculateTotal();
    document.getElementById('payment-cod').checked = true;
    // Đảm bảo ẩn thông tin chuyển khoản khi mới vào trang (vì mặc định là COD)
    transferInfo.style.display = 'none';
});

