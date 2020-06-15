const express = require("express")
const router = express.Router()
const PollsController = require("./controllers/PollsController")
const AnswersController = require("./controllers/AnswersController")

router.get("/", function(req, res) {
  res.render("index")
})

router.get("/admin", function(req, res) {
  res.render("admin/admin")
})

//маршруты связанны с создание и редактированием опросов

router.get("/admin/polls", function(req, res) {
  res.render("admin/polls")
})

router.get("/admin/polls-list", function(req, res) {
  res.render("admin/create-poll")
})

router.get("/create-poll", function(req, res) {
  res.render("admin/create-poll")
})
router.post("/create-poll", PollsController.create)

//работаем с компонентом Ответы
router.get("/admin/poll/answer", AnswersController.createAnswer)
router.post("/admin/create-answer", AnswersController.addAnswer)

module.exports = router
