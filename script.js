function loadPage(page) {
  const content = document.getElementById("content");

  switch (page) {
    case 'home':
      content.innerHTML = `
        <h2>Добро пожаловать!</h2>
        <p>Это главная страница лабораторной работы №4.</p>
      `;
      break;

    case 'table':
      content.innerHTML = `
        <h2>Таблица 5x8</h2>
        <table border="1">
          ${[...Array(5)].map(() =>
            `<tr>${[...Array(8)].map(() => `<td>Ячейка</td>`).join('')}</tr>`
          ).join('')}
        </table>
      `;
      break;

    case 'signup':
      content.innerHTML = `
        <h2>Регистрация</h2>
        <form id="signupForm" onsubmit="return validateForm()">
          <input type="text" placeholder="Никнейм" id="nick"><br>
          <input type="email" placeholder="Email" id="email"><br>
          <input type="password" placeholder="Пароль" id="pass"><br>
          <textarea placeholder="Описание"></textarea><br>
          <select><option>Вариант 1</option><option>Вариант 2</option></select><br>
          <button type="submit">Зарегистрироваться</button>
        </form>
        <p id="formMsg"></p>
      `;
      break;

    case 'signin':
      content.innerHTML = `
        <h2>Вход</h2>
        <form>
          <input type="text" placeholder="Логин"><br>
          <input type="password" placeholder="Пароль"><br>
          <button type="submit">Войти</button>
        </form>
      `;
      break;

    case 'about':
      content.innerHTML = `
        <h2>О нас</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec est at libero pulvinar dictum. 
          Sed id purus at libero dictum tincidunt. Integer sit amet turpis eu velit dictum dignissim. Morbi 
          suscipit nulla eget augue vulputate, sit amet rhoncus nulla dignissim.
        </p>
      `;
      break;

    default:
      content.innerHTML = `<p>Страница не найдена.</p>`;
  }
}

function validateForm() {
  const nick = document.getElementById("nick").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const msg = document.getElementById("formMsg");

  if (!nick || !email || !pass) {
    msg.textContent = "Пожалуйста, заполните все поля.";
    msg.style.color = "red";
    return false;
  }

  if (!email.includes("@")) {
    msg.textContent = "Неверный email.";
    msg.style.color = "red";
    return false;
  }

  if (pass.length < 6) {
    msg.textContent = "Пароль должен быть не менее 6 символов.";
    msg.style.color = "red";
    return false;
  }

  msg.textContent = "Регистрация успешна!";
  msg.style.color = "green";
  return false; // не отправлять форму
}
