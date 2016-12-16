<script language="javascript" type="text/javascript">
     google.charts.load('current', {'packages':['corechart']});
    var loadedText='default';
    
    function start(pair, stroka , mlastTime, limit)
    {
        var now = new Date();
        var OffsetMoscows = (now.getTimezoneOffset()*-1)-180
       // lastTime = Math.floor(new Date().getTime()/1000) + OffsetMoscows*60 - 3600;//Time hour ago
            var PatchHttps = loadString(mlastTime, pair, limit, 600); // не робит
            console.log(PatchHttps);
            gPair = pair;
            loadText(PatchHttps, stroka);
    }
    
     function adresReqest(offset, pair,limit)
    {
        var PatchHttps = 'https://myfirstphpapp-skro.rhcloud.com/get_currency.php?time=' + offset + '&limit=' +limit + '&sign=' + pair;
        console.log("Зашел в adresReqest");
        return PatchHttps;
    }
    
    function adresReqest(offset, pair, limit, interval)
    {
        var ftime = formationInterval(offset, interval);
        var ostatok =  offset % 60;
        offset -= ostatok;
        var PatchHttps = 'https://myfirstphpapp-skro.rhcloud.com/get_currency.php?time=' + ftime + '&limit=' +limit + '&sign=' + pair +'&ftime=' + offset;
        return PatchHttps;
    }
    
        function dataSetCendle(Dannie)
    {
        google.charts.setOnLoadCallback(drawChart(Dannie));
    }
    
    function selectedUSDJPY(TimeZapros)
    {
        var lpair = "usdjpy"
        start(lpair,DateCandle, TimeZapros, limit)
        drawChart(DateCandle);
        console.log("Load usdjpy")
    }
    
    function selectedEURUSD(TimeZapros)
    {
        var lpair = "eurusd"
        start(lpair,DateCandle, TimeZapros, limit)
        drawChart(DateCandle);
        console.log("Load eurusd")
    }
    
     function Plusselected(TimeZapros, pair)
    {
        start(pair,DateCandle, TimeZapros, limit); // Посылаем последннее время из сохранившегося
        drawChart(DateCandle);
        console.log(lastTime);
        vremya = new Date(lastTime * 1000).getDate() + "." + new Date(lastTime * 1000).getDay() + "." + new Date(lastTime * 1000).getFullYear();
        document.getElementById('txt').innerHTML = '<center>' + vremya + '</center>';
        console.log(new Date(lastTime * 1000));
    }
    
        function loadString(offset, pair, limit)
        { 
            var PatchHttps = adresReqest(offset, pair, limit);
            return PatchHttps;
        }
    
     function loadString(offset, pair, limit, interval)
        { 
            var PatchHttps = adresReqest(offset, pair, limit, interval);
            return PatchHttps;
        }    
    
      function formationInterval(offset, interval)
      {
       var ostatok =  offset % 60;
          offset -= ostatok; // Левая часть границы
       var poslTime = offset + interval; // правая часть границы
          return poslTime;
      } // Формирование интервала
    
    
             function loadText (url, Stroka) 
        {
             var h = new XMLHttpRequest();
             var arrayCharts = [[]];
             h.open("GET", url);
             h.onreadystatechange = function () {
                 if(h.readyState == 4 && h.status == 200) 
                     {
                      loadedText = h.responseText;
                         if(loadedText != null)
                             {
                                 readyToParse = true;  
                                 arrayCharts = Parser(loadedText) // Вроде должно перепересвоиться
                                 promejutki = promejutok(arrayCharts, 60, 1) // Присваиваем получивщийся разбитый массив                       
                                 Stroka = preobrazov(promejutki, 60, arrayCharts)
                                 dataSetCendle(Stroka);
                             }
                         else 
                             {
                                 alert("отсутствие точек")
                             }
                     }                  
                 else return;
             };
             h.send(null);
    }
    
        
    function timeInterval(arrayCharts)
    {
        
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
                var ostatok = arrayCharts[1][0]%chislo;
                var CandleTime = new Date(parseInt(arrayCharts[1][0] + chislo - ostatok +chislo * i)*1000).toLocaleTimeString()
                var Cande = [CandleTime ,shadowClandeMin, bodyClandeFirst, bodyClandeLast, shadowClandeMax]
                SA.push(Cande)
            }
        return SA;
    }
    
    function promejutok(arrayCharts, chislo, l)
    {
        var uporad = [];
        for(var i = 1; i < arrayCharts.length; i++ )
            {
                var ostatok = arrayCharts[i][0] % chislo
                var leftBorden = arrayCharts[i][0]- ostatok
                var rightBorden = leftBorden + chislo 
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
        for(var i = 0; i < stringParam.length; i ++)
            {
              tmp = stringParam[i].split(",")
              var sLen = tmp.length         
              if(sLen == 3) // проверка на получение пары
              {
                       arrayCharts.push([ parseInt(tmp[0]), parseFloat(tmp[1]), parseFloat(tmp[2])]); // Добавление новой записи
                       var prov = new Date(parseInt(tmp[0])*1000).toLocaleTimeString()
                       lastTime = parseInt(tmp[0]); // сохранение последнего времени Необходимо подумать 
                       console.log(lastTime);
              }
            }
        return arrayCharts
    }
    </script>