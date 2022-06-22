<?php
  try
{
//open the database
$db = new PDO('sqlite:Contact.db');


$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];



$db->exec("INSERT INTO contact_info (name, email, message) VALUES ('$name', '$email', '$message');");

header("Location: /thankyou/");

// now output the data to a simple html table...
//  print "<table border=1>";
//  print "<tr><td>id</td><td>name</td><td>email</td><td>message</td>";

//  $result = $db->query('SELECT * FROM contact_info');
// foreach($result as $row)
// {
//   print "<tr><td>".$row['id']."</td>";
//   print "<td>".$row['name']."</td>";
//   print "<td>".$row['email']."</td>";
//   print "<td>".$row['message']."</td>";
// }
// print "</table>";
$db = NULL;
}
catch(PDOException $e)
{
print 'Exception : ' .$e->getMessage();
}

?>



