var express = require("express");
var router = express.Router();
const { newsArticleModel } = require("../database/connection");
/* GET home page. */
router.get("/", function (req, res, next) {
  newsArticleModel.find({}).then((e, result) => {
    console.log(e);
    res.json(e);
  });
  // res.render("index", { title: "Express" });
});

module.exports = router;
