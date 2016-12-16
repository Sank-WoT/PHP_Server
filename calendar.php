<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php
include_once "connectionBd.php";
include_once "request.php";
include_once "EventCalendar.php";
ignore_user_abort(true);
// Подключение библиотеки
require ('lib/phpQuery/phpQuery/phpQuery.php');

function GetData($adres){
    $content = file_get_contents($adres);
    $json  = json_decode($content , true);
    //echo "<br>";
    //print_r($json);
    //echo "<br>";
    return $json;
}

function createEven($i, $json)
{
    // Страна
    $country = $json["data"][$i]["currency"];
    // Наименование события
    $name = $json["data"][$i]["name"];
    // время в формате Data
    $Y = $json["data"][$i]["date_time"]["y"];
    $M = $json["data"][$i]["date_time"]["m"];
    $D = $json["data"][$i]["date_time"]["d"];
    $H = $json["data"][$i]["date_time"]["h"];
    $MIN = $json["data"][$i]["date_time"]["min"];
    // Фактическое значение события
    $fact = $json["data"][$i]["actual"];
    // Ожидаемое значение события
    $expec = $json["data"][$i]["consensus"];
    // Измеряемое значение
    $unit = $json["data"][$i]["unit"];
    $pot = $json["data"][$i]["pot_consensus"];
    // Формирование даты
    $timeD = $Y."-" .$M."-".$D."-".$H."-".$MIN;
    // Событие
    $even = new EventCalendar($timeD, $country, $name, $expec, $fact, $unit, $pot);
    // Массив событий
    $array[] = $even;
    // время в UNIXTime
    $time =  strtotime($timeD);
    // Узнаем страну
    $even->Id_country = requestSelectCountryId_cuyntry($even);

    // функция проверки существования
    $bool = checkInsertEventGroup($even);
    if ($bool == false) {
        requestInsertEventGroup($even);
    }

    // Присвоение EVENT GROUP
    $even->Id_eventGroup = requestSelectEventGroupId($even);

    // Присвоение UnixTime времени
    $even->Time = $time;
    // запрос на добавление события
    return  $even;
}


/**
 * @param $json
 * @return array массив объектов календарь
 */
function Insert($json){
    for($i = 0; $i < count($json["data"]); $i++) {
        $even = createEven($i, $json);
        requestInsertEvent($even);
        echo "<br>";
        // Массив событий
        $array[] = $even;
        }
    return $array;
}
    // текущая дата
    $today = date('Y-m-j');
    // Получаем данные
    $jsonData = GetData('https://api-economcalendar.fxclub.org/v1/events?countries=AUS%2CCAN%2CCHN%2CEMU%2CFRA%2CDEU%2CITA%2CJPN%2CNZL%2CPRT%2CESP%2CCHE%2CGBR%2CUSA&volatility=0%2C1%2C2%2C3&timezone=Europe%2FKiev&date_start='.$today.'&date_end='.$today.'&locale=ru&suppress_response_codes=false');
    // Функция Insert
    $array = Insert($jsonData);
    include_once "update.php";
    // Функция обновления данных
    update($array, 0 ,$json);

?>
