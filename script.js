const api = {
    key: "a539051536d1dceed55f3443e04ea56e",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
    
}
function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {

    const vids = document.querySelectorAll(".video");
    console.log(vids);
    
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    var today = new Date();
    var time = today.getHours();

  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span> F°</span>`;

    let weather_el = document.querySelector('.current .weather');

    if (weather.weather[0].main == "Mist" || weather.weather[0].main == "Drizzle" ){
        weather_el.innerText = "Rain";
       
    } 
    else if (weather.weather[0].main == "Clear" && time > 6 && time < 19 ){
        weather_el.innerText = "Day: Sunny";
    }
    else if (weather.weather[0].main == "Clear" && time < 6 || time > 19) {
        weather_el.innerText = "Night: Clear";
    }
    else if (weather.weather[0].main == "Clouds") {
        weather_el.innerText = "Cloudy";
    }
    else {
        weather_el.innerText = weather.weather[0].main;
    }

    let rainVid = document.querySelector('.current .rainVideo');
    if (weather_el.innerText == "Rain") {

        $(".rainVideo").css("display", "block");
    } else{
        $(".rainVideo").css("display", "none"); 
    }

    let sunVid = document.querySelector('.current .sunVideo');
    if (weather_el.innerText == "Day: Sunny") {

        $(".sunVideo").css("display", "block");
    } else {
        $(".sunVideo").css("display", "none");
    }

    let hotVid  = document.querySelector('.current .hotVideo');
    if (Math.round(weather.main.temp) >= 85){
        $(".hotVideo").css("display", "block");
        return;
    } else {
        $(".hotVideo").css("display", "none");
    } 
    
    let nightVid = document.querySelector('.current .nightVideo');
    if (weather_el.innerText == "Night: Clear") {
        $(".nightVideo").css("display", "block");
    } else {
        $(".nightVideo").css("display", "none");
    }
    
    
    let cloudVid = document.querySelector('.current .cloudVideo');
    if (weather_el.innerText == "Cloudy") {
        $(".cloudVideo").css("display", "block");
    } else {
        $(".cloudVideo").css("display", "none");
    }
    
    

    let coldVid  = document.querySelector('.current .coldVideo');
    if (Math.round(weather.main.temp) <= 32) {
        $(".coldVideo").css("display", "block");
    } else {
        $(".coldVideo").css("display", "none");
    } 

    let stormVid = document.querySelector('.current .stormVideo');
    if (temp.innerHTML <= 32) {
        $(".stormVideo").css("display", "block");
    } else {
        $(".stormVideo").css("display", "none");
    } 


  

    // time = msToTime(weather.)
    // function msToTime(s) {
    //     var ms = s % 1000;
    //     s = (s - ms) / 1000;
    //     var secs = s % 60;
    //     s = (s - secs) / 60;
    //     var mins = s % 60;
    //     var hrs = (s - mins) / 60;

    //     return hrs + ':' + mins + ':' + secs + '.' + ms;
    // }
    
    // console.log(weather)

        //test code
    // $('.weather').innerHTML;
    
    // if (weather_el.innerText == 'Clear') {
    //     $("body").css("background-image", "url('bg.jpg')");
    //     console.log(weather_el.innerText);
    // }

    // end test code

   
}




//sunny-sunshine, just another day in cali
//cloudly-strange clouds, stan
//rain- make it rain
//cold- ice ice baby, grillz, cold like minnesota
//hot-drop it like its hot
//storm
//snow


