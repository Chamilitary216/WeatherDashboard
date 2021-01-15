$(document).ready(function(){

    $("#search-button").click(function(){
        var city = $("search-value").val();

        if(city != ""){

            $.ajax({

                // API call for city and imerial units
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=24d12d7e66703d2d1e26e24ab8117ec4",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    console.log(data);

                }
                



            });

        }else{
            $("#error").html("field cannot be empty");
        }
    });


});

// // API Key
// var APIKey = "fc22f9676ccf5c3658a3938bde4d0e22";

// //variable city data to local storage
// var city = localStorage.getItem("lastResult");

// //Query URL

// var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + APIKey + city;

// // 

// // Current date

// var currentDate = moment().format("dddd, MMMM Do");

// function insertCurrentDay() {
//     $(".current-date").text(currentDay);
// };

// //Temp conversion 
// var tempF = (response.main.temp - 273.15) * 1.80 + 32;
// $(".tempF").text("Temperature: " + Math.round(tempF) + " °F");

// var lat = response.coord.lat;
// var lon = response.coord.lon;
// var queryURL = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon + APIKey;
