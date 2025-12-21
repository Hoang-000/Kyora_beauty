document.addEventListener("DOMContentLoaded", () => {
  if (typeof products === "undefined") return;

  // Lọc sản phẩm dựa trên thuộc tính
  renderSection("sale-products", products.filter(p => p.isSale).slice(0, 3));
  renderSection("new-products", products.filter(p => p.isNew).slice(0, 3));
  renderSection("best-products", products.filter(p => p.isBestSeller).slice(0, 3));
});

function renderSection(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container || !list) return;

  container.innerHTML = list.map(p => {
    // 👉 XỬ LÝ GIÁ AN TOÀN
    const rawPrice = String(p.price || "");
    const priceNumber = parseInt(rawPrice.replace(/[^\d]/g, ""), 10);
    const priceText = priceNumber
      ? priceNumber.toLocaleString("vi-VN") + "đ"
      : "";

    return `
      <a href="/Kyora_beauty/product/product-detail.html?id=${p.id}" class="product-item-link">
        <div class="product-item">
          <img src="${p.image}" alt="${p.name}">
          <p class="brand-name">${p.brandName || ""}</p>
          <h3>${p.name}</h3>
          <p class="product-description">${p.description || ""}</p>
          <div class="price">${priceText}</div>

          <div class="product-actions">
            <button class="btn-buy">Mua ngay</button>
            <button class="btn-add-cart" onclick="event.preventDefault(); alert('Đã thêm vào giỏ!')"><span>+</span></button>
          </div>
        </div>
      </a>
    `;
  }).join("");
}