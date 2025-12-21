document.addEventListener('DOMContentLoaded', function() {
    // 1. Load Header
    fetch("/components/header.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("header-placeholder").innerHTML = html;
            setupHeaderEvents();
            updateCartCount();
        });

    // 2. Load Footer
    fetch("/components/footer.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("footer-placeholder").innerHTML = html;
        });

    function setupHeaderEvents() {
        const openSearch = document.getElementById('openSearch');
        const closeSearch = document.getElementById('closeSearch');
        const searchOverlay = document.getElementById('searchOverlay');

        if (openSearch) {
            openSearch.addEventListener('click', () => {
                searchOverlay.style.display = 'flex';
                document.getElementById('globalSearchInput').focus();
            });
        }

        if (closeSearch) {
            closeSearch.addEventListener('click', () => {
                searchOverlay.style.display = 'none';
            });
        }

        // Đóng search khi bấm phím Esc
        window.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && searchOverlay) {
                searchOverlay.style.display = 'none';
            }
        });
    }

    // Hàm cập nhật số lượng giỏ hàng giả lập
    function updateCartCount() {
        const count = localStorage.getItem('cartCount') || 0;
        const badge = document.querySelector('.cart-count');
        if (badge) badge.textContent = count;
    }
});

// Hiệu ứng Header nhỏ lại khi cuộn trang
window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
        header.style.padding = '5px 0';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.padding = '12px 0';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});