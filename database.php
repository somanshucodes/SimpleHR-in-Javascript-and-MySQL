<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employee";

$name = $_POST['name'];

$designation = $_POST['designation'];

$salary = $_POST['salary'];

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$sql = "INSERT INTO employee_details (emp_name, designation, dept, salary)
VALUES ('$name', '$designation', 101, '$salary')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>