
    function Draw()
    {
        $.plot($("#plot"), [{data: point, lines: {show: true, fill: .5},label : "EURUSD", color:'#99ccff'},]);
    }
       
       function update()
    {
        var chislo = getRandomArbitary(0,100)
        var schet = new Date(1359270000000 + seconda * 1000).getSeconds()
        point.push([schet,chislo]) // Возможно не работает
        if((seconda % 60) >= 5)
            {
               point.splice(0,1);
            }
        if((seconda % 59) == 0 && seconda != 0)
            {
                point.splice(0,5);
            }
        seconda++
               Draw();  
    }
    
    function getRandomArbitary(min, max)
{
  return Math.random() * (max - min) + min;
}  
       function TUpdate()
    {
        Vwindow()
    var timeOffsetMoscow = (new Date().getTimezoneOffset()*-1)-180;  
    var NowDate = Math.floor(new Date().getTime() / 1000) + timeOffsetMoscow * 60;
    var INowDate = NowDate - 3600;
    console.log(INowDate + "INowDate")
    console.log(NowDate + "NowDate")
    Plusselected(NowDate, INowDate, 0, gPair, 0); 
    // Plusselected(cendleT.UlastTime, cendleT.UfirsTime, cendleT.interval, gPair);
    }

        var pair = "usdjpy";
        start(pair, SA, 1467370172, limit, 1467370772,  diapasonFormCendles, typeRequre); // функция коннекта для графика

        function Vwindow  ()
        { 
          vremya = new Date(lastTime * 1000).getDate() + "." + (new Date(lastTime * 1000).getMonth() +1) + "." + new Date(lastTime * 1000).getFullYear();
          document.getElementById('txt').innerHTML = vremya;
        }