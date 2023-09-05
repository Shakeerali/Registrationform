document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Perform client-side validation here
      if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
      }
  
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
       // Other validation checks (password strength, etc.)
      if (!isStrongPassword(password)) {
        alert("Password should be at least 8 characters long and include a mix of letters, numbers, and symbols.");
        return;
      }
  
      // If validation passes, send data to the backend
      sendDataToBackend(name, email, password);
    });
  });
  
  function sendDataToBackend(name, email, password) {
    // Use AJAX or Fetch to send data to the server (PHP script)
   
      const url = "http://127.0.0.1:5500/register.php";
      const data = {
        name: name,
        email: email,
        password: password
      };
    
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => response.text())
      .then(responseText => {
        alert(responseText); // Display response from server
      })
      .catch(error => {
        console.error("Error:", error);
      });
    
    
    // Server-side code will handle database interactions
  }
  