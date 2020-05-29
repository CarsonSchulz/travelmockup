var headerWrapper = document.getElementById("headerWrapper");
var lastCity = "";
var headerItt = 0;
var headerSwitchInt = 7000;


function getHeaderData(jsonURL, callback) {
    $.getJSON(jsonURL,function(data) {
        callback(data);
    });
}

getHeaderData('json/header-images.json', function(data){

    var randomCity = getRandomCity(data);
    changeHeader(randomCity.name, randomCity.image)
    
    setInterval(function(){
        randomCity = getRandomCity(data);
        changeHeader(randomCity.name, randomCity.image);
    }, headerSwitchInt);
});

function changeHeader(name, url) {
    name = name;
    headerWrapper.style.backgroundImage = "url('images/header-backgrounds/" + url + "')";

    var charItt = 0;
    var cityName = document.getElementById("cityTyper");
    cityName.innerHTML = "";
    fowardTyper();

    timeTilBackspace = 6800 - (name.length * 100);

    function fowardTyper() {
        if(charItt < name.length) {
            cityName.innerHTML += name.charAt(charItt);
            charItt++;
            setTimeout(fowardTyper, 100);
        }       
    }

    function backTyper() {
        if(cityName.innerHTML.length != 0) {
            cityName.innerHTML = cityName.innerText.substr(0, (cityName.innerText.length - 1));
            setTimeout(backTyper, 50);
        }       
    }

    setTimeout(function() {
        backTyper();
    }, timeTilBackspace);

}

function getRandomCity(data) {
    var city = data[Math.floor(Math.random() * data.length)];

    if(city.name == lastCity && headerItt > 0) {
        console.warn("DUPLICATE HAS BEEN FOUND!!!!");

        while(city.name == lastCity) {
            city = data[Math.floor(Math.random() * data.length)];
        }
    }

    lastCity = city.name;
    headerItt++;


    return city;
}