<?php

/* results.html load, and change inside */
//ob_start();
$position = "s/";

include("s/db.php");
//$error = $_REQUEST["error"];


function countryValue($value) {
	return $value;
	return log($value);
}



$messagesHTML0 = "";

$indexFile = file_get_contents("results.html");
$dummyText0 = '<div id="mw"></div>';


$messagesHTML0 = '<div id="mw">';

$values = readRandomXValues();

foreach ($values as $key => $value) {
	if (strlen($value['c']) == 0) {
		$value['c'] = "-";
	}
	$messagesHTML0.= '<div>'.
	'<h3>'.$value['n'].'</h3>'.
	'<h4>'.$value['c'].'</h4>'.
	'<h5>„'.$value['m'].'”</h5></div>';
}

$messagesHTML0 .= '</div>';

$dummyText = '<div id="cd"></div>';
$dummyText2 = '<ol id="ci"></ol>';
$messagesHTML = '<div id="cd">';
$messagesHTML2 = '';
if (isset($_REQUEST['n']) && !empty($_REQUEST['n'])) {
	$dummyText3 = '<h1 id="rr">We Are Making A Change</h1>';
	$messagesHTML3 = '<h1 id="rr">Thank You, '.$_REQUEST['n'].'</h1>';
	$indexFile = str_replace($dummyText3, $messagesHTML3, $indexFile);
} 


$top10 = getTop10Countries();
$firstCountryScore = countryValue($top10[0]['count']);
$maxCountry = min(10,count($top10))-1;

for ($i=$maxCountry; $i >= 0; $i--) { 
	if ($top10[$i]['count'] == 0) {
		continue;
	}
	$messagesHTML .= '<div style="height:'.
			ceil( (countryValue($top10[$i]['count']) / $firstCountryScore) * 100).'%"><h2>'.
			$top10[$i]['count'].'</h2><h3>'.
			($i+1).'.</h3></div>';
	 $messagesHTML2 = '<li>'.$top10[$i]['disp'].'</li>' . $messagesHTML2;
}

$messagesHTML .='</div>';
$messagesHTML2 = '<ol id="ci">'.$messagesHTML2.'</ol>';

if (isset($_REQUEST['a'])) {
	$all = [$messagesHTML0, $messagesHTML, $messagesHTML2];
	$allJson = json_encode($all);
	echo $allJson;
} else {


$indexFile = str_replace($dummyText0, $messagesHTML0, $indexFile);
$indexFile = str_replace($dummyText, $messagesHTML, $indexFile);
$indexFile = str_replace($dummyText2, $messagesHTML2, $indexFile);

//ob_end_clean();
echo $indexFile;
}













