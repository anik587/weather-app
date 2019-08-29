const request = require('request');
const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?11access_token=pk.eyJ1IjoiYW5pazU4NyIsImEiOiJjanp3ZWJjaGgwYXVvM2xvMTJ0bHhoN21oIn0.VRvnGkVOjUKRxKdl3Yz6_A&limit=1";
request({
    url: geoCodeUrl,
    json: true,
}, (error, response)=>{
        if(error){
            console.log('Unable to connect location service')    
        } if (response.body.features === undefined) {
            console.log('Unable to fetch location');
        } else if (response.body.features.length === 0){
            console.log('Unknown Location');
        }else{
            console.log(`latitude : ${response.body.features[0].center[0]}`);
            console.log(`longitude : ${response.body.features[0].center[1]}`);

        }
    })