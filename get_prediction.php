<?php 
	//ini_set('display_errors','On');
	//error_reporting(E_ALL &~ E_DEPRECATED);
	header('Content-Type: text/html; charset=UTF-8');
	
	$link = mysql_connect('localhost','adminnIGbRek','vCis7U1C6z1n','myfirstphpapp');
	mysql_select_db('currency');
	mysql_set_charset('utf8');

	$query ="SELECT `value` FROM `eurusdprediction` ORDER BY `time` DESС";
	$result = mysql_query($query);
	echo mysql_result($result, 0);
?>

