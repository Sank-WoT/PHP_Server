<?php 
	header('Content-Type: text/html; charset=UTF-8');
	header('Access-Control-Allow-Origin: *');
	$lastTime = $_GET["time"];
    $firstTime = $_GET["ftime"];
	$limit = $_GET["limit"];
	$sign = $_GET["sign"];
    $bool = true;

	if (!$lastTime)
	{
		$lastTime = 0;
	}
	
	if (!is_numeric($lastTime))
	{
		echo "1";
		exit;
	}

 if (!is_numeric($firstTime))
	{
		$query = "SELECT * FROM `".$sign."` WHERE TIME > ".$lastTime." ORDER BY `time` ASC LIMIT ".$limit;
        $bool = false;
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
		$sign = 'eurusd'; // если sign не определено то поумолчанию eurusd
	}
	
	if ($sign != 'eurusd' && $sign != 'usdjpy')
	{
			echo "4";
			exit;
	}

	
	$link = mysql_connect('localhost','adminnIGbRek','vCis7U1C6z1n','myfirstphpapp');
	mysql_select_db('currency');
	mysql_set_charset('utf8');

	 // $query ="SELECT * FROM `eurusd` WHERE TIME >= 1454702997 AND TIME <= 1454703992 ORDER BY `time` ASC LIMIT 100";
if($bool == true)
{
   $query = "SELECT * FROM `".$sign."` WHERE TIME >= ".$firstTime." AND TIME <= ".$lastTime." ORDER BY `time` ASC LIMIT ".$limit;   
}
	$result = mysql_query($query);	
    echo mysql_error();

	if (mysql_num_rows($result) == 0) 
    {
	    echo "2";
	    exit;
	}
	$row = mysql_fetch_assoc($result);
	echo $row["time"].",";
	echo $row["bid"].",";
	echo $row["ask"];
	
	while ($row = mysql_fetch_assoc($result)) 
    {
		echo ";".$row["time"].",";
		echo $row["bid"].",";
		echo $row["ask"];
	}
?>

