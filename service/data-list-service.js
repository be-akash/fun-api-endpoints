var {getCacheData,saveCacheData}=require("../redis-db/db-crud-service");
//Return all the list of pair strings
var getList = (req, res, next) => {
    getCacheData("save_data").then(data => {
        data = JSON.parse(data);
        res.send(data);

    }).catch(err => {
        res.send([]);
    });
}
module.exports = getList;