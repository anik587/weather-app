const request = require('request');
const url = 'https://api.darksky.net/forecast/966f210d15503070d798f9e8064091a9/37.8267,-122.4233?units=si&lang=en';
request({
    url: url,
    json: true
}, 
 (error, response) =>{
     if(error){
         console.log('Unable to connect weather service')
     }else if(response.body.error){
        console.log('Unable to find weather data');
     }else{
         const data = response.body;
         console.log(data.daily.data[0].summary);
         console.log(data.daily.data[0].precipType);

     }
});

