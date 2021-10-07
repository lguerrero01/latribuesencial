<?php

use App\Bitrix\Lead;

$addLead = new Lead(
	// info stepper
	$_POST['email'],
	$_POST['name'],
	$_POST['country'],
	$_POST['resCountry'],
	$_POST['phone'],
	// info client
	$_POST['children'],
	$_POST['sport'],
	// kit
	$_POST['kit'],
	// form1Adviser
	$_POST['ocupation'],
	$_POST['maritalStatus'],
	// form2Adviser
	$_POST['bePart'],
	$_POST['desc'],
	// form3Adviser
	$_POST['card'],
	$_POST['workingStatus'],
	$_POST['help']
);

echo json_encode($addLead->Add());
