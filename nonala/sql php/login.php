<?php
session_start();

// database connection setup
$servername = "localhost";
$username = "root"; // apna MySQL username dalen
$password = ""; // apna MySQL password dalen
$dbname = "database"; // apna database ka naam dalen

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            echo "Login successful";
            $_SESSION['email'] = $email;
            header("Location: dashboard.html");
            exit();
        } else {
            echo "Invalid email or password";
        }
    } else {
        echo "User not found";
    }
}

$conn->close();
?>
<!DOCTYPE html>
<html>
    <head>
    <title>User Login</title>
    <style>
   /* CSS for login form and background image */

body {
    font-family: Arial, sans-serif;
    background-image: url("imgjob/bgphoto.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: 20px;
    margin: 0;
}

.container {
    margin: 140px auto;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white background */
    border: 2px solid #ccc; /* Border color */
    border-radius: 10px;
    border: solid black 1px;
    width: 300px;
    height: 300px;
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
.silog a{
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    margin-left: 2%;
  }

  </style>
</head>
<body>
    <div class="container">
    <h2>User Login</h2>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        Email: <input type="text" name="email"><br>
        Password: <input type="password" name="password"><br>
        <input type="submit" value="Login">
        <div class="silog">
        new registration <a href="signup.php">Signup.php</a>
        And Login <a href="login.php">Login</a>
        </div>
    </form>
    </div>
</body>
</html>
