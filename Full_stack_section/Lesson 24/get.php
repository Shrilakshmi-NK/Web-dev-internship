<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<h2>Superglobals</h2>

<form method="get">
  <h2>GET Form</h2>
  <input type="text" name="input-1" placeholder="Username">
  <br>
  <input type="text" name="input-2" placeholder="email">
  <br>
  <button type="submit" name="button">Submit</button>
  <br>
</form>

<?php
if(isset($_GET["input-1"]) && isset($_GET["input-2"])){
  echo $_GET["input-1"]."<br>";
  echo $_GET["input-2"]."<br>";
} 


?>

</body>
  
</body>
</html>