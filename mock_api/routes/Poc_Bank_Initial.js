var express = require("express");
var router = express.Router();

/* post users listing. */
router.post("/", function (req, res, next) {
  res.header('Access-Control-Allow-Origin','http://localhost:3000');
  res.send({ cols: 1, rows: 1, y: 0, x: 0, cardName: "graph" });
});

module.exports = router;
