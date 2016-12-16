viv();
function parserh(time)
{
    time.split(":")
    var t = [];
        t [0] = time[0] + time[1]; 
        t [1] = time[3] + time[4]; 
    return t;
}

function conveTime(dTime, TIME)
{
    var fTime = Math.floor(dTime) / 1000 + (parseInt(TIME[0]) - 4) * 3600 + parseInt(TIME[1]) * 60;
    return fTime;
}

function viv() 
{
  if( $('input[class="checkboxs"]').is(":checked") == true)
                  {
                       $('input[class="Icendle"]').show();
                       $('input[class="dfirstTime"]').hide();
                       $('input[class="tfirstTime"]').hide();
                       document.getElementById('hideT').innerHTML = "";
                       document.getElementById('hideTi').innerHTML = "";
                       document.getElementById('Interval').innerHTML = "Интервал времени";
                      typeRequre = 1;
                  }
              else 
                  {
                       $('input[class="Icendle"]').hide();
                       $('input[class="dfirstTime"]').show();
                       $('input[class="tfirstTime"]').show();
                      document.getElementById('hideT').innerHTML = "Начальная дата";
                      document.getElementById('hideTi').innerHTML = "Начальное время";
                      document.getElementById('Interval').innerHTML = "";
                      typeRequre = 0;
                  }  
}

$(function()
        {
        $('input').bind('click', function()
         {
        if($(this).hasClass("checkboxs"))
          {  
              viv();
          }
        });
        });
                        


        $(function()
        {
        $('input').bind('click', function()
         {
        if($(this).hasClass("load"))
          {  
            var cendleT = {};
            cendleT.dfirsTime = new Date($('input[class="dfirstTime"]').val()); // начальная дата
            cendleT.dlastTime = new Date($('input[class="dlastTime"]').val()); // конечная дата
            cendleT.tfirsTime = ($('input[class="tfirstTime"]').val()); // начальное время
            cendleT.tlastTime = ($('input[class="tlastTime"]').val()); // конечное время
            cendleT.interval = ($('input[class="Icendle"]').val()); // конечное время
            cendleT.fTime = [];
            cendleT.lTime = [];
            cendleT.fTime = parserh(cendleT.tfirsTime);  
            cendleT.lTime = parserh(cendleT.tlastTime);
              
            if((cendleT.dfirsTime.getDay() || cendleT.dlastTime.getDay()) != (6 || 7))
                {
                    cendleT.UlastTime = conveTime(cendleT.dlastTime, cendleT.lTime);
                    cendleT.UfirsTime = conveTime(cendleT.dfirsTime,cendleT.fTime);
                      if(isNaN(parseInt($('input[class="cendle"]').val())) && $('input[class="cendle"]').is(":visible") == true )
                    {
                      alert("Введеная запись не является числом, поэтому присвоено дефолтное со значением 600")
                      $('input[class="cendle"]').val(60);
                      cendleT.cendle = 60;
                    }
                     else
                     {
                      cendleT.cendle =  parseInt($('input[class="cendle"]').val()) // промежуток формирования свечи
                     }
                    
                      if(isNaN(parseInt($('input[class="Icendle"]').val())) &&  $('input[class="Icendle"]').is(":visible") == true )
                    {
                      alert("Введеная запись не является числом, поэтому присвоено дефолтное интервала со значением 1200 ")
                      $('input[class="Icendle"]').val(1200);
                      cendleT.cendle = 1200;
                    }
                     else
                     {
                      cendleT.interval =  parseInt($('input[class="Icendle"]').val()) // интервал формирования
                     }
              
                     if(cendleT.UfirsTime > cendleT.UlastTime && $('input[class="dfirstTime"]').is(":visible") == true )
                    {
                    alert("Ошибка начальная дата не может быть позже конечной");
                    }
                    else
                    {
                    console.log(cendleT.UlastTime + 'Вася это firstTime')
                    diapasonFormCendles = cendleT.cendle;
                    intervalTime = cendleT.interval;
                    Plusselected(cendleT.UlastTime, cendleT.UfirsTime, cendleT.interval, gPair, typeRequre); 
                    }
                }
              else
              {
                  alert("Выбраны выходные дни. В эти дни форекс не работает. Пожалуйста выберите другую дату.")
              }
          }           
         });
        });
        $(function()
        {
        $('input').bind('click', function()
         {
        if($(this).hasClass("sledov"))
          {  
              sostoiChexbox()
          }
        });
                        });

                        function sostoiChexbox() 
                        {
                          if($('input[class="sledov"]').is(":checked"))
                      {
                      $('div[class="Hight"]').hide()  
                      $('div[class="Low"]').hide()
                      $('input[class="cendle"]').show()
                      setIntervalID = setInterval(TUpdate, 1000);
                      console.log("gUt")
                      }
                       else
                      {
                      clearInterval(setIntervalID)
                      $('div[class="Hight"]').show()
                      $('div[class="Low"]').show() 
                      }
                        }
