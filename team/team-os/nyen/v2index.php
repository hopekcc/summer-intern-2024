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
<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $firstname = filter_input(INPUT_POST, "firstname", FILTER_SANITIZE_SPECIAL_CHARS);
        $lastname = filter_input(INPUT_POST, "lastname", FILTER_SANITIZE_SPECIAL_CHARS);
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);

        // $hash = password_hash($password, PASSWORD_DEFAULT);
        // mysqli_query(mysqli $mysql, string $query, int $result_mode = MYSQLI_STORE_RESULT): mysqli_result|bool
        // echo 'inside1';

        $sql = "SELECT * FROM Student where Username like '$username'";
        $result = mysqli_query($conn, $sql);
        $resultarray = mysqli_fetch_all($result);

        if (sizeof($resultarray) > 0) {
            echo "That username is taken. Try again.";
        }

        else {
            $sql = "INSERT INTO Student (FirstName, LastName, Username, Password)
                    VALUES ('$firstname', '$lastname', '$username', '$password')";
            mysqli_query($conn, $sql);
            echo"You are now registered!";
        }
        
    }

    mysqli_close($conn);
?>
</body>
</html>