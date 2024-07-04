<?php
    include('database.php');
    
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
                header("Location: http://test1.hopekcc.org/classroom/ext_yensydney_gmail_com/summer-intern-2024/team/team-os/nyen/home.php");
                exit;
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