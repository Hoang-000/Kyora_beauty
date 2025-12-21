// Banner slider
new Swiper('.bannerSwiper', {
  loop: true,
  effect: 'slide',
  speed: 700,
  autoplay: { delay: 3500, disableOnInteraction: false },
  pagination: { el: '.bannerSwiper .swiper-pagination', clickable: true },
  navigation: { nextEl: '.bannerSwiper .swiper-button-next', prevEl: '.bannerSwiper .swiper-button-prev' },
});

// Promotions
new Swiper('.promoSwiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 600,
  autoplay: { delay: 3000 },
  navigation: { nextEl: '.promoSwiper .swiper-button-next', prevEl: '.promoSwiper .swiper-button-prev' },
});

// New Arrivals
new Swiper('.newSwiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 650,
  autoplay: { delay: 2800, disableOnInteraction: false },
  navigation: { nextEl: '.newSwiper .swiper-button-next', prevEl: '.newSwiper .swiper-button-prev' },
  breakpoints: {
    0: { slidesPerView: 1.2 },
    480: { slidesPerView: 2 },
    800: { slidesPerView: 3 },
    1100: { slidesPerView: 4 }
  }
});

// Best Sellers
new Swiper('.bestSwiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 18,
  autoplay: { delay: 3200 },
  navigation: { nextEl: '.bestSwiper .swiper-button-next', prevEl: '.bestSwiper .swiper-button-prev' },
  breakpoints: {
    0: { slidesPerView: 1.2 },
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
    1200: { slidesPerView: 4 }
  }
});

// Brands
new Swiper('.brandSwiper', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: { delay: 2200 },
  centeredSlides: true,
  breakpoints: {
    0: { slidesPerView: 2.2 },
    600: { slidesPerView: 3 },
    900: { slidesPerView: 4 },
    1200: { slidesPerView: 5 }
  }
});

// Blog Section
new Swiper('.blogSwiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: { delay: 3600 },
  breakpoints: {
    0: { slidesPerView: 1.05 },
    700: { slidesPerView: 2 },
    1000: { slidesPerView: 3 }
  }
});

// SEARCH POPUP
const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");

openSearch.addEventListener("click", () => {
  searchOverlay.style.display = "flex";
  setTimeout(() => searchInput.focus(), 100);
});

closeSearch.addEventListener("click", () => {
  searchOverlay.style.display = "none";
});

// Close on clicking outside
searchOverlay.addEventListener("click", (e) => {
  if (e.target === searchOverlay) {
    searchOverlay.style.display = "none";
  }
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchOverlay.style.display = "none";
  }
});


// PRODUCT SEARCH ENGINE
const resultsSection = document.getElementById("searchResults");
const resultsGrid = document.getElementById("resultsGrid");

searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const keyword = searchInput.value.trim().toLowerCase();
    searchOverlay.style.display = "none";

    if (keyword === "") return;

    const results = products.filter(p =>
      p.name.toLowerCase().includes(keyword)
    );

    displayResults(results);
  }
});

function displayResults(list) {
  resultsGrid.innerHTML = "";

  if (list.length === 0) {
    resultsGrid.innerHTML = "<p>Không tìm thấy sản phẩm phù hợp.</p>";
  } else {
    list.forEach(product => {
      const detailLink = `/Kyora_beauty/product/product-detail.html?id=${product.id}`;
      resultsGrid.innerHTML += `
                <a href="${detailLink}" class="product-item-link">
                    <div class="result-card">
                    <img src="${product.image}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    </div>
                </a>`;
    });
  }

  resultsSection.style.display = "block";
}

// STICKY HEADER
const header = document.getElementById("mainHeader");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});