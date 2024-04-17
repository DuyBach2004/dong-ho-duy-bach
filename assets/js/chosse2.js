console.log(document.querySelector('.form-group'));
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Ngăn chặn việc submit form mặc định
    event.preventDefault();

    // Lấy giá trị từ các trường input
    var name = document.getElementById('name').value.trim();
    var password = document.getElementById('password').value.trim();

    // Kiểm tra xem người dùng đã nhập đủ các trường hay chưa
    if (!name || !password) {
        // Nếu người dùng chưa nhập đủ, hiển thị thông báo lỗi trong thẻ span
        var errorSpan = document.createElement('span');
        errorSpan.textContent = 'Vui lòng điền đầy đủ thông tin.';
        errorSpan.style.color = 'red';
        document.querySelector('.form-group').appendChild(errorSpan);
    } else {
        // Nếu người dùng đã nhập đủ, chuyển hướng họ đến trang ./indexlogined.html
        window.location.href = './indexlogined.html';
    }
});