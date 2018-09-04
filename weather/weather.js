var request=require('request');

var getWeather=function(lat,lng,callback){
  request({
    url:`https://api.darksky.net/forecast/d4147df364ef53beaba7596373e874fd/${lat},${lng}`,
    json:true
  },function(error,response,body){
    if(!error && response.statusCode===200){
      callback(undefined,{
        temperature:body.currently.temperature,
        apparentTemperature:body.currently.apparentTemperature
      });
    }
    else{
      callback('unable to fetch weather');
    }
  });

};

module.exports.getWeather=getWeather;
