<?php
  try
{
//open the database
$db = new PDO('sqlite:Contact.db');


$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];



//Insert record  

$db->exec("INSERT INTO contact_info (name, email, message) VALUES ('$name', '$email', '$message');");


print "<h1 style='text-align: center; margin-top: 25%;'> Thank you for reaching out, $name! </h1>";
print "<h3 style='text-align: center'> I'll get back to you eventually... </h3>";
print "<h3 style='text-align: center; text-decoration: none;'><a href='/'> <~ back </a></h3>";
//now output the data to a simple html table...
//  print "<table border=1>";
//  print "<tr><td>id</td><td>name</td><td>email</td><td>message</td>";
// 
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



