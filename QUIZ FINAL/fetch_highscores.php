<?php
// Database connection details
$servername = "localhost"; // Change this to your MySQL server hostname
$username = "your_username"; // Change this to your MySQL username
$password = "your_password"; // Change this to your MySQL password
$database = "your_database"; // Change this to the name of your MySQL database
$subject = $_GET['subject']; // Assuming the subject is passed as a query parameter

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to select high scores of a particular subject from the database
$sql = "SELECT * FROM high_scores WHERE subject = '$subject' ORDER BY score DESC LIMIT 10"; // Assuming the table name is 'high_scores'

$result = $conn->query($sql);

// Check if there are any rows returned
if ($result->num_rows > 0) {
    // Array to store the high scores
    $highScores = array();

    // Fetch each row and add it to the high scores array
    while($row = $result->fetch_assoc()) {
        $highScore = array(
            'username' => $row['username'],
            'score' => $row['score'],
            'date' => $row['date'] // Assuming 'date' is a field in your table storing the date and time of the quiz
        );
        array_push($highScores, $highScore);
    }

    // Convert the high scores array to JSON format and output it
    echo json_encode($highScores);
} else {
    // No high scores found
    echo json_encode(array());
}

// Close connection
$conn->close();
?>
