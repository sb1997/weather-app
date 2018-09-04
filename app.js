//const request=require('request');
const yargs=require('yargs');

const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather.js');

const argv=yargs
  .options({
    a:{
      demand:true,
      alias:'address',
      describe:'address to fetch weather',
      string:true
    }
  })
  .help()
  .alias('help','h')
  .argv;

//console.log(argv);
geocode.geocodeAddress(argv.address,function(errorMessage,results){
  if(errorMessage){
    console.log(errorMessage);
  }
  else{
    console.log(results.Address);
    weather.getWeather(results.Latitude,results.Longitude,function(errorMessage,weatherResults){
      if(errorMessage){
        console.log('unable to connect to forecast.io');
      }
      else{
        console.log(weatherResults.temperature);
        console.log(weatherResults.apparentTemperature);
      }
    });


  }
});
