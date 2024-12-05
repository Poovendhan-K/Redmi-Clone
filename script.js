document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("confirmPasswordError").style.display = "none";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    let valid = true;

    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        document.getElementById("nameError").style.display = "block";
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    }

    if (password.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    }

    if (confirmPassword.trim() === "") {
        document.getElementById("confirmPasswordError").innerText = "Please confirm your password.";
        document.getElementById("confirmPasswordError").style.display = "block";
        valid = false;
    } else if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        document.getElementById("confirmPasswordError").style.display = "block";
        valid = false;
    }

    if (valid) {
        // Store the name in localStorage
        localStorage.setItem('userName', name);
        
        // Show a success message
        alert("Verified successfully!");

        // Redirect immediately after successful validation
        window.location.href = "welcome.html";

        // Redirect after a short delay (to allow user to see the alert)
        // setTimeout(function() {
        //     window.location.href = "welcome.html";
        // }, 2000);  // 2000ms = 2 seconds delay
    }
});
