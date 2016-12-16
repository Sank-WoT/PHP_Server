<?php 
	ini_set('display_errors','On');
	error_reporting(E_ALL &~ E_DEPRECATED);

	header('Content-Type: text/html; charset=UTF-8');
	$myCurl = curl_init();
	curl_setopt_array($myCurl, array(
			CURLOPT_URL => 'https://quotes.instaforex.com/api/quotesTick?q=eurusd,usdjpy&m=json',
			CURLOPT_TIMEOUT_MS => 3100,
			CURLOPT_RETURNTRANSFER => true
			));
	$response = curl_exec($myCurl);
        curl_close($myCurl);
	
	if (strlen($response)<5)
	{	
		echo "banned ip";
		exit;
	}

	$json = json_decode ($response, true);

	$link = mysql_connect('localhost','adminSUjpCBH','DMWc-acIGwrP');
	mysql_select_db('currency');
	mysql_set_charset('utf8');

	$query =" INSERT INTO eurusd (time, bid, ask) VALUES(".$json["EURUSD"]["lasttime"].",".$json["EURUSD"]["bid"].",".$json["EURUSD"]["ask"].")";
	$result = mysql_query($query);
	if ($result != 1)
	{
		echo $result." failed query: ".$query;
	}
	$query =" INSERT INTO usdjpy (time, bid, ask) VALUES(".$json["USDJPY"]["lasttime"].",".$json["USDJPY"]["bid"].",".$json["USDJPY"]["ask"].")";
	$result = mysql_query($query);
	if ($result != 1)
	{
		echo $result." failed query: ".$query;
	}

?>

