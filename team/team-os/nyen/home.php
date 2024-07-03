<?php
    include('login.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Home</title>
</head>
<body>
<?php
    echo 'Welcome, ' . $resultarray[0][0] . ' ' . $resultarray[0][1];
    mysqli_close($conn);
?>
</body>
</html>