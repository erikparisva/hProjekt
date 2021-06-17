function computeConsumption(){
    var teekond = document.getElementById('teekond').value;
    var keskkulu = document.getElementById('keskkulu').value;
    var kutusehind = document.getElementById('kutusehind').value;
    var vastusRaha = (teekond / (100 / keskkulu) * kutusehind).toFixed(2);
    var inimesed = document.getElementById('inimesed').value;
    //var consumed =  (keskkulu / (teekond/100)).toFixed(2);
    //var costper100 = (consumed * costper).toFixed(2);
    document.getElementById('consumption').innerHTML = "Kütus läheb maksma " + vastusRaha + "€, jagades seda " + inimesed + " inimese vahel, iga inimene peab maksma " 
    + (vastusRaha / inimesed).toFixed(2) + " €.";
  }