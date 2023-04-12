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
        .then(response => response.json())
        .then(function(response){
            document.querySelector("#tempf span").innerHTML = response.current.temp_f;
            document.querySelector("#winddir span").innerHTML = response.current.wind_dir;
            document.querySelector("#windspeed span").innerHTML = response.current.wind_mph;
            document.querySelector("#cloudcover span").innerHTML = response.current.vis_miles;

            return response;
        })
        .catch(err => console.error(err));

});