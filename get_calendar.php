<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php
include_once "connectionBd.php";
include_once "request.php";
include_once "EventCalendar.php";
// Наименование котировки
$Quote = $_GET["quote"];
// Время т юникстайм
$Time = $_GET["time"];
// Лимит значений
$Limit = $_GET["limit"];
requestSelect($Quote, $Time, $Limit);
?>