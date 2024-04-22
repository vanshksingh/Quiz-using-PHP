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

if (isset($_GET['subject'])) {
    $subject = $_GET['subject'];
    echo "Subject: " . $subject;
    // Dynamically construct the SQL query based on the subject
    $sql = "SELECT * FROM " . $subject;
    
    // Execute the query
    $result = $conn->query($sql);

    if ($result) {
        if ($result->num_rows > 0) {
            // Array to store the quiz data
            $quizData = array();

            // Fetch each row and add it to the quiz data array
            while($row = $result->fetch_assoc()) {
                $question = array(
                    'question' => $row['question'],
                    'options' => array($row['option1'], $row['option2'], $row['option3'], $row['option4']),
                    'answer' => $row['correct_answer']
                );
                array_push($quizData, $question);
            }

            // Convert the quiz data array to JSON format
            echo json_encode($quizData);
        } else {
            echo "0 results";
        }
    } else {
        echo "Error executing query: " . $conn->error;
    }
} else {
    echo "Subject parameter not set.";
}

// Close connection
$conn->close();
?>
