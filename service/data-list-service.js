var {getCacheData,saveCacheData}=require("../redis-db/db-crud-service");
var getList = (req, res, next) => {
    getCacheData("save_data").then(data => {
        data = JSON.parse(data);
        res.send(data);

    }).catch(err => {
        res.send([]);
    });
}
module.exports = getList;