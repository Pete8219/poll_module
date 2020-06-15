const express = require("express")
const path = require("path")

const router = require("./router")

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", router)
app.use(express.static("views"))
app.use(express.static(path.join(__dirname, "public")))

app.set("views", "./views/")

app.set("view engine", "ejs")

module.exports = app
