window.onload = function()
        { 
          vremya = new Date(lastTime * 1000).getDate() + "." + new Date(lastTime * 1000).getDay() + "." + new Date(lastTime * 1000).getFullYear();
          document.getElementById('txt').innerHTML = vremya;
        }