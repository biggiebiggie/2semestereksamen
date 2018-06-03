<?php

$to="elia0649@stud.kea.dk";

$navn=$_REQUEST['navn'];
$email=$_REQUEST['email'];


$subject="Besked fra " . $navn . ": ". $email;
$message="Mit navn er: " . $navn . " og min mail er " . $email;

$header ="Content-type: text/html; charset=utf-8" . "\r\n";
$header.="from:mikkel@mixel.dk";

mail($to, $subject, $message, $header);
header("Location: tak.html");
?>
