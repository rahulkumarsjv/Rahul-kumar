<?php
// database connection setup
$servername = "localhost";
$username = "root"; // apna MySQL username dalen
$password = ""; // apna MySQL password dalen
$dbname = "database"; // apna database ka naam dalen

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Register user
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
<!DOCTYPE html>
<html>
<head>
    <title>User Registration</title>
</head>
<style>
/* CSS for login form and background image */

body {
    font-family: Arial, sans-serif;
    background-image: url('your_background_image.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: 20px;
    margin: 0;
}

.container {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
    border: 2px solid #ccc; /* Border color */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
}

form {
    margin-top: 20px;
}

input[type="text"],
input[type="password"] {
    width: calc(100% - 22px); /* Adjusted width considering padding and border */
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

input[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #45a049;
}
    </style>
<body>
    <h2>User Registration</h2>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        Email: <input type="text" name="email"><br>
        Password: <input type="password" name="password"><br>
        <input type="submit" value="Register">
    </form>
</body>
</html>
