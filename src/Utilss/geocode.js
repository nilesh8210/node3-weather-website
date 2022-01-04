const Request=require('request')

const geocode=(address,callback)=>{
    const URL='http://api.positionstack.com/v1/forward?access_key=930c57d31948dcc2d76ea882a1c45f7d&query='+encodeURIComponent(address);
    Request({url:URL,json:true},(error,response)=>{
        if(error)
            callback("unable to connect!",undefined);
        else
        {
           callback(undefined, {
            latitude:response.body.data[0].latitude,
            longitude:response.body.data[0].longitude})
        }
    
    })
}

module.exports=geocode;