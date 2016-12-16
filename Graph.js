window.onload = function() 
{
     google.charts.load('current', {'packages':['corechart']});   
};
    var loadedText='default';
    
    function start(pair, stroka , mlastTime, limit, first, diapasonFormCendle )
    {
        var now = new Date();
        var OffsetMoscows = (now.getTimezoneOffset()*-1)-180
        gPair = pair;
        var PatchHttps = 'https://myfirstphpapp-skro.rhcloud.com/get_currency.php?time=' +first + '&limit=' +limit + '&sign=' + gPair +'&ftime=' + mlastTime;
        console.log(PatchHttps) // Запрос
            loadText(PatchHttps, stroka, diapasonFormCendle);
    }
        function dataSetCendle(Dannie)
    {
        google.charts.setOnLoadCallback(drawChart(Dannie));
    }
    
    function selectedUSDJPY()
    {
        gPair = "usdjpy"
        start(gPair, SA, 1467370172, limit, 1467370772,  diapasonFormCendles, typeRequre); // функция коннекта для графика
        drawChart(DateCandle);
    }
    
    function selectedEURUSD()
    {
        gPair = "eurusd"
        start(gPair, SA, 1467370172, limit, 1467370772,  diapasonFormCendles, typeRequre); // функция коннекта для графика
        drawChart(DateCandle);
    }

    function drawChart(Dannie)
    {
      // первое число это нижняя тень свечи, второе число это начало тела, третье число это конец тела, четвертое число это верхняя тень
       try 
     {
      var data = google.visualization.arrayToDataTable(Dannie, true);
     }
     catch (error) 
     {       
     }
      var options =
    {
      legend:'none',
        candlestick: 
        {
             fallingColor: { strokeWidth: 1, fill: '#271ab8' }, // strokeWidth обозначение границ fill цвет заливки
              risingColor: { strokeWidth: 1, fill: '#ffffff' }   // green
        }
    };
    var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));
         google.visualization.events.addListener(chart, 'error', errorHandler); 
        
     try 
     {
     chart.draw(data, options); // рисуем график
     } 
     catch (error) 
     {       
     }
    };
    
    function errorHandler(errorMessage) {
    //curisosity, check out the error in the console
    console.log(errorMessage);

    //simply remove the error, the user never see it
    google.visualization.errors.removeError(errorMessage.id);
}


     function Plusselected(last, firsTim, interval, pair, typeRequret)
    {
        console.log( typeRequret + " typeRequre na vhod"); // тип запроса

        if( typeRequret == 1)
        {
            firsTim = last;
            last +=  interval; 
        }
        console.log(last + "last")
        console.log(firsTim + "firsTime")
        start(pair, SA, firsTim, limit, last, diapasonFormCendles, typeRequre); // Посылаем последннее время из сохранившегося
        console.log(firsTim + " firstTime na vihod");
        drawChart(DateCandle);
        vremya = new Date(lastTime * 1000).getDate() + "." + (new Date(lastTime * 1000).getMonth()) + "." + new Date(lastTime * 1000).getFullYear();
        document.getElementById('txt').innerHTML = '<center>' + vremya + '</center>';
    }  
    
      function formationInterval(offset, interval)
      {
       var ostatok =  offset % 60;
          offset -= ostatok; // Левая часть границы
       var poslTime = offset + interval; // правая часть границы
          console.log(offset + "   nachTime")
          console.log(poslTime + "   poslTime")
          return poslTime;
      } // Формирование интервала
    
    $(function(){
    $('button').click(function(){
        $.get('ajax.php', function(data) {
                $('#news').html(data);
        });
    });
});
             function loadText (url, Stroka, diapasonFormCendle) 
        {
             var h = new XMLHttpRequest();
             var arrayCharts = [[]];
            $(function()
              {
                $.get(url, function(data) {
                      loadedText = data;
                         if(loadedText != null)
                             {
                                 readyToParse = true;  
                                 arrayCharts = Parser(loadedText) 
                                 promejutki = promejutok(arrayCharts, diapasonFormCendle, 1) // Присваиваем получивщийся разбитый массив             
                                 Stroka = preobrazov(promejutki, diapasonFormCendle, arrayCharts)
                                 dataSetCendle(Stroka);
                             }
                         else 
                             {
                                 alert("отсутствие точек")
                             }
                     });                  
             });
    }



    function preobrazov(promejutk, chislo, arrayCharts)
    {
        var SA =  [['time', 10, 12, 12, 14]];
        SA.splice(0,1)
        for(var i = 0; i < promejutk.length; i++)
            {
                var mass = promejutk[i]
                var shadowClandeMax = mass[0]
                var shadowClandeMin = mass[0]
                var bodyClandeFirst = mass[0]
                var bodyClandeLast = mass[mass.length - 1]
                for(var k = 0; k < mass.length; k++ )
                    {
                       if(mass[k] > shadowClandeMax)
                           {
                               shadowClandeMax = mass[k]
                           }
                        if(mass[k] < shadowClandeMin)
                           {
                               shadowClandeMin = mass[k]
                           }
                    }
                var ostatok = arrayCharts[1][0] % chislo;
                var CandleTime = new Date(parseInt(arrayCharts[1][0] + chislo - ostatok +chislo * i)*1000).toLocaleTimeString()
                var Cande = [CandleTime, shadowClandeMin, bodyClandeFirst, bodyClandeLast, shadowClandeMax]
                SA.push(Cande)
            }
        return SA;
    }

    function promejutok(arrayCharts, chislo, l)
    {
        var uporad = [];
        for(var i = 1; i < arrayCharts.length; i++ )
            {
                var ostatok = arrayCharts[i][0] % chislo;
                var leftBorden = arrayCharts[i][0]- ostatok;
                var rightBorden = leftBorden + chislo; 
                var promejut = [];
                while(true)
                    {
                    if(arrayCharts[i][0] <= rightBorden && i !=arrayCharts.length - 1)
                    {
                        promejut.push(arrayCharts[i][l])
                        i++
                    } //  Разбиение по промежуткам (работает)
                    else
                    {
                        if(i == arrayCharts.length - 1)
                            {
                              promejut.push(arrayCharts[arrayCharts.length - 1][l])  
                              uporad.push(promejut)
                              break;
                            }
                        uporad.push(promejut)
                        i-- //  Возврат на -1 для того чтобы остаться на месте
                        break;
                    } 
                    }
            }
        return uporad
    }
    
     function Parser(stringGet)
    {
        readyToParse = false;
        var stringParam = stringGet.split(";")
        var arrayCharts = [[]];
        var tmp;
        for(var i = 0; i < stringParam.length; i++)
            {
              tmp = stringParam[i].split(",")
              var sLen = tmp.length         
              if(sLen == 3) // проверка на получение пары
              {
                       arrayCharts.push([ parseInt(tmp[0]), parseFloat(tmp[1]), parseFloat(tmp[2])]); // Добавление новой записи
                           if(i == stringParam.length - 1)
                               {
                                    lastTime = parseInt(tmp[0]); // сохранение последнего времени обоащение к глобальной Необходимо подумать 
                               }
              }
            }
        arrayCharts.splice(0,1) // чистка массива
        return arrayCharts
    }