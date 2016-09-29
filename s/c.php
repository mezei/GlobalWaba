<?php

ob_start();

$countryFile = file_get_contents("../countries.html");
$dummyText = '<form id="f"></form>';
$dummyText2 = '<div id="ss"></div>';
$dummyText3 = '<form id="tf"></form>';

$y = file_get_contents("servercountry.json");
$z = json_decode($y);

if (isset($_REQUEST['l'])) {
	$letter = strtolower(substr($_REQUEST['l'], 0, 1));
} else if (isset($_REQUEST['c']) && ctype_alpha(substr($_REQUEST['c'], 0, 1))) {
	$letter = strtolower(substr($_REQUEST['c'], 0, 1));
} else {
	$letter = 'a';
}

$outputarray=[];
foreach ($z as $oneCountry) {
	if (strtolower(substr($oneCountry, 0,1)) == $letter) {
		array_push($outputarray, $oneCountry);
	}
}

$formText = "";
$formText2 = "";
foreach (["n", "e", "m"] as $value) {
	if (isset($_REQUEST[$value])) {
		$formText.='<input type="hidden" name="'.$value.'" value="'.$_REQUEST[$value].'" />';
	}
}
$formText2 = $formText;
foreach (["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z" ] as $value) {
	$formText2 .= '<input type="submit" value="'.$value.'" name="l" />';
}


$idCounter = 0;
foreach ($outputarray as $value) {
	$formText .=  '<div><input type="radio" id="c'.$idCounter.'" name="c" value="'.$value.'"><label for="c'.$idCounter.'">'.$value.'</label></div>';
	$idCounter++;
}

$formText .= '<input type="submit" class="fr" name="s" value="Got It!" />';


$countryFile = str_replace("c3.css", '../c3.css', $countryFile);
$countryFile = str_replace("favicon.ico", '../favicon.ico', $countryFile);
$countryFile = str_replace($dummyText, '<form id="f" action="s.php">'.$formText.'</form>', $countryFile);
$countryFile = str_replace($dummyText2, '<div id="ss">'.strtoupper($letter).'</div>', $countryFile);
$countryFile = str_replace($dummyText3, '<form id="tf">'.$formText2.'</form>', $countryFile);

ob_end_flush();
echo $countryFile;

return;

ob_start();
$error = $_REQUEST["error"];
$errormsg = "";

if($error !== null) {
	$errorarray = explode(",", $error);

	include("errors.php");
	global $errors;
	foreach ($errorarray as $key => $value) {	
		if ($errors[$value] !== null) { 
			$errorString = $errors[$value]; 
		} else {
			$errorString = "Error";
		}
		if ($value !== null) {
			$errormsg .= "<h4>".$errorString."</h4>";
		}
	}
}

$indexFile = file_get_contents("index.html");
$dummyText = '<span id="err"></span>';
$indexFile = str_replace($dummyText, '<span id="err">'.$errormsg.'<span id="err">', $indexFile);
ob_end_clean();
echo $indexFile;
