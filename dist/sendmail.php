<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $text = $_POST['text'];

	$to = "aliev@expovision.io"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта Digital Agency!";

	
	$msg="
    Имя: $name 
    Email: $email
    Номер телефона: $phone
    Сообщение: $text
    "; 	
	mail($to, $subject, $msg, "From: $to ");

?>


