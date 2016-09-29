<?php 
//global $error;
ob_start();
$error = $_REQUEST["error"];
$errormsg = "";

if($error !== null) {
	$errorarray = explode(",", $error);

	include("s/errors.php");
	global $errors;
	//print_r($errors);
	foreach ($errorarray as $key => $value) {			
		//echo $value;
		if ($errors[$value] !== null) { 
			$errorString = $errors[$value]; 
		} else {
			$errorString = "Error";
			//$errorString = $errors[$value]; 
		}
		if ($value !== null) {
			$errormsg .= "<h4>".$errorString."</h4>";
		}
	}
	//echo $errormsg;
}

$indexFile = file_get_contents("index.html");
$dummyText = '<span id="err"></span>';
$indexFile = str_replace($dummyText, '<span id="err">'.$errormsg.'<span id="err">', $indexFile);
foreach (["n","c","e"] as $value) {
	if (isset($_REQUEST[$value])) {
		$indexFile = str_replace('name="'.$value.'"','name="'.$value.'" value="'.htmlEntities($_REQUEST[$value], ENT_COMPAT).'" ', $indexFile);
	}
}
if (isset($_REQUEST['m'])) {
	$indexFile = str_replace("</textarea>", htmlspecialchars($_REQUEST['m'])."</textarea>", $indexFile);
}

ob_end_clean();
echo $indexFile;