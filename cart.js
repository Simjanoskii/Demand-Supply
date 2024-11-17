
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSection = document.getElementById('cart-section');

    if (cart.length === 0) {
        cartSection.innerHTML = "<p>Your cart is empty.</p>";
    } else {
       
        cart.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');
            productDiv.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            cartSection.appendChild(productDiv);
        });
    }
});


document.getElementById('checkout-btn').addEventListener('click', function() {
    
    localStorage.removeItem('cart');

    
    window.location.href = 'index.html?checkout=success';
});
