const pollsCollection = require("../db")
  .db()
  .collection("polls")

let Poll = function(data) {
  console.log(data)
  this.data = data
}

Poll.prototype.create = function(req, res) {
  pollsCollection.insertOne(this.data)
}

module.exports = Poll
