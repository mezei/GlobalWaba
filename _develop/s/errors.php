<?php

global $errors;

$errors = [];
$errors["country"] 			= "Please submit a valid country!";
$errors["noname"] 			= "Please submit a name!";
$errors["namelong"] 		= "Please submit a shorter name! (Max 32 chars)";
$errors["noemail"]			= "Please submit an e-mail address!";
$errors["email"]			= "Please submit a valid e-mail address!";
$errors["emaillong"]		= "Please submit a shorter e-mail address! (Max 64 chars)";
$errors["emailexists"]		= "This e-mail address is already in use!";
$errors["badwordsmessage"]	= "Please don't use nasty words in your message!";
$errors["badwordsname"]		= "Please don't use nasty words in your name!";



$errors["server"]			= "You managed to bug the server, congrats!";

/*
- Please submit a name! [ha üres az n]
- Please submit a shorter name! (Max 32 chars) [ha túl hosszú az n]
- Please submit an e-mail address! [ha üres az e]
- Please submit a shorter e-mail address! (Max 128 chars) [ha túl hosszú az e]
- Please submit a valid e-mail address! [ha invalid az e]
- Please submit a valid country! [ha invalid a c]
- Please submit a shorter message! (Max 128 chars) [ha túl hosszú az m]
*/