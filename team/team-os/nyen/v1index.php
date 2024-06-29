<?php
    include('database.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>HopeKCC Registration</title>
</head>
<body>
    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
        <h2>Sign-up</h2>
        First Name:<br>
        <input type="text" name="firstname" required><br>
        Last Name:<br>
        <input type="text" name="lastname" required><br>
        Username:<br>
        <input type="text" name="username" required><br>
        Password:<br>
        <input type="Password" name="password" required><br>
        <input type="submit" name="submit" value="Submit">
    </form>
    <!-- <form action="" method="post">
        <h2>Login</h2>
        Username:<br>
        <input type="text" name="username1" required><br>
        Password:<br>
        <input type="Password" name="password1" required><br>
        <input type="submit" name="submit" value="Submit">
    </form> -->
<?php
    // echo 'hi';
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        // echo 'inside';
        $firstname = filter_input(INPUT_POST, "firstname", FILTER_SANITIZE_SPECIAL_CHARS);
        $lastname = filter_input(INPUT_POST, "lastname", FILTER_SANITIZE_SPECIAL_CHARS);
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
        $sql = "INSERT INTO Student (FirstName, LastName, Username, Password)
                VALUES ('$firstname', '$lastname', '$username', '$password')";
        mysqli_query($conn, $sql);
        echo"You are now registered!";
    
    }

    mysqli_close($conn);
?>
</body>
</html>
