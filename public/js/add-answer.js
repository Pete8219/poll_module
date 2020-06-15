document.addEventListener("DOMContentLoaded", function() {
  let button = document.getElementById("addAnswer")
  let answer = document.getElementById("answer")
  let answerField = document.querySelector(".answer-field")
  button.addEventListener("click", function(e) {
    e.preventDefault()
    answerField.insertAdjacentHTML(
      "beforeend",
      `
    <div class="form-group col-md-12">
    <div class="form-row answer-field">
      <div class="form-group col-md-8">
        <label>Ответ</label>
        <input class="form-control" id="answer" name="answer"/>
      </div>
      <div class="form-group col-md-2">
        <label for="inputWeight">Вес ответа</label>
        <input class="form-control" name="weight"/>
      </div>
    </div>
  </div>`
    )
  })
})
