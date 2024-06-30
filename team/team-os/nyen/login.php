<?php
    include('database.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>HopeKCC Login</title>
</head>
<body>
    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
        <h2>Login</h2>
        Username:<br>
        <input type="text" name="username" required><br>
        Password:<br>
        <input type="Password" name="password" required><br>
        <input type="submit" name="submit" value="Submit">
    </form>
<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);

        // getting  name
        $sql = "SELECT FirstName, LastName, Password FROM Student where Username like '$username'";
        $result = mysqli_query($conn, $sql);
        $resultarray = mysqli_fetch_all($result);
        if (sizeof($resultarray) == 0) {
            echo 'This username is not registered. Try again.';
        }
        else {
            if ($resultarray[0][2] == $password) {
                echo 'Welcome, ' . $resultarray[0][0] . ' ' . $resultarray[0][1];
            }
            else {
                echo 'Incorrect password. Try again.';
            }

        }


        // verifying pass
        // $sql = "SELECT Password FROM Student where Username like '$username'";
        // $result = mysqli_query($conn, $sql);
        // $resultarray = mysqli_fetch_all($result);

        // foreach ($resultarray as $array) {
        //     foreach ($array as $item) {
        //         if ($item == $password) {
        //             echo 'Welcome, ' . $firstname . ' ' . $lastname;
        //         }
        //     }
        // }

        // if () {
        //     echo "That username is taken. Try again.";
        // }

        // else {
        //     $sql = "INSERT INTO Student (FirstName, LastName, Username, Password)
        //             VALUES ('$firstname', '$lastname', '$username', '$password')";
        //     mysqli_query($conn, $sql);
        //     echo"You are now registered!";
        // }
        
    }

    mysqli_close($conn);
?>
</body>
</html>