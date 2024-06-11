document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

function addToCart(product) {
    const cartItems = document.getElementById('cart-items');
    const item = document.createElement('li');
    item.textContent = product;
    cartItems.appendChild(item);
}

function emptyCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
}
