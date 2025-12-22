// Trang_chi_tiết_sản_phẩm.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lấy ID sản phẩm từ URL (Ví dụ: Trang_chi_tiết_sản_phẩm.html?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Lấy các phần tử hiển thị trạng thái
    const loadingMessage = document.getElementById('loading-message');
    const notFoundMessage = document.getElementById('not-found-message');
    const detailContainer = document.getElementById('product-detail-container');

    // Tìm sản phẩm trong mảng products (được định nghĩa trong products.js)
    const product = products.find(p => p.id === productId);

    if (product) {
        // Nếu tìm thấy sản phẩm, tiến hành render chi tiết
        renderProductDetails(product);

        // Ẩn thông báo tải, hiện nội dung chi tiết
        loadingMessage.style.display = 'none';
        detailContainer.style.display = 'block';

        setupActionButtons(product);
        setupAccordion(); // THIẾT LẬP HIỆU ỨNG ĐÓNG MỞ
    } else {
        // Nếu không tìm thấy
        loadingMessage.style.display = 'none';
        notFoundMessage.style.display = 'block';
    }
});


/**
 * Hàm đổ dữ liệu sản phẩm vào các phần tử HTML tương ứng
 * @param {object} product - Đối tượng sản phẩm
 */
function renderProductDetails(product) {
    // 1. Cập nhật thông tin cơ bản
    document.getElementById('brandName').textContent = product.brandName || '';
    document.getElementById('productName').textContent = product.name;
    document.getElementById('price').textContent = product.price;

    const mainImage = document.getElementById('main-image');
    mainImage.src = product.image;
    mainImage.alt = product.name;

    document.getElementById('shortDescription').textContent = product.description;

    // 2. Cập nhật nội dung các Block Chi tiết Xếp chồng
    document.getElementById('descriptionContent').textContent = product.description;
    document.getElementById('usesContent').textContent = product.uses || 'Đang cập nhật...';
    document.getElementById('howToUseContent').textContent = product.howToUse || 'Đang cập nhật...';

    // Giữ định dạng xuống dòng cho Thành phần
    document.getElementById('ingredientsContent').textContent = product.ingredients || 'Đang cập nhật...';
}

/**
 * Hàm thiết lập sự kiện cho nút Mua và Thêm giỏ hàng
 * @param {object} product - Đối tượng sản phẩm
 */
function setupActionButtons(product) {
    const buyNowBtn = document.querySelector('.action-buttons .btn-buy');
    const addToCartBtn = document.querySelector('.action-buttons .btn-add-cart');
    const quantityInput = document.getElementById('quantity');

    buyNowBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCartStorage(product, quantity);
       window.location.href = `${BASE_URL}/cart/checkout.html`;
    });

    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCartStorage(product, quantity);
        alert(`Đã thêm ${quantity} sản phẩm: ${product.name} vào giỏ hàng!`);
    });
}

/**
 * Hàm thiết lập hiệu ứng đóng mở (Accordion) cho các khối mô tả.
 */
function setupAccordion() {
    const detailTitles = document.querySelectorAll('.detail-title');

    detailTitles.forEach(title => {
        title.addEventListener('click', () => {
            // Lấy ID của nội dung cần đóng/mở
            const contentId = title.getAttribute('data-content-id');
            const content = document.getElementById(contentId);

            if (content) {
                // Toggle trạng thái 'active' trên tiêu đề và 'is-open' trên nội dung
                title.classList.toggle('active');
                content.classList.toggle('is-open');
            }
        });
    });
}

/**
 * Hàm lưu sản phẩm vào LocalStorage
 */
function addToCartStorage(product, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}
