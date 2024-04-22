<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if all required fields are set
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        // Get form data
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Your database connection code goes here
        // Replace the placeholders with your actual database credentials
        $servername = "localhost";
        $db_username = "root";
        $db_password = "";
        $dbname = "quibble_users";

        // Create connection
        $conn = new mysqli($servername, $db_username, $db_password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Prepare SQL statement to fetch user data from the database
        $sql = "SELECT * FROM user_details WHERE username = ? AND password = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $username, $password);

        // Execute the prepared statement
        $stmt->execute();

        // Get the result
        $result = $stmt->get_result();

        // Check if a user with the given username and password exists
        if ($result->num_rows == 1) {
            // User authenticated successfully
            echo "Login successful!";
            header('location:home3.html');
        } else {
            // User authentication failed
            echo "Login failed";
        }

        // Close statement and connection
        $stmt->close();
        $conn->close();
    } else {
        // Required fields are missing
        echo "Username and password are required!";
    }
}
?>
