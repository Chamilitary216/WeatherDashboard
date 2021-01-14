// API Key
var APIKey = "fc22f9676ccf5c3658a3938bde4d0e22";

//variable city data to local storage
var city = localStorage.getItem("lastResult");

//Query URL

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + APIKey + city;