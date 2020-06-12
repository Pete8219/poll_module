const dotenv = require("dotenv")
dotenv.config()
const mongodb = require("mongodb")

mongodb.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
  console.log("you are connected")
  module.exports = client
  const app = require("./app")
  app.listen(process.env.PORT)
})
