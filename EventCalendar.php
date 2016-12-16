<?php

/**
 * Created by PhpStorm.
 * User: саша
 * Date: 15.11.2016
 * Time: 15:34
 */
class EventCalendar{
    public $timeD;
    public $country;
    public $name;
    public $expec;
    public $fact;
    public $unit;
    public $Id_country;
    public $Id_eventGroup;
    public $Time;
    public $Pot;

    public function __construct($_timeD, $_country, $_name, $_expec, $_fact, $_unit, $_pot){
        $this ->timeD = $_timeD;
        $this ->country = $_country;
        $this ->name = $_name;
        $this ->expec = $_expec;
        $this ->fact = $_fact;
        $this ->unit = $_unit;
        $this -> Pot = $_pot;
    }

    public function  updateFact($_fact){
        $this ->fact = $_fact;
    }
}