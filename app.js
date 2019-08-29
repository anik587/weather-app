const request = require('request');
const {getLocation}  = require('./getPosition.js');
const { getWeather } = require('./getWeather.js');

const getWeatherData =  ()=>{
    let latitude = '';
    let longitude = '';
    let url = '';
    getLocation('Dhaka,Bangladesh', (error, data)=>{
        if(error){
            console.log(error);
        }else{
            latitude = data[0];
            longitude = data[1];
            url = `https://api.darksky.net/forecast/966f210d15503070d798f9e8064091a9/${latitude},${longitude}?units=si&lang=en`;
            getWeather(url, (error, data) => {
                console.log(`error ${error}`);
                console.log(data[0]);
                console.log(data[1]);
            });
        
        }

    })
}




getWeatherData();