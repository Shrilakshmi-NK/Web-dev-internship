<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<h2>Superglobals</h2>

<form method="post">
  <h2>GET Form</h2>
  <input type="text" name="input-3" placeholder="Username">
  <br>
  <input type="text" name="input-4" placeholder="email">
  <br>
  <button type="submit" name="button">Submit</button>
  <br>
</form>

<?php
if(isset($_POST["input-3"]) && isset($_POST["input-4"])){
  echo $_GET["input-3"]."<br>";
  echo $_GET["input-4"]."<br>";
} 


?>

</body>
  
</body>
</html>