<?php

$to=$_REQUEST['elia0649@stud.kea.dk'];

$navn=$_REQUEST['navn'];
$email=$_REQUEST['email'];


$subject="Besked fra " . $navn . ": ". $email;

$header ="Content-type: text/html; charset=utf-8" . "\r\n";
$header.="from:mikkel@mixel.dk";

mail($to, $subject, $message, $header);
header("Location: tak .html");
?>
