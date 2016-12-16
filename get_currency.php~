<?php 
	//ini_set('display_errors','off');
	//error_reporting(E_ALL &~ E_DEPRECATED);

	header('Content-Type: text/html; charset=UTF-8');
	header('Access-Control-Allow-Origin: *');
	$lastTime = $_GET["time"];
	$limit = $_GET["limit"];
	$sign = $_GET["sign"];
	if (!$lastTime)
	{
		$lastTime = 0;
	}
	
	if (!is_numeric($lastTime))
	{
		echo "1";
		exit;
	}
	if (!$limit)
	{
		$limit = 100;
	}
	
	if (!is_numeric($limit))
	{
		echo "3";
		exit;
	}

	if (!$sign)
	{
		$sign = 'eurusd';
	}
	
	if ($sign != 'eurusd')
	{
		if($sign != 'usdjpy')
		{
			echo "4";
			exit;
		}
	}

	
	$link = mysql_connect('localhost','adminSUjpCBH','DMWc-acIGwrP');
	mysql_select_db('currency');
	mysql_set_charset('utf8');

	$query ="SELECT * FROM  `".$sign."` WHERE TIME >".$lastTime." ORDER BY  `time` ASC LIMIT ".$limit;
	$result = mysql_query($query);
	

	if (mysql_num_rows($result) == 0) {
	    echo "2";
	    exit;
	}
	$row = mysql_fetch_assoc($result);
	echo $row["time"].",";
	echo $row["bid"].",";
	echo $row["ask"];
	
	while ($row = mysql_fetch_assoc($result)) {
		echo ";".$row["time"].",";
		echo $row["bid"].",";
		echo $row["ask"];
	}
?>

