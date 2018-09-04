const request=require('request');

var geocodeAddress=function(address,callback){
  var e_address=encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${e_address}`,
    json: true
  },(error,response,body)=>{
    //console.log(JSON.stringify(body,undefined,2));
    //console.log(JSON.stringify(error,undefined,2));
    if (error) {
      //console.log(error);
      callback('unable to connect');
    }else if(body.status==='ZERO_RESULTS'){
      callback('unable to fetch that address');
    }else if(body.status==='OK'){
      callback(undefined,{
        Address:body.results[0].formatted_address,
        Latitude:body.results[0].geometry.location.lat,
        Longitude:body.results[0].geometry.location.lng
      });
  }
  });

};

module.exports.geocodeAddress=geocodeAddress;
