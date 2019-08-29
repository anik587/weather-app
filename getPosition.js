const request = require('request');
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5pazU4NyIsImEiOiJjanp3ZWJjaGgwYXVvM2xvMTJ0bHhoN21oIn0.VRvnGkVOjUKRxKdl3Yz6_A&limit=1";
request({
    url: url,
    json: true,
}, (error, response)=>{
        console.log(`latitude : ${response.body.features[0].center[0]}`);
        console.log(`longitude : ${response.body.features[0].center[1]}`);
    })