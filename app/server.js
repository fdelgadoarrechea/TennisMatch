var express = require("express");
var app = express();
var tm = require("./tennis");

app.get("/addScore", function(req, res) {
  var player = req.query.player;

  var scoreMay = new tm.TennisMatch();
  scoreMay.addScore(player);

  var score = scoreMay.getScore();

  res.send(score);
});

app.listen(3003);
