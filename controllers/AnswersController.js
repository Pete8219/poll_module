const Answer = require("../models/Answer")

exports.createAnswer = function(req, res) {
  res.render("admin/answer")
}

exports.addAnswer = function(req, res) {
  let answer = new Answer(req.body)

  console.log(answer)
}
