<?php
// Establish connection to MySQL
$servername = "localhost";
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "quibble_users"; // Your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from GET request
$username = $_GET['username'];
$password = $_GET['password'];

// SQL query to check if user exists in database
$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // User exists, return success message or redirect to homepage
  echo "Login successful";
} else {
  // User doesn't exist or credentials are incorrect
  echo "Login failed";
}

$conn->close();
?>
