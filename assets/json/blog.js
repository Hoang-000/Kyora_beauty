const posts = [
  {
    id: 0,
    title: "Routine chăm sóc da buổi tối cho da nhạy cảm",
    category: "Skincare",
    image: "../assets/images/danhaycam.png",
    desc: "Quy trình dưỡng da nhẹ nhàng giúp da phục hồi sau một ngày dài.",
    content: `
      <img src="../assets/images/danhaycam.png">
      <p>Buổi tối là thời điểm quan trọng để làn da được nghỉ ngơi và tái tạo.</p>
      <p>Đối với da nhạy cảm, bạn nên ưu tiên sản phẩm dịu nhẹ, không cồn.</p>
      <h4>Các bước cơ bản:</h4>
      <ul>
        <li>Tẩy trang dịu nhẹ</li>
        <li>Sữa rửa mặt pH thấp</li>
        <li>Toner làm dịu</li>
        <li>Serum phục hồi</li>
        <li>Kem dưỡng khóa ẩm</li>
      </ul>
    `
  },

  {
    id: 1,
    title: "Xu hướng makeup pastel năm 2025",
    category: "Makeup",
    image: "../assets/images/makeuppastel.png",
    desc: "Phong cách trang điểm nhẹ nhàng, trong veo đang lên ngôi.",
    content: `
      <img src="../assets/images/makeuppastel.png">
      <p>Makeup pastel mang lại vẻ ngoài ngọt ngào, tự nhiên.</p>
      <p>Gam màu hồng phấn, cam đào giúp gương mặt trẻ trung hơn.</p>
      <h4>Gợi ý:</h4>
      <ul>
        <li>Son nude hồng</li>
        <li>Má hồng kem</li>
        <li>Highlight ánh ngọc trai</li>
      </ul>
    `
  },

  {
    id: 2,
    title: "Cách chọn sữa rửa mặt phù hợp từng loại da",
    category: "Skincare",
    image: "../assets/images/suaruamat.png",
    desc: "Không phải sữa rửa mặt đắt tiền là tốt cho mọi làn da.",
    content: `
      <img src="../assets/images/suaruamat.png">
      <p>Mỗi loại da cần một loại sữa rửa mặt khác nhau.</p>
      <p>Da dầu nên chọn dạng gel, da khô nên chọn dạng cream.</p>
    `
  },

  {
    id: 3,
    title: "Routine sáng tối giản cho da dầu",
    category: "Routine",
    image: "../assets/images/routine.png",
    desc: "Quy trình gọn nhẹ giúp da thông thoáng cả ngày.",
    content: `
      <img src="../assets/images/routine.png">
      <p>Da dầu không cần quá nhiều bước.</p>
      <ol>
        <li>Sữa rửa mặt</li>
        <li>Toner kiềm dầu</li>
        <li>Serum nhẹ</li>
        <li>Kem dưỡng gel</li>
      </ol>
    `
  },

  {
    id: 4,
    title: "Top toner dịu nhẹ cho da nhạy cảm",
    category: "Skincare",
    image: "../assets/images/toner.png",
    desc: "Những sản phẩm toner được bác sĩ da liễu khuyên dùng.",
    content: `
      <img src="../assets/images/toner.png">
      <p>Toner giúp cân bằng da sau khi rửa mặt.</p>
      <p>Hãy tránh toner chứa cồn nồng độ cao.</p>
    `
  },

  {
    id: 5,
    title: "Makeup clean girl - xu hướng tối giản",
    category: "Makeup",
    image: "../assets/images/cleangirl.png",
    desc: "Trang điểm như không trang điểm đang rất được ưa chuộng.",
    content: `
      <img src="../assets/images/cleangirl.png">
      <p>Clean girl makeup tập trung vào làn da khỏe.</p>
      <p>Lớp nền mỏng nhẹ, son bóng tự nhiên.</p>
    `
  },
  {
    id: 6,
    title: "Cách phục hồi da sau treatment",
    category: "Skincare",
    image: "../assets/images/streatment.png",
    desc: "Giúp da nhanh khỏe lại sau peel, laser.",
    content: `<img src="../assets/images/streatment.png">
    <p>Nên dùng sản phẩm phục hồi chuyên sâu.</p>`
  },

  {
    id: 7,
    title: "Son nude hợp mọi tone da",
    category: "Makeup",
    image: "../assets/images/sonnude.png",
    desc: "Chọn son nude không khiến gương mặt bị nhợt nhạt.",
    content: `<img src="../assets/images/sonnude.png">
    <p>Ưu tiên son nude ánh hồng, ánh cam.</p>`
  },

  {
    id: 8,
    title: "Routine chăm sóc da mùa hè",
    category: "Routine",
    image: "../assets/images/skincaremuahe.png",
    desc: "Giữ da thông thoáng, hạn chế đổ dầu.",
    content: `<img src="../assets/images/skincaremuahe.png">
    <p>Mùa hè nên tối giản bước dưỡng.</p>`
  },

  {
    id: 9,
    title: "Phân biệt da khô và da thiếu nước",
    category: "Skincare",
    image: "../assets/images/pbda.png",
    desc: "Rất nhiều người nhầm lẫn hai tình trạng này.",
    content: `<img src="../assets/images/pbda.png">
    <p>Da thiếu nước vẫn có thể tiết dầu.</p>`
  },

  {
    id: 10,
    title: "Makeup dự tiệc nhẹ nhàng",
    category: "Makeup",
    image: "../assets/images/makeuptiec.png",
    desc: "Vừa nổi bật vừa không quá đậm.",
    content: `<img src="../assets/images/makeuptiec.png">
    <p>Nhấn vào mắt và môi.</p>`
  },

  {
    id: 11,
    title: "Serum nào phù hợp cho người mới bắt đầu",
    category: "Skincare",
    image: "../assets/images/serum.png",
    desc: "Không cần dùng serum quá mạnh.",
    content: `<img src="../assets/images/serum.png"><p>Nên bắt đầu với serum cấp ẩm.</p>`
  },

  {
    id: 12,
    title: "Routine da hỗn hợp thiên dầu",
    category: "Routine",
    image: "../assets/images/dahonhop.png",
    desc: "Cân bằng giữa làm sạch và dưỡng ẩm.",
    content: `<img src="../assets/images/dahonhop.png">
    <p>Không bỏ qua bước dưỡng nhẹ.</p>`
  },

  {
    id: 13,
    title: "Xu hướng son bóng quay trở lại",
    category: "Makeup",
    image: "../assets/images/sonbong.png",
    desc: "Son bóng giúp môi căng mọng.",
    content: `<img src="../assets/images/sonbong.png"><p>Phù hợp phong cách trẻ trung.</p>`
  },

  {
    id: 14,
    title: "Cách dùng mặt nạ giấy hiệu quả",
    category: "Skincare",
    image: "../assets/images/sdmatna.png",
    desc: "Không phải đắp càng lâu càng tốt.",
    content: `<img src="../assets/images/sdmatna.png">
    <p>Chỉ nên đắp 15-20 phút.</p>`
  },

  {
    id: 15,
    title: "Makeup cho người mới bắt đầu",
    category: "Makeup",
    image: "../assets/images/makengmoi.png",
    desc: "Trang điểm cơ bản dễ thực hiện.",
    content: `<img src="../assets/images/makengmoi.png">
    <p>Bắt đầu từ nền và son.</p>`
  },

  {
    id: 16,
    title: "Routine tối cho da mụn",
    category: "Routine",
    image: "../assets/images/toichodamun.png",
    desc: "Giúp da nghỉ ngơi và phục hồi.",
    content: `<img src="../assets/images/toichodamun.png">
    <p>Không lạm dụng treatment.</p>`
  },

  {
    id: 17,
    title: "Cách test mỹ phẩm tránh kích ứng",
    category: "Skincare",
    image: "../assets/images/testmypham.png",
    desc: "Bước quan trọng trước khi dùng sản phẩm mới.",
    content: `<img src="../assets/images/testmypham.png">
    <p>Test ở sau tai hoặc cổ tay.</p>`
  },

  {
    id: 18,
    title: "Makeup tông hồng ngọt ngào",
    category: "Makeup",
    image: "../assets/images/tonehong.png",
    desc: "Phong cách phù hợp đi chơi, hẹn hò.",
    content: `<img src="../assets/images/tonehong.png">
    <p>Tông hồng giúp gương mặt tươi tắn.</p>`
  },

  {
    id: 19,
    title: "Routine dưỡng da tối giản cho người bận rộn",
    category: "Routine",
    image: "../assets/images/ngbanron.png",
    desc: "Chỉ 3 bước vẫn đủ hiệu quả.",
    content: `<img src="../assets/images/ngbanron.png">
    <p>Làm sạch - dưỡng - khóa ẩm.</p>`
  }
];

// ============================
// RENDER + INTERACTION
// ============================
const blogList = document.getElementById('blogList');
const modal = document.getElementById('postModal');
const detail = document.getElementById('postDetail');
const recent = document.getElementById('recentView');

function render(list) {
  blogList.innerHTML = '';
  list.forEach(p => {
    blogList.innerHTML += `
      <div class="blog-card" onclick="openPost(${p.id})">
        <img src="${p.image}">
        <div class="content">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>
      </div>
    `;
  });
}

function openPost(id) {
  const p = posts.find(x => x.id === id);
  detail.innerHTML = `
    <h2>${p.title}</h2>
    ${p.content}
  `;
  modal.style.display = 'flex';
  recent.innerHTML += `<li>${p.title}</li>`;
}

function closePost() {
  modal.style.display = 'none';
}

function filterCategory(cat) {
  render(posts.filter(p => p.category === cat));
}

render(posts);
