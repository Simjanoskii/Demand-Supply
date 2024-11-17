
const draggableItems = document.querySelectorAll(".draggable");
const cartContainer = document.getElementById("cart");

draggableItems.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id);
    });
});

cartContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
});

cartContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const draggedItem = document.getElementById(id);
    cartContainer.appendChild(draggedItem.cloneNode(true));
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    }
});

function loadProducts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            const productContainer = document.getElementById("product-list");
            data.slice(0, 5).forEach((post) => {
                const product = document.createElement("div");
                product.classList.add("card");
                product.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                    </div>
                `;
                productContainer.appendChild(product);
            });
        });
}


document.addEventListener("DOMContentLoaded", () => {
    displayLocation();
    loadProducts();
});
