<?php
require_once(__DIR__ . '/lead.php');

$addLead = new Lead(
	$_POST['name'],
	$_POST['lastName'],
	$_POST['documentType'],
	$_POST['documentId'],
	$_POST['phone'],
	$_POST['email'],
	$_POST['carBrand'],
	$_POST['carModel'],
	$_POST['carYear']
);

echo json_encode($addLead->Add());
