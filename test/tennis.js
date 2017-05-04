var expect    = require("chai").expect;
var tm = require("../app/tennis");

describe("Tennis Game Test", function() {
  describe("Adds score to player A", function() {
    it("adds 15 to player A", function() {
      var scoreMay = new tm.TennisMatch();
      scoreMay.addScore("a");
      var currentScore   = scoreMay.getScore();
      expect(currentScore).to.equal("15-0");
    });
  });
});
