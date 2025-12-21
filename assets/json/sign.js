// --- LOGIC CHÍNH ---

document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        showProfile(currentUser);
    } else {
        showAuth();
    }
});

// --- 1. XỬ LÝ ĐĂNG NHẬP / ĐĂNG KÝ ---

function switchAuthTab(tabName) {
    // Ẩn tất cả các form
    const loginForm = document.getElementById('login-form');
    const regForm = document.getElementById('register-form');
    const forgotForm = document.getElementById('forgot-form');

    if (loginForm) loginForm.classList.add('hidden');
    if (regForm) regForm.classList.add('hidden');
    if (forgotForm) forgotForm.classList.add('hidden');

    // Xử lý active state cho tabs
    const tabs = document.querySelectorAll('.auth-tab');
    tabs.forEach(t => t.classList.remove('active'));

    // Hiện form tương ứng
    if (tabName === 'login') {
        if (loginForm) loginForm.classList.remove('hidden');
        if (tabs[0]) tabs[0].classList.add('active');
    } else if (tabName === 'register') {
        if (regForm) regForm.classList.remove('hidden');
        if (tabs[1]) tabs[1].classList.add('active');
    } else if (tabName === 'forgot') {
        if (forgotForm) forgotForm.classList.remove('hidden');
        // Tab quên mật khẩu không cần highlight tab nào hoặc giữ nguyên
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const errorMsg = document.getElementById('reg-error');

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(u => u.email === email)) {
        errorMsg.textContent = "Email này đã được đăng ký!";
        errorMsg.style.display = 'block';
        return;
    }

    const newUser = { email, password, name, phone: '', address: '', province: '', district: '', ward: '', gender: '', dob: '' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    switchAuthTab('login');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorMsg = document.getElementById('login-error');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        showProfile(user);
    } else {
        errorMsg.textContent = "Email hoặc mật khẩu không đúng!";
        errorMsg.style.display = 'block';
    }
}

// Xử lý submit form quên mật khẩu (Demo)
function handleForgot(e) {
    e.preventDefault();
    alert('Yêu cầu khôi phục mật khẩu đã được gửi vào email của bạn!');
}

// --- 2. XỬ LÝ CẬP NHẬT PROFILE ---

function showProfile(user) {
    document.getElementById('auth-section').classList.add('hidden');
    document.getElementById('profile-section').classList.remove('hidden');

    // Điền dữ liệu vào form
    document.getElementById("fullname").value = user.name || "";
    document.getElementById("email").value = user.email || "";
    document.getElementById("phone").value = user.phone || "";
    document.getElementById("gender").value = user.gender || "";
    document.getElementById("dob").value = user.dob || "";
    document.getElementById("province").value = user.province || "";
    document.getElementById("district").value = user.district || "";
    document.getElementById("ward").value = user.ward || "";
    document.getElementById("address-detail").value = user.address || "";
}

function showAuth() {
    document.getElementById('auth-section').classList.remove('hidden');
    document.getElementById('profile-section').classList.add('hidden');
}

function handleUpdateProfile(e) {
    e.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Lấy dữ liệu từ form
    const updatedInfo = {
        name: document.getElementById("fullname").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        gender: document.getElementById("gender").value,
        dob: document.getElementById("dob").value,
        province: document.getElementById("province").value,
        district: document.getElementById("district").value.trim(),
        ward: document.getElementById("ward").value.trim(),
        address: document.getElementById("address-detail").value.trim()
    };

    if (!updatedInfo.name || !updatedInfo.phone) {
        alert("❌ Vui lòng điền đầy đủ Họ tên và Số điện thoại!");
        return;
    }

    // Cập nhật currentUser
    Object.assign(currentUser, updatedInfo);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Cập nhật trong danh sách users tổng
    const index = users.findIndex(u => u.email === currentUser.email);
    if (index !== -1) {
        users[index] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }

    alert("✅ Cập nhật thông tin thành công!");
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    location.reload();
}

// --- 3. XỬ LÝ ĐĂNG NHẬP MẠNG XÃ HỘI (MÔ PHỎNG) ---

function handleSocialLogin(provider) {
    let user;
    // Tạo dữ liệu giả lập cho Facebook/Google
    if (provider === 'facebook') {
        user = { email: 'fb_user@example.com', name: 'Người dùng Facebook', phone: '', address: '', province: '', district: '', ward: '', gender: '', dob: '', password: 'social_login' };
    } else if (provider === 'google') {
        user = { email: 'gg_user@gmail.com', name: 'Người dùng Google', phone: '', address: '', province: '', district: '', ward: '', gender: '', dob: '', password: 'social_login' };
    }

    if (user) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        // Kiểm tra xem user giả lập này đã có trong danh sách chưa để giữ lại thông tin cũ nếu có
        const existingUser = users.find(u => u.email === user.email);

        if (existingUser) {
            user = existingUser;
        } else {
            // Nếu chưa có thì thêm vào danh sách users
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }

        // Lưu vào phiên đăng nhập hiện tại
        localStorage.setItem('currentUser', JSON.stringify(user));

        alert(`Đăng nhập bằng ${provider === 'facebook' ? 'Facebook' : 'Google'} thành công!`);
        showProfile(user);
    }
}
