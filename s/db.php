<?php

$dbFileName = "db.data";
$countriesDbFileName = "countriesdb.data";
$badWordsFile = "badwords.json";

if (isset($position)) {
	$dbFileName = 			$position.$dbFileName;
	$countriesDbFileName = 	$position.$countriesDbFileName;
	$badWordsFile = 		$position.$badWordsFile;
}


$exist = file_exists ($dbFileName);
if (!$exist) {
	$myfile = fopen($dbFileName, "w");
	fclose($myfile);
}

function in_email($elem, $array)
{
    $top = count($array) - 1;
    $bottom = 0;
    try {
	    while($bottom <= $top) {

	    	if (strcmp($array[$bottom]['e'], $elem)==0) {
	    		return true;
	    	}
	        $bottom++;
	    }    
    } catch (Exception $e) {
    	errorLog("error" . $e);
    }   
    return false;
}


function checkValue($newValue) {
	global $dbFileName;
	global $countriesDbFileName;
	global $badWordsFile;
	$filteredWordsRaw = file_get_contents($badWordsFile);
	$filteredWords = json_decode($filteredWordsRaw);
	foreach ($filteredWords as $badWord) {
	    if (stripos($newValue['m'], $badWord) !== FALSE) { 
	        return "badwordsmessage"; 
	    } else if (stripos($newValue['n'], $badWord) !== FALSE) { 
	    	return "badwordsname"; 
	    }
	}
	$people = readValues();
	if (in_email($newValue['e'], $people)) {
		return "emailexists";
	}
	return "";
}

function writeValue($newValue) {
	global $dbFileName;
	global $countriesDbFileName;
	global $badWordsFile;

	$error = checkValue($newValue);
	if ($error != "") {
		return $error;
	}
	foreach (['n','e','m'] as $value) {
		$newValue[$value] = trim(preg_replace('/\s+/', ' ', $newValue[$value])); 
	}
	$newValue2 = serialize($newValue);
	$exit = 100;

	/* If people database larger than 1000, delete the first 500 */
	if (count($people)>1000) {
		for ($i=0; $i < 500; $i++) { 
			unset($people[$i]);
		}
		$people = array_values($people);
		$serialized = "";
		for ($i=0;$i<count($people);$i++) {
			$serialized .= serialize($people[$i])."\n";
		}
		file_put_contents($dbFileName, $serialized);
	}
	/* write the new person in the poeple database */
	while ($exit != 0) {
		$file = fopen($dbFileName,"a");
		// exclusive lock
		if (flock($file,LOCK_EX)) {
			try {
				fwrite($file,$newValue2."\n");
			} finally {
			// release lock
				flock($file,LOCK_UN);
				$exit = 0;
			}
		} else {
		  	usleep(100000); //100ms
		  	$exit--;
		}
		fclose($file);
	}	
	/* if the country database does not exist(, or contains suspiciously low amount of bytes), rewrite it */
	if (filesize($countriesDbFileName)<1000) {
		fillCountriesDb();
	}

	/* increment the participant count of the selected country */
	$exit = 100;
	while ($exit != 0) {
		$file2 = fopen($countriesDbFileName, "r+");

		if (flock($file2, LOCK_EX)) {
		  	try {
			    $countriesJson = fread($file2, filesize($countriesDbFileName));    //Get Current Hit Count
			    $countries = json_decode($countriesJson, true);
			    if (isset($countries[$newValue['c']])) {
			    	$countries[$newValue['c']]['count']++;
			    } else {
			    	
			    }
			    ftruncate($file2, 0);    //Truncate the file to 0
			    rewind($file2);           //Set write pointer to beginning of file
			    $countriesJson = json_encode($countries);
			    //$countriesJson = fwrite($file2, $countries);
			    fwrite($file2, $countriesJson);    //Write the new Hit Count
			    
			} finally {
				flock($file2, LOCK_UN);    //Unlock File
				$exit = 0;
			}
		} else {
		    usleep(100000); //100ms
		  	$exit--;
		}
		//Close Stream
		fclose($file2);

	}	
	/* something bad happened while trying to write */
	if ($exit == 0) {
		errorLog("country exit = 0!");
	}
	return "";
}

function readValues() {
	global $dbFileName;
	$retValue = "";
	$file = fopen($dbFileName,"r");
	$exit = 100;
	while ($exit != 0) {
		if (flock($file,LOCK_SH)) {
			$retValue = fread($file,filesize($dbFileName));
			$retArrayRaw = explode ( "\n", $retValue  );
			$retArray = [];
			foreach ($retArrayRaw as $key => $value) {
				if (strlen($value)>2) //if not empty-ish line
					$retArray[$key] = unserialize($value);
			}
			flock($file,LOCK_UN);
			$exit = 0;
		} else {
			usleep(100000); //100ms
			$exit--;
		}
	}

	fclose($file);


	return $retArray;
}

function readCountriesValues() {
	global $countriesDbFileName;
	$countriesJson = file_get_contents($countriesDbFileName);
	$countries = json_decode($countriesJson, true);
	$countriesRet = [];
	foreach ($countries as $key => $value) {
		if ($value["count"]>0) {
			array_push($countriesRet, [0 => $value['disp'], 1 => $value['count']]);
		}
	}
	return $countriesRet;
}

