// Trang_sản_phẩm.js

document.addEventListener('DOMContentLoaded', function () {
    const productGrid = document.getElementById('productGrid');
    const categoryLinks = document.querySelectorAll('.category-list a');
    const brandFilter = document.getElementById('brand-filter');
    const localSearchInput = document.getElementById('localSearchInput');
    const noProductsMessage = document.getElementById('no-products');
    const paginationControls = document.getElementById('paginationControls');

    // Kiểm tra nếu không có element productGrid thì dừng (tránh lỗi)
    if (!productGrid) return;

    // Kiểm tra dữ liệu products
    if (typeof products === 'undefined') {
        console.error("Không tìm thấy biến 'products'. Hãy đảm bảo file products.js được nhúng trước file này.");
        return;
    }

    // Cấu hình phân trang
    const PRODUCTS_PER_PAGE = 9;
    let currentPage = 1;

    let activeCategory = 'all';
    let activeBrand = 'all';
    let searchKeyword = '';

    function createProductCard(product) {
        const detailLink = `/Kyora_beauty/product/product-detail.html?id=${product.id}`;

        return `
            <a href="${detailLink}" class="product-item-link"> <div class="product-item">
                    <img src="${product.image}" alt="${product.name}">
                    <p class="brand-name">${product.brandName || ''}</p>
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <p class="price">${product.price}</p>
                        <div class="product-actions">
                            <button class="btn-buy" onclick="event.preventDefault(); window.location.href='${detailLink}'">Mua ngay</button>
                            <button class="btn-add-cart" data-id="${product.id}" onclick="event.preventDefault(); alert('Đã thêm sản phẩm vào giỏ hàng!')"><span>+</span></button>
                        </div>
                    </div>
                </div>
            </a>
        `;
    }

    function filterProducts() {
        const keyword = searchKeyword.toLowerCase();

        // 1. Lọc sản phẩm
        const filtered = products.filter(product => {
            // Lọc theo Danh mục (Category)
            const categoryMatch = activeCategory === 'all' || product.category === activeCategory;

            // Lọc theo Thương hiệu (Brand)
            const brandMatch = activeBrand === 'all' || product.brand === activeBrand;

            // Lọc theo Từ khóa tìm kiếm (Search)
            const nameMatch = product.name.toLowerCase().includes(keyword);
            const brandNameMatch = (product.brandName && product.brandName.toLowerCase().includes(keyword));
            const searchMatch = keyword === '' || nameMatch || brandNameMatch;

            return categoryMatch && brandMatch && searchMatch;
        });

        return filtered;
    }


    function renderProducts() {
        // Lấy danh sách sản phẩm đã lọc
        const filteredProducts = filterProducts();

        // Tính toán phân trang
        const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

        // Điều chỉnh currentPage nếu nó vượt quá tổng số trang
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        }

        // Tính toán chỉ số bắt đầu và kết thúc
        const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
        const endIndex = startIndex + PRODUCTS_PER_PAGE;

        // Lấy sản phẩm cho trang hiện tại
        const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

        productGrid.innerHTML = '';

        // 2. Hiển thị kết quả
        if (productsToDisplay.length === 0) {
            noProductsMessage.style.display = 'block';
            paginationControls.innerHTML = '';
        } else {
            noProductsMessage.style.display = 'none';
            productsToDisplay.forEach(product => {
                productGrid.innerHTML += createProductCard(product);
            });

            // Hiển thị điều khiển phân trang
            renderPagination(totalPages);
        }
    }

    function renderPagination(totalPages) {
        paginationControls.innerHTML = '';

        if (totalPages <= 1) return;

        // Nút Trang trước (Prev)
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.textContent = '<';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => {
            currentPage--;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang
        });
        paginationControls.appendChild(prevBtn);

        // Các nút số trang
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'pagination-btn';
            pageBtn.textContent = i;
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                renderProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang
            });
            paginationControls.appendChild(pageBtn);
        }

        // Nút Trang sau (Next)
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.textContent = '>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => {
            currentPage++;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang
        });
        paginationControls.appendChild(nextBtn);
    }


    // --- XỬ LÝ SỰ KIỆN ---

    // Xử lý click vào danh mục
    if (categoryLinks) {
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                categoryLinks.forEach(l => l.classList.remove('active-category'));
                link.classList.add('active-category');

                activeCategory = link.getAttribute('data-category');
                currentPage = 1; // Reset về trang 1 khi thay đổi bộ lọc
                renderProducts();
            });
        });
    }

    // Xử lý thay đổi Brand
    if (brandFilter) {
        brandFilter.addEventListener('change', (e) => {
            activeBrand = e.target.value;
            currentPage = 1; // Reset về trang 1 khi thay đổi bộ lọc
            renderProducts();
        });
    }

    // Xử lý sự kiện nhập liệu vào ô tìm kiếm
    if (localSearchInput) {
        localSearchInput.addEventListener('input', (e) => {
            searchKeyword = e.target.value.trim();

            // Bỏ chọn danh mục và brand khi tìm kiếm để tìm trên tất cả
            categoryLinks.forEach(l => l.classList.remove('active-category'));
            const allCat = document.querySelector('.category-list a[data-category="all"]');
            if (allCat) allCat.classList.add('active-category');

            activeCategory = 'all';
            if (brandFilter) brandFilter.value = 'all';
            activeBrand = 'all';

            currentPage = 1; // Reset về trang 1 khi tìm kiếm
            renderProducts();
        });
    }

    // Khởi tạo hiển thị sản phẩm lần đầu
    renderProducts();
});
