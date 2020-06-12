const Poll = require("../models/Poll")

exports.create = function(req, res) {
  let poll = new Poll(req.body)
  poll.create()

  res.send("Poll successfully created")
}
