document.getElementById("loginBtn").addEventListener("click", function() {
    // Get username and password input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are valid (You may need to add validation logic here)

    // Redirect to index.html upon successful login
    window.location.href = "home3.html";
});
document.getElementById("signup").addEventListener("click", function() {
    // Get username and password input values
    var username = document.getElementById("new_username").value;
    var password = document.getElementById("new_password").value;
    var email = document.getElementById("new_email").value;

    // Check if username and password are valid (You may need to add validation logic here)

    // Redirect to index.html upon successful login
    window.location.href = "home3.html";
});