<?php
/**
 * @param $array массив событий
 * @param $i номер отчета
 * @return array массив объектов календарь
 */
function update($array, $i, $json){
    for ($i; $i < count($array); $i++) {
        echo "<br>";
        // Условие с задержкой
        if (($array[$i]->Time) + 100 > time()) {
            echo ($array[$i]->Time + 100 - time());
            // дожидаемся обновления данных
            sleep(($array[$i]->Time) - time() + 99);
            // получаем новые данныe для всего дня
            $json = GetData('https://api-economcalendar.fxclub.org/v1/events?countries=AUS%2CCAN%2CCHN%2CEMU%2CFRA%2CDEU%2CITA%2CJPN%2CNZL%2CPRT%2CESP%2CCHE%2CGBR%2CUSA&volatility=0%2C1%2C2%2C3&timezone=Europe%2FKiev&date_start='.$today.'&date_end='.$today.'&locale=ru&suppress_response_codes=false');
            // обновление всех данных
            for($j = 0; $j <= $i; $j++ ){
                // получаем обновленный объект
                $even2 = createEven($j, $json);
                //обновляем объект события в массиве
                $array[$j]->fact = $even2->fact;
                // обновление в БД
                requestUpdateEvent($array[$j]);
            }
            // дальнейшее обновление одинаковых данных.
            $m = 1;
            while(($array[$i + $m]->Time) + 100 == time()){
                $even2 = createEven($i + $m, $json);
            }
        } else {
            echo($array[$i]->name);
            echo "Событие прошло     ";
        }
    }
    return false;
}
?>
