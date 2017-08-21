<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employee";

$name = $_POST['name'];

$day = $_POST['day'];

$month = $_POST['month'];

$year = $_POST['year'];

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$sql = "INSERT INTO holidays (name, day, month, year)
VALUES ('$name', '$day', '$month', '$year')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>