
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = this.getAttribute('data-price');
        
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        
        cart.push({ name: productName, price: productPrice });

        localStorage.setItem('cart', JSON.stringify(cart));
        
        alert(`${productName} added to cart`);
    });
});
