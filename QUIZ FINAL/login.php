<?php

$fullName = $_POST['fullname'];
$email = $_POST['email'];
$mobno=$_POST['mobno'];
$newpassword = $_POST['newpassword'];




// Create connection
$conn = new mysqli('localhost','root','','Users');

// Check connection
if ($conn->connect_error) {
    echo "Connected failed";
    die("Connection failed: " . $conn->connect_error);
}else{
    echo "Connected successfully";
    $stmt = $conn->prepare("insert into details(fullName,email,mobno,newpassword) values(?,?,?,?)");
    $stmt->bind_param("ssis",$fullName,$email,$mobno,$newpassword);
    $stmt->execute();
    echo "registration Successful....";
    $stmt->close();
    $conn->close();
}
// $conn->close();
?>
