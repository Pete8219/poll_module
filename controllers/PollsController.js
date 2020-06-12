const Poll = require("../models/Poll")

exports.create = function(req, res) {
  let poll = new Poll(req.body)
  poll
    .create()
    .then(function() {
      res.render("admin/create-poll")
    })
    .catch(function() {
      res.send("Error")
    })
}
