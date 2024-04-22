<?php
// Database connection details
$servername = "localhost"; // Change this to your MySQL server hostname
$username = "root"; // Change this to your MySQL username
$password = ""; // Change this to your MySQL password
$database = "quibble_users"; // Change this to the name of your MySQL database

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the data sent from the client
$data = json_decode(file_get_contents('php://input'), true);

// Extract data
$username = $data['username'];
$topic = $data['topic'];
$score = $data['score'];
$dateAndTime = $data['dateAndTime'];

// Insert score into the database
$sql = "INSERT INTO scores (username, topic, score, date_and_time) VALUES ('$username', '$topic', $score, '$dateAndTime')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false, 'error' => $conn->error));
}

// Close connection
$conn->close();
?>
