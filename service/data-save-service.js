var {getCacheData,saveCacheData}=require("../redis-db/db-crud-service");
var save=(req,res,next)=>{
    var strA=req.param("strA");
    var strB=req.param("strB");

    if(dataValidation(strA,strB)){
        var obj={strA,strB}
        getCacheData("save_data").then(data=>{
            data=JSON.parse(data);
            data.push(obj);
            saveCacheData("save_data",JSON.stringify(data),60*60*24);
        }).catch(err=>{
            var data=[];
            data.push(obj);
            saveCacheData("save_data",JSON.stringify(data),60*60*24);
        });
        res.send({result:true});
    }
    //
    else if ((dataValidation(strA,strB)==false){
        
        res.send({result:false});
    }
    else
    {
        res.status(500);
    }
    
    
}

//complexity O(N)
var dataValidation= (strA,strB="")=>{
    var i=0,j=0;
    for(;i<strB.length && j<strA.length;j++){
        if(strB[i] === strA[j] ){
            i++;
        }
    }
    if(i===strB.length){
        return true;
    }
    return false;
}
module.exports=save;