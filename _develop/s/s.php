<?php
ob_start();
include("db.php");
$save = [];
/*
http://localhost/globalwaba/s.php?a=x&n=x&e=e@c.com&m=hai&c=Hungary
*/
$isAjax = false;
$error = [];
try {
	$isAjax = isset($_REQUEST['a']);
	$save['n'] = 		trim($_REQUEST['n']);
	$save['e'] = filter_var(	trim($_REQUEST['e']),		FILTER_SANITIZE_EMAIL);
	if (isset($_REQUEST['c'])) {
		$save['c'] = substr(		trim($_REQUEST['c']), 	0, 50);
	} else {
		$save['c'] = "";
	}
	$save['m'] = substr(		trim($_REQUEST['m']),		0, 64);

	if (strlen($save['n'])<1) {
		array_push($error, "noname");
	} else if (strlen($save['n']) > 32) {
		array_push($error, "namelong");
	}
	if (strlen($save['e'])<1) {
		array_push($error, "noemail");
	} else if (filter_var($save['e'], FILTER_VALIDATE_EMAIL)  === false) {
		array_push($error, "email");
	} else if (strlen($save['e']) > 64) {
		array_push($error, "emaillong");
	}

	$y = file_get_contents("servercountry.json");
	$z = json_decode($y);
	$zz = [];


	

	if (count($error) == 0) {
		$anyError = checkValue($save);
	} else {
		$anyError = "";
	}
	if ($anyError != "") {
		array_push($error, $anyError);
	}
	if (count($error) == 0) {
		foreach ($z as $key => $value) {
			$zz[$key] = strtolower($value);
		}
		$key = array_search( strtolower($save['c']), $zz);
		if (!$key && $save['c'] != "") {
			array_push($error, "country");
			$location0 = "c.php?".http_build_query($_REQUEST);
			echo $location0;
			header("location:".$location0);
			return;
		} else {
			if ($key != false) {
				$save['c'] = $z[$key];
			}
		}
	}

	if (count($error) == 0) {
		$anyError = writeValue($save); 
		if ($anyError != "") {
			array_push($error, $anyError);
		}
	}

} catch (Exception $e) {
	array_push($error, "server");
	errorLog($e);
}

if ($isAjax) {
	if (count($error) != 0) {
		http_response_code(400); 
		$errorStr = implode(",", $error);
		ob_end_clean();
		echo $errorStr;	
		return;
	} else {
		ob_end_clean();
		return;
	}
 	
} else {
	if (count($error) != 0) {
		http_response_code(400);
		$errorStr = implode(",", $error);
		ob_end_clean();
		header("location:../i.php?error=".$errorStr."&".http_build_query($_REQUEST)."#f"); 
		errorLog($errorStr);
		return;
	} else {
		$x = ["n" => $_REQUEST["n"]];
		ob_end_clean();
		header("location:../r.php?".http_build_query($x)); 
		return;
	}
}