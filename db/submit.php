<?php
  try
{
//open the database
$db = new PDO('sqlite:Contact.db');


$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];



$db->exec("INSERT INTO contact_info (name, email, message) VALUES ('$name', '$email', '$message');");

header("Location: /portfolio/thankyou/");

$db = NULL;
}
catch(PDOException $e)
{
print 'Exception : ' .$e->getMessage();
}

?>



