<?php
// Establish a database connection
$servername = "localhost";
$username = "root";
$password = "Root";
$dbname = "ali";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the registration form
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Insert data into the 'users' table
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
