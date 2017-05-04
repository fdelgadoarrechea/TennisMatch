var expect  = require("chai").expect;
var request = require("request");

describe("Tennis Game Test API", function() {

  describe("Adds score to player A", function() {
    var url = "http://localhost:3003/addScore?player=a";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns score with 15 player A", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("15-0");
        done();
      });
    });
  });

});
