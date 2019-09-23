var client = require('../redis-db/db-utility');
var saveCacheData=function(key,str_value,time){
    client.setex(key, time?time:10*60, str_value);
    
}

var getCacheData=function(key){
    var promise=new Promise((res,rej)=>{
        client.get(key, (err, result) => {
            if (result) {
                res(result);
            }else{
                rej(undefined);
            }
        });
    });
    return promise;
}

module.exports={getCacheData,saveCacheData};