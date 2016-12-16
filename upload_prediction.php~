<?php 
	ini_set('display_errors','On');
	error_reporting(E_ALL &~ E_DEPRECATED);
	header('Content-Type: text/html; charset=UTF-8');
	
	$lastTime = $_GET["time"];
	$value = $_GET["value"];
	if (!$lastTime)
	{
		echo "1";
		exit;
	}
	
	if (!is_numeric($lastTime))
	{
		echo "1";
		exit;
	}
	if (!$value)
	{
		echo "2";
		exit;
	}
	
	if (!is_numeric($value))
	{
		echo "2";
		exit;
	}
	$link = mysql_connect('localhost','adminSUjpCBH','DMWc-acIGwrP');
	mysql_select_db('currency');
	mysql_set_charset('utf8');

	$query =" INSERT INTO eurusdprediction (time, value) VALUES(".$lastTime",".$value")";
	$result = mysql_query($query);
	if ($result != 1)
	{
		echo $result." failed query: ".$query;
	}else
	{
		echo "OK";
	}
?>

