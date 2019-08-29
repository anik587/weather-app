const yargs = require('yargs');
const {getLocation}  = require('./getPosition.js');
const { getWeather } = require('./getWeather.js');


yargs.command({
    command: 'address',
    describe: 'Provide an address',
    builder: {
        city: {
            describe: 'Address Required',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        getWeatherData(argv);
    }

});


const getWeatherData = (argv)=>{
    let latitude = '';
    let longitude = '';
    let url = '';
    getLocation(argv.address, (error, data)=>{
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


yargs.parse();