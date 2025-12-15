document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-note-form');
    const successMessage = document.getElementById('success-message');
    const backLink = document.getElementById('backLink');
    const countdownElement = document.getElementById('countdown');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Ẩn form và hiển thị thông báo thành công
            form.style.display = 'none';
            successMessage.style.display = 'block';
            backLink.style.display = 'none'; // Ẩn nút back link trong khi đếm ngược

            // Bắt đầu đếm ngược
            let countdown = 5;
            countdownElement.textContent = countdown;

            const interval = setInterval(() => {
                countdown--;
                countdownElement.textContent = countdown;

                if (countdown <= 0) {
                    clearInterval(interval);
                    
                    // Chuyển hướng về trang chính sách nguồn
                    const backUrl = backLink.href; 
                    window.location.href = backUrl;
                }
            }, 1000);
            
            // Trong trường hợp muốn hủy chuyển hướng, hiển thị lại nút back link sau 5 giây
            // setTimeout(() => {
            //     if (countdown > 0) {
            //         backLink.style.display = 'block';
            //     }
            // }, 5000);
        });
    }
});