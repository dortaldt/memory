var express = require('express');
var router = express.Router();
// var index = require('../views/layout.ejs')

/* GET home page. */
router.get('/', function(req, res) {

//This is a working code snippet:
  // var scoreData = [{
  // "users":[
  //   {"userName" :"Dor", "userScore": "320"},
  //   {"userName": "Dudu", "userScore": "150"},
  //   {"userName": "Luna", "userScore": "120"}
  // ]}];

var scoreJson = require("../public/javascripts/score_data.json");

  // res.send('../views/layout.ejs',{user: "Great User",title:"homepage"});
  res.render('index', {scoreJson: scoreJson, title:"Dudu"});
  // res.render('index', {finalScore : "test" });
});

module.exports = router;




