<?php
require_once(__DIR__ . '/lead.php');

$addLead = new Lead(
	$_POST['email'],
	$_POST['name'],
	$_POST['country'],
	$_POST['resCountry'],
	$_POST['phone'],
	$_POST['children'],
	$_POST['sport']

);

echo json_encode($addLead->Add());
