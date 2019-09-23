var express = require('express');
var dbClient = require("../redis-db/db-utility");
var router = express.Router();

/* add data if valid. */
router.post('/add', function (req, res, next) {
  var saveService = require("../service/data-save-service");
  saveService(req, res, next);
});


/* return all the saved string pairs. */
router.get('/list', function (req, res, next) {
  var listService = require("../service/data-list-service");
  listService(req, res, next);
});

module.exports = router;
