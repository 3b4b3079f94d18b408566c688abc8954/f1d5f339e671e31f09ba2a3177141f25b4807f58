<?php
$host = "43.229.91.134";
$port = "10902";
$dbname = "web";
$user = "admin";
$password = "@2000ChaLakudY1998";

$dbconn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$dbconn) {
    die("Error connecting to the database");
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $query = "INSERT INTO contact_form_data (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";
    $result = pg_query($dbconn, $query);

    if ($result) {
        sendEmail($name, $email, $message);
        echo "Success";
    } else {
        echo "Error";
    }
}

function sendEmail($name, $email, $message) {
    // Code to send email using the mail() function or a library
}

pg_close($dbconn);
?>
