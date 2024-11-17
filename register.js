document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    
    
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert(`Welcome, ${name}! Registration successful.`);

   
    window.location.href = "index.html";  
});
