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

function switchTab(tab) {
    const loginForm = document.getElementById('login-form');
    const regForm = document.getElementById('register-form');
    const tabs = document.querySelectorAll('.auth-tab');

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
        tabs[1].classList.add('active');
        tabs[0].classList.remove('active');
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
    switchTab('login');
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
