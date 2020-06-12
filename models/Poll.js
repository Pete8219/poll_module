const pollsCollection = require("../db")
  .db()
  .collection("polls")

let Poll = function(data) {
  console.log(data)
  this.data = data
}

Poll.prototype.create = function() {
  return new Promise((resolve, reject) => {
    pollsCollection
      .insertOne(this.data)
      .then(() => resolve())
      .catch(() => reject("error"))
  })
}

module.exports = Poll
