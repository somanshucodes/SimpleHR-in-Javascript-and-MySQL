<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employee";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$sql = "SELECT * FROM employee_details";
$result = mysqli_query($conn, $sql);
echo "<table class=\"table table-striped\">
    <thead>
      <tr>
        <th>Emp_ID</th>
        <th>Name</th>
        <th>Designation</th>
		<th>Salary</th>
      </tr>
    </thead>
    <tbody>";
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr><td>".$row['emp_id']."</td><td>".$row['emp_name']."</td><td>".$row['designation']."</td><td>".$row['salary']."</td></tr>";
    }
} else {
    echo "0 results";
}
echo "</tbody></table>";
mysqli_close($conn);
?>