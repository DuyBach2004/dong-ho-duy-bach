// console.log(document.querySelectorAll('.single-popular-items'));
// document.querySelectorAll('.single-popular-items').forEach(item => {
//     item.addEventListener('click', event => {
//         // Ngăn chặn việc tải lại trang
//         // event.preventDefault();

//         // Lấy thông tin từ sản phẩm được nhấn
//         const imgSrc = event.currentTarget.querySelector('.popular-img img').src;
//         const productName = event.currentTarget.querySelector('.popular-caption h3 a').textContent;
//         const productPrice = event.currentTarget.querySelector('.popular-caption span').textContent;

//         // Cập nhật thông tin sản phẩm ở nơi bạn muốn hiển thị
//         document.querySelector('.product__main-img-list img').src = imgSrc;
//         document.querySelector('.product__main-info-title h2').textContent = productName;
//         document.querySelector('.product__main-info-price .product__main-info-price-current').textContent = productPrice;
//     });
// });

document.querySelectorAll('.single-popular-items').forEach(item => {
    item.addEventListener('click', event => {
        // Ngăn chặn việc tải lại trang
        event.preventDefault();

        // Lấy thông tin từ sản phẩm được nhấn
        const imgSrc = event.currentTarget.querySelector('.popular-img img').src;
        const productName = event.currentTarget.querySelector('.popular-caption h3 a').textContent;
        const productPrice = event.currentTarget.querySelector('.popular-caption span').textContent;

        // Lưu trữ thông tin sản phẩm vào Local Storage
        localStorage.setItem('selectedProductImg', imgSrc);
        localStorage.setItem('selectedProductName', productName);
        localStorage.setItem('selectedProductPrice', productPrice);

        // Chuyển hướng đến trang hiển thị thông tin sản phẩm mà không tải lại trang
        window.location.href = event.currentTarget.getAttribute('data-href');
    });
});

window.onload = function() {
    // Lấy thông tin sản phẩm từ Local Storage
    const imgSrc = localStorage.getItem('selectedProductImg');
    const productName = localStorage.getItem('selectedProductName');
    const productPrice = localStorage.getItem('selectedProductPrice');

    // Hiển thị thông tin sản phẩm
    document.querySelector('.product__main-img-list img').src = imgSrc;
    document.querySelector('.product__main-info-title h2').textContent = productName;
    document.querySelector('.product__main-info-price .product__main-info-price-current').textContent = productPrice;
};

document.querySelector('.contact_form').addEventListener('submit', function(event) {
    // Ngăn chặn việc submit form mặc định
    event.preventDefault();

    // Lấy giá trị từ các trường input
    var name = document.getElementById('name').value.trim();
    var password = document.getElementById('password').value.trim();

    // Kiểm tra xem các trường có giá trị null hay không
    if (!name || !password) {
        // Nếu một trong các trường là null, hiển thị lỗi trong thẻ span
        var errorSpan = document.createElement('span');
        errorSpan.textContent = 'Vui lòng điền đầy đủ thông tin.';
        errorSpan.style.color = 'red';
        document.querySelector('.contact_form').appendChild(errorSpan);
    } else {
        // Nếu tất cả các trường đều không null, tiếp tục xử lý form
        // ...
    }
});

