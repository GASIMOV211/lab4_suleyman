document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const alertBox = document.getElementById("thanksAlert");

  if (name && message) {
    alertBox.textContent = `Спасибо, ${name}, за ваш отзыв!`;
    alertBox.classList.remove("d-none");
    this.reset();
  } else {
    alertBox.textContent = "Пожалуйста, заполните все поля.";
    alertBox.classList.remove("d-none");
  }
});
