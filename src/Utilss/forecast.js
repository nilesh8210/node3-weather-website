const Request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=8f2c1c8d48d8b30c296a74b83d590445&query='+latitude+','+longitude
    Request({url:url, json:true},(error, response)=>{

             if(error)
                 callback("There is a problem in network",undefined)
             else if(response.body.error)
                 callback("Unable to find location",undefined)
             else
             callback(undefined,"Current Temperature in "+response.body.location.name+" is "+response.body.current.temperature+" While it feels like the temperature is "+response.body.current.feelslike+" and current weather description is "+response.body.current.weather_descriptions)        
})
}

module.exports=forecast