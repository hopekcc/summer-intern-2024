<?php
    $db_server = "localhost";
    $db_user = "ext_yensydney_gmail_com";
    $db_pass = '20050704';
    $db_name = 'niniTest';
    $conn = "";

    try {
        $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);
    }
    catch(mysqli_sql_exception) {
        echo "Could not connect! <br>";
    }
    // if($conn) {
    //     echo "You are connected! <br>";
    // }

?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    Hello<br>
</body>
</html> -->