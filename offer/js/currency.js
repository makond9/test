    function addVisitorModule(){     
      var isoCode;
      $.getJSON("https://ipinfo.io", function(data) {
          isoCode = data.country;
          countryGeo = data.country
          currency()
          console.log(isoCode)
        });
      function currency(){
        $(".country-name-geo").text(countryGeo)
        var btc = "$"
        var currency1 = ["CZ","DK","GR","NL","NO","PL","SE","IE", "ES", "FR","DE","PL"]
        if(isoCode === "GB"){
         $(".currency").text("£")
          var btc = "£"
        }
        if(currency1.indexOf(isoCode)>=0){
          $(".currency").text("€")
          var btc = "€"
          }
          
       $.ajax({
       // url: '/btcrates',
       url: '/btcrates',
       dataType: 'json'
   })
       .done(function (data) {
           if (btc == "$") {
               $('.corency').text(btc + " " + data.BTC.USD);
           } else if (btc == "£") {
               $('.corency').text(btc + " " + data.BTC.GBP);
           } else {
               $('.corency').text(btc + " " + data.BTC.EUR);
           }
       })
      }
    };
    addVisitorModule()