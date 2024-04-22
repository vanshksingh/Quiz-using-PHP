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

// Retrieve data from POST request
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

// SQL query to insert data into database
$sql = "INSERT INTO user_details (Username, password, email)
VALUES ('$username', '$password', '$email')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
header('location:home3.html');
$conn->close();
?>
