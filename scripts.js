//javascrip for tp10

// code that waits for the DOM
document.addEventListener("DOMContentLoaded", function() {
    
    //code to load API
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b1191f052bmsh9393381bd6d8022p103498jsna1764183a67a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    // get weather data for Pullman, WA
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20WA', options)
        .then(function(response) {
            return response.json(); // convert to JSON and return
        })
        .then(function(response) {
            console.log(response); // output object
           
            // update page elements with object properties
            document.querySelector("#temp").innerHTML = response.current.temp_f;
            document.querySelector("#windDir").innerHTML = response.current.wind_dir;
            document.querySelector("#windSpeed").innerHTML = response.current.wind_mph;
        })
        .catch(err => console.error(err));

});