function countrySort($c, $d) {
	$a = $c['count'];
	$b = $d['count'];
	if ($a == $b) {
        return 0;
    }
    return ($a < $b) ? 1 : -1;
}

function getTop10Countries() {
	global $countriesDbFileName;
	$countriesJson = file_get_contents($countriesDbFileName);
	$countries = json_decode($countriesJson, true);
	usort($countries, "countrySort");
	
	$countries = array_splice($countries, 0, 10);
	//TEST
	/*for ($i=0; $i < count($countries); $i++) { 
		$countries[$i]['disp'] = "South Georgia and the South Sandwich Islands";
		$countries[$i]['count'] = 1000*(10-$i)+1;
	}*/
	return $countries;
}


function readRandomXValues() {
	$arr = readValues();
	$arrCount = count($arr)-1;
	$numberOfUsers = 10;
	if ($arrCount<$numberOfUsers)
		return $arr;

	$lastCount = 2;
	$fix = [];
	for ($i=0; $i < $lastCount; $i++) { 
		$last = array_pop($arr);
		if (strlen($last['m']) == 0 || empty($last['m'])) {
			$i--;
		} else {
			$fix[$i] = $last;
		}
	}

	$values = [];
	shuffle($arr);
	$num2 = $numberOfUsers;
	for ($i=$lastCount; $i < $num2 && $i<count($arr); $i++) { 
		$last = $arr[$i];
		if (strlen($last['m']) == 0 || empty($last['m'])) {
			unset($arr[$i]);
			$num2++;
		}
	}
	$arr = array_values($arr);

	$arr = array_splice($arr, 0, min($numberOfUsers, count($arr)));
	for ($i=0; $i < $lastCount; $i++) { 
		$arr[$i] = $fix[$i];

	}
	
	return $arr;

}

function errorLog($string) {
	return;
	try {
		$date = new DateTime();
		$string = $date->format('Y-m-d H:i:s')." --- ".$string."\n";
		file_put_contents("log.txt", $string, FILE_APPEND);
	} catch (Exception $e) {

	}
}

function giveDefaultValuesToDb() {
	$i = 0;
	$var[$i++] = "Sanyi;Hungary;Rühellem ezt az egész projektet, bárcsak mindenki meghalna";
	$var[$i++] = "John;Germany;Hi i can welcome any immigrants very much";
	$var[$i++] = "Sandra;United Kingdom;It's getting warm up here chavs.";
	$var[$i++] = "joe bates;United States;hi can i buy hummer on this site?";
	$var[$i++] = "emil ramirez;Mexico;i like warm. is there free money? no?";
	$var[$i++] = "Bill Gates;United States;This site is best viewed on Microsoft Edge!";
	$var[$i++] = "Dorci;Hungary;Én is neveztem egy kávéskanállal!!! remélem az nyer!!!";
	$var[$i++] = "John;Germany;Hi i can welcome any immigrants very much";
	$var[$i++] = "Sandra;United Kingdom;It's getting warm up here chavs.";
	$var[$i++] = "joe bates;United States;hi can i buy hummer on this site?";
	$var[$i++] = "emil ramirez;Mexico;i like warm. is there free money? no?";
	$var[$i++] = "Bill Gates;United States;This site is best viewed on Microsoft Edge!";
	$var[$i++] = "John;Germany;Hi i can welcome any immigrants very much";
	$var[$i++] = "Sandra;United Kingdom;It's getting warm up here chavs.";
	$var[$i++] = "joe bates;United States;hi can i buy hummer on this site?";
	$var[$i++] = "emil ramirez;Mexico;i like warm. is there free money? no?";
	$var[$i++] = "Bill Gates;United States;This site is best viewed on Microsoft Edge!";

	for ($j=0; $j<$i; $j++) {
		$var2 = explode(";", $var[$j]);
		$var3 = [	'n' => $var2[0],
					'e' => "test@email.com",
					'c' => $var2[1],
					'm' => $var2[2]];
		writeValue($var3);
	}
}


function fillCountriesDb() {
	errorLog("fillCountriesDb");
	global $countriesDbFileName;
	$countiresRaw = file_get_contents("countriesdboriginal.data");
	$countries = json_decode($countiresRaw, true);
	$countries2 = [];
	$countries3 = [];
	$countries4Txt  = "\n";
	$first = true;
	foreach ($countries as $key => $value) {
		$countries2[$key] = ["disp" => $value['disp'], "count" => 0];
		array_push($countries3, $key);
		if ($first) {
			$first = false;
		} else {
			$countries4Txt.="\n";
		}
		$countries4Txt.=$key;
	}
	$countries2Json = json_encode($countries2);
	$countries3Json = json_encode($countries3);
	


	file_put_contents("countries.txt", $countries4Txt);
	file_put_contents($countriesDbFileName, $countries2Json);
	file_put_contents("countries.json", $countries3Json);

}

