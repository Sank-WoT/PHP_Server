<html >
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
      <link rel="stylesheet" type="text/css" href="css/Menu.css">
<head>
    <meta http-equiv="Content-Type" Content="text/html; Charset=utf-8" Access-Control-Allow-Origin="*">
    <script type="text/javascript" src="bibliotek/jquery-3.0.0.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="flot/jquery.flot.js"></script>
    <script type="text/javascript" src="flot/jquery.flot.js"></script>
    <script type="text/javascript">
        var lastTime = 1467370172;
        var limit = 200000;
        var firstTime = 1467370772;
        var TimeZapros = 1467370172;
        var readyToParse = false;
        var point = [[new Date(1359270000000).getSeconds(), 5]]
        var seconda = 0
        var schet = 0
        var promejutki = [];
        var SA =  [[]];
        var DateCandle =  [[]];
        var gPair;
        var vremya;
        var intervalTime = 1200;
        var diapasonFormCendles = 120;
        var typeRequre = 1; // выбор режима отображения
    </script>   
<title>Программа анализа рынка</title>
<div align ="center">
<div style="width: 950px; height: 50px">
        <center>
            <h2 class = "css3header2" style = "font-family: 'Open Sans', sans-serif;">Данный график в реальном времени показывает колебания курса валют </h2>
        </center>
</div>
<div>

    <div id = "fildButton" style="width: 900px; height: 100px;" class = "Menu"> 
       <ul  class = "dropdown">
           <li  class = "dropdown-top" >
               <a  class = "dropdown-top" onclick="selectedEURUSD()">EURUSD</a>
               <ul class="dropdown-inside">
                   <li onclick="selectedUSDJPY()"><a class = Menu>USDJPY</a></li>
               </ul>
           </li>
       </ul>
     </div>

</head>
<hr>

<body >   
<div class = "brd"> 
    <script language="javascript" type="text/javascript">
        google.charts.load('current', {'packages':['corechart']});
    </script>
    <script type="text/javascript" src="Graph.js"></script>
    <script type="text/javascript" src="draw.js"></script>

      <script type="text/javascript">(function() {
  if (window.pluso)if (typeof window.pluso.start == "function") return;
  if (window.ifpluso==undefined) { window.ifpluso = 1;
    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
    s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
    var h=d[g]('body')[0];
    h.appendChild(s);
  }})();</script>
<div class="pluso" align = "left" style = "width: 20px;" data-background="transparent" data-options="big,square,line,vertical,counter,theme=07" 
data-services="vkontakte,odnoklassniki,facebook,twitter,google,moimir,email,linkedin,googlebookmark">
</div>

    <div id = "chart_div" align="center" style = "width: 900px; height: 500px;" class = "chart">
    <!-- График -->
    </div>

    <center id ="txt">1.7.2016</center><br>
    </div>


    <div id = "ButtonPole" align="center" style = "width: 900px; height: 100px;">
    <div>
             Режим интервал<input type = "checkbox" class = "checkboxs" checked = "checked" id = "checkbox" />  Следовать за котировками<input type = "checkbox" class = "sledov" id = "sledov" />
        </div>  
        <div  class = "Hight">  
        <text id = "hideT">Начальная дата</text><input type = "date" id ="dfirstTime" weight = "150" max="2017-04-20" min="2016-04-8" value="2016-04-11" class = "dfirstTime">
        Конечная дата <input type = "date" weight = "150" max="2017-04-20" min="2016-04-8" value="2016-04-11" class = "dlastTime"> 
            <text id = "Interval"></text> <input type = "text" weight = "50" placeholder="second" class="Icendle" visibility : hidden> 
        </div>
         <div class = "Low" >
         <text id = "hideTi">Начальное время</text> <input type = "time" weight = "150"class = "tfirstTime">
         Конечное время <input type = "time" weight = "150" class = "tlastTime"> 
        <input type = "submit", class = "load" size = "100" value = "Прогрузить точки"> 
         </div>
        <div>
            Время формирования свечи <input type = "text" weight = "50" placeholder="second" class="cendle"> 
        </div>
         </div>
     <script type="text/javascript" src="loadpoint.js"></script>
</body>
<footer>

<hr>
<div align = "center">
<div>
<img src = "img/favicon.jpg"><br>
<b class = "footer">Проект создан компанией PM<b> <br>
<b class = "footer">2016г<b>
</div>
</div>

</footer>
</html>

