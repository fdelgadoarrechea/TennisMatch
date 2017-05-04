class TennisMatch {
  constructor() {
    this.a = 0;
    this.b = 0;
  }

  addScore(player) {

    this[player] += 15;

  }

  getScore() {

    return this.a+"-"+this.b;

  }
}

module.exports.TennisMatch = TennisMatch;
