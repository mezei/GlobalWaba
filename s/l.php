<?php

include("db.php");

if (isset($_REQUEST["messages"])) {
	$first = true;
	$load = readRandomXValues();
	class ArrayValue implements JsonSerializable {
	    public function __construct(array $array) {
	        $this->array = $array;
	    }

	    public function jsonSerialize() {
	        return $this->array;
	    }
	}
	
	foreach ($load as $key => $value) {
		$retArr = [0 => $value['n'], 1 => $value['c'], 2 => $value['m']];
		$retArr[0] = str_replace(";", ",", $retArr[0]);
		$retArr[1] = str_replace(";", ",", $retArr[1]);
		$retArr[2] = str_replace(";", ",", $retArr[2]);
		if (strlen($value['c']) == 0) {
			$value['c'] = "-";
		}

		$retValue = implode(';', $retArr);
		if ($first) {
			$first = false;
		} else {
			echo ";";
		}
		echo $retValue;
	}
}
if (isset($_REQUEST["statistics"])) {

	$first = true;
	$countries = readCountriesValues();
	foreach ($countries as $key => $value) {
		if ($first) {
			$first = false;
		} else {
			echo ";";
		}
		echo implode(";", $value);
	}
}