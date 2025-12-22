document.addEventListener('DOMContentLoaded', function () {

    /* ======================================================
       CẤU HÌNH CHUNG
    ====================================================== */

    // Phí vận chuyển (hiện tại miễn phí)
    const shippingFee = 0;

    /* ======================================================
       CÁC HÀM TIỆN ÍCH (UTILS)
    ====================================================== */

    // Format số tiền sang dạng tiền Việt Nam (VD: 320000 -> 320.000đ)
    function formatVND(amount) {
        return Math.max(0, amount).toLocaleString('vi-VN') + 'đ';
    }

    // Chuyển giá từ chuỗi sang số (VD: "320.000đ" -> 320000)
    function parsePrice(price) {
        if (typeof price === 'number') return price;
        return parseInt(price.replace(/\D/g, '')) || 0;
    }

    // Lấy giỏ hàng từ LocalStorage
    function getCart() {
        const cartJson = localStorage.getItem('cart');
        return cartJson ? JSON.parse(cartJson) : [];
    }

    /* ======================================================
       KHAI BÁO CÁC PHẦN TỬ DOM
    ====================================================== */

    const orderForm = document.getElementById('order-form');
    const placeOrderBtn = document.querySelector('.place-order-btn');

    const productListContainer = document.getElementById('product-list');
    const subtotalDisplay = document.getElementById('subtotal');
    const finalTotalDisplay = document.getElementById('final-total');
    const totalDiscountDisplay = document.getElementById('total-discount');
    const discountAppliedLine = document.querySelector('.discount-applied-line');

    const promoCheckboxes = document.querySelectorAll('.promo-item input[type="checkbox"]');
    const couponCodeInput = document.getElementById('coupon-code');
    const applyCouponButton = document.getElementById('apply-coupon');

    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const transferInfo = document.getElementById('transfer-info');

    const customAlertModal = document.getElementById('custom-alert-modal');
    const alertMessage = document.getElementById('alert-message');
    const closeAlertBtn = document.getElementById('close-alert-btn');

    const successModal = document.getElementById('success-modal');
    const closeSuccessBtn = document.getElementById('close-success-btn');

    // Giỏ hàng hiện tại
    const currentCart = getCart();

    /* ======================================================
       CÁC HÀM XỬ LÝ MODAL
    ====================================================== */

    // Hiển thị modal cảnh báo lỗi
    function showAlert(message) {
        alertMessage.textContent = message;
        customAlertModal.classList.add('show');
    }

    // Đóng modal cảnh báo
    function closeAlert() {
        customAlertModal.classList.remove('show');
    }

    // Hiển thị modal đặt hàng thành công
    function showSuccessModal(orderId) {
        successModal.querySelector('.order-id-display span').textContent = orderId;
        successModal.classList.add('show');
    }

    // Đóng modal thành công
    // → Xóa giỏ hàng
    // → Quay về trang sản phẩm
    function closeSuccessModal() {
        successModal.classList.remove('show');
        orderForm.reset();
        localStorage.removeItem('cart'); // Xóa giỏ hàng sau khi đặt thành công
        window.location.href = '../pages/sanpham.html';
    }

    closeAlertBtn.addEventListener('click', closeAlert);
    closeSuccessBtn.addEventListener('click', closeSuccessModal);

    /* ======================================================
       KIỂM TRA GIỎ HÀNG RỖNG KHI VÀO TRANG THANH TOÁN
    ====================================================== */

    // Nếu không có sản phẩm trong giỏ hàng
    if (!currentCart || currentCart.length === 0) {
        showAlert('🛒 Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.');

        // Sau 2 giây tự động quay về trang giỏ hàng
        setTimeout(() => {
            window.location.href = '../pages/giohang.html';
        }, 2000);

        // Dừng toàn bộ script
        return;
    }

    /* ======================================================
       HIỂN THỊ DANH SÁCH SẢN PHẨM
    ====================================================== */

    function renderProductList() {
        let html = '';
        let subtotal = 0;

        currentCart.forEach(product => {
            const price = parsePrice(product.price);
            const total = price * product.quantity;
            subtotal += total;

            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <p class="product-name">${product.name}</p>
                        <p class="product-desc">Số lượng: ${product.quantity}</p>
                    </div>
                    <div class="product-price">
                        <span class="current-price">${formatVND(total)}</span>
                    </div>
                </div>
            `;
        });

        productListContainer.innerHTML = html;
        return subtotal;
    }

    /* ======================================================
       TÍNH TOÁN TỔNG TIỀN
    ====================================================== */

    function calculateTotal() {
        const subtotal = renderProductList();

        // Lấy khuyến mãi checkbox (chỉ áp dụng mã giảm lớn nhất)
        let promoDiscount = 0;
        promoCheckboxes.forEach(cb => {
            if (cb.checked) {
                promoDiscount = Math.max(promoDiscount, parseInt(cb.dataset.discount));
            }
        });

        // Áp dụng mã coupon (nếu có)
        let couponDiscount = couponCodeInput.value.toUpperCase() === 'SALE50' ? 50000 : 0;

        // Lấy mức giảm cao nhất
        let discount = Math.max(promoDiscount, couponDiscount);

        subtotalDisplay.textContent = formatVND(subtotal);
        document.getElementById('shipping-fee').textContent = formatVND(shippingFee);

        if (discount > 0) {
            totalDiscountDisplay.textContent = '-' + formatVND(discount);
            discountAppliedLine.style.display = 'flex';
        } else {
            discountAppliedLine.style.display = 'none';
        }

        finalTotalDisplay.textContent = formatVND(subtotal - discount + shippingFee);
    }

    /* ======================================================
       KIỂM TRA FORM & XỬ LÝ ĐẶT HÀNG
    ====================================================== */

    function validateForm(e) {
        e.preventDefault();

        // Kiểm tra lại giỏ hàng lần cuối
        if (!getCart() || getCart().length === 0) {
            showAlert('❌ Không có sản phẩm nào trong giỏ hàng.');
            setTimeout(() => {
                window.location.href = '../pages/giohang.html';
            }, 2000);
            return;
        }

        let valid = true;
        let firstError = null;

        // Kiểm tra các trường bắt buộc
        orderForm.querySelectorAll('[required]').forEach(field => {
            if (!field.value.trim()) {
                valid = false;
                field.classList.add('input-error');
                if (!firstError) firstError = field;
            }
        });

        if (!valid) {
            showAlert('⚠️ Vui lòng điền đầy đủ thông tin bắt buộc');
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        // Sinh mã đơn hàng ngẫu nhiên
        const orderId = Math.floor(100000 + Math.random() * 900000);
        showSuccessModal(orderId);
    }

    /* ======================================================
       GẮN SỰ KIỆN
    ====================================================== */

    placeOrderBtn.addEventListener('click', validateForm);
    applyCouponButton.addEventListener('click', calculateTotal);
    promoCheckboxes.forEach(cb => cb.addEventListener('change', calculateTotal));

    paymentMethods.forEach(radio => {
        radio.addEventListener('change', () => {
            transferInfo.style.display = radio.value === 'TRANSFER' ? 'block' : 'none';
        });
    });

    /* ======================================================
       KHỞI TẠO BAN ĐẦU
    ====================================================== */

    calculateTotal();
    document.getElementById('payment-cod').checked = true;
    transferInfo.style.display = 'none';
});
