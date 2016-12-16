<?php

/**
 * Выбрать Id страны из country
 * @param $arra Объект событие
 */
function requestSelectCountryId_cuyntry($arra){
  $parametr = trim($arra -> country);
  $query = "SELECT Id_Country FROM `Country` WHERE name = '{$parametr}'";
  echo $query;
  $result = mysql_query($query);
  $rows = mysql_fetch_assoc($result);
  return $rows["Id_Country"];
}

/**
 * Проверить на существование EventGroup
 * @param $arra Объект событие
 */
function checkInsertEventGroup($arra){
  $parametr = trim($arra -> name);
  $query = "SELECT name FROM `EventGroup` WHERE name = '{$parametr}'";
  $result = mysql_query($query);
  $rows = mysql_fetch_assoc($result);
  if($rows == null){
    return false;
  }
  else{
    echo "Такая группа событий есть";
    return true;
  }
}

/**
 * Запрос на добавление EventGroup
 * @param $arra Объект событие
 */
function requestInsertEventGroup($arra){
  $name = trim($arra ->name);
  $unitNumbersttrim = trim($arra ->unit);
  $query = "INSERT INTO `EventGroup` (name, unitNumberst)  VALUES ('{$name}','{$unitNumbersttrim}')";
  $result = mysql_query($query);
  return $arra;
}

/**
 * Выбрать id_EventGroup
 * @param $arra Объект событие
 */
function requestSelectEventGroupId($arra){
  $parametr = trim($arra -> name);
  $query = "SELECT id_EventGroup FROM `EventGroup` WHERE name = '{$parametr}'";
  $result = mysql_query($query);
  $rows = mysql_fetch_assoc($result);
  return $rows["id_EventGroup"];
}

/**
 * Добавить событие в таблицу Event
 * @param $arra Объект событие
 */
function requestInsertEvent($arra){
  // Страна
  echo "<br>";
  $Id_Country = trim($arra ->Id_country);
  // Группа событий
  $Id_eventGroup = trim($arra ->Id_eventGroup);
  // Время
  $Time = trim($arra -> Time);
  $Pot = trim($arra -> Pot);
  // Проверка на пустоту
  if(empty($arra ->fact)){
    $FactNumber = 666;
  }
  else{
    $FactNumber = trim($arra ->fact);
  }
  // Проверка на пустоту
  if(empty($arra ->expec)){
    $ExpectNumber = 666;
  }
  else{
    $ExpectNumber = trim($arra ->expec);
  }

  $query = "INSERT INTO `Event`(Id_Country, Id_Event_Group, Time, FactNumber, ExpectNumber, Pot)  VALUES ('{$Id_Country}','{$Id_eventGroup}','{$Time}','{$FactNumber}','{$ExpectNumber}','{$Pot}')";
  // отправить запрос
  $result = mysql_query($query);
}

/**
 * Обновление данных
 * @param $arra Объект событие
 */
function requestUpdateEvent($arra){
  $query = "SELECT  Id_Event FROM  Event  WHERE  `Id_Country` = {$arra -> Id_country} AND `Id_Event_Group` = {$arra -> Id_eventGroup} AND  `Time` = {$arra -> Time}";
  // отправить запрос
  echo $query ;
  $result = mysql_query($query);
  $rows = mysql_fetch_assoc($result);
  // получить id
  $id = $rows["Id_Event"];
  // получить фактическое значение объекта, которое необходимо обновить в БД
  $FactNumber = trim($arra ->fact);
  // Запрос на обновление в БД
  $query = "UPDATE `Event` SET `FactNumber`='{$FactNumber}' WHERE `Id_Event` = '{$id}'";
  echo $query;
  $result = mysql_query($query);
}

/**
 * Запрос на выборку
 * @param $quote Котировка
 */
function requestSelect($quote, $Time, $Limit){
  // запрос на выборку id
  $query = "SELECT  Id_Country1, Id_Country2 FROM  Quotes  WHERE  `name` = '{$quote}'";
  $result = mysql_query($query);
  $rows = mysql_fetch_assoc($result);
  //
  $Id_country1 = $rows['Id_Country1'];
  $Id_country2 = $rows['Id_Country2'];

  $result1 = requestSelectId_country($Id_country1, $Time, $Limit);

  while ($rows1 = mysql_fetch_assoc($result1))
  {
    requestData($rows1);
  }

  $result2 = requestSelectId_country($Id_country2, $Time, $Limit);
  while ($rows2 = mysql_fetch_assoc($result2))
  {
    requestData($rows2);
  }
}

/**
 * Запрос на выборку name, unitNumberst из таблицы id_EventGroup
 * @param $rows строки БД
 */
  function requestData($rows){
    $Row = requestSelectNameEvent_Group($rows['Id_Event_Group']);
    echo $Row["name"].",   ".$rows['Time'].",   ".$rows['FactNumber'].",   ".$rows['ExpectNumber'].",   ".$Row["unitNumberst"].",   ".$rows['Pot']."; ";
}


/**
 * Запрос на выборку name, unitNumberst из таблицы id_EventGroup
 * @param $Id_Event_Group id группы событий
 * @return $rows возвращает name, unitNumberst
 */
function requestSelectNameEvent_Group($Id_Event_Group){
  $query = "SELECT  name, unitNumberst FROM  EventGroup  WHERE  `id_EventGroup` = '{$Id_Event_Group}'";
  $result = mysql_query($query);
  $rows = mysql_fetch_assoc($result);
  return $rows;
}

/**
 * Запрос на выборку
 * @param $quote Котировка
 */
function requestSelectId_country($Id_country, $Time, $Limit){
  $query = "SELECT * FROM  Event  WHERE  `Id_Country` = '{$Id_country}' AND `Time` >= '{$Time}' ORDER BY  `Time` ASC LIMIT {$Limit}";
  $result = mysql_query($query);
  return $result;
}
 ?>
