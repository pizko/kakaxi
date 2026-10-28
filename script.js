(function () {
  "use strict";

  var dialog = document.getElementById("win-dialog");
  var dialogText = document.getElementById("dialog-text");

  function showDialog(message) {
    if (!dialog || !dialogText) {
      return;
    }
    dialogText.textContent = message;
    dialog.hidden = false;
  }

  function hideDialog() {
    if (dialog) {
      dialog.hidden = true;
    }
  }

  function on(id, handler) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", handler);
    }
  }

  on("dialog-ok", function () {
    hideDialog();
  });

  on("btn-enter", function () {
    showDialog("Вход не выполнен.\nЛогин: vyacheslav\nПароль: modern1991\nСервер не отвечает с 1991 года.");
  });

  on("btn-back", function () {
    hideDialog();
    window.scrollTo(0, 0);
  });

  on("btn-email", function () {
    showDialog("Письмо для vyacheslav@geocities.com не ушло.\nМодем издаёт гудки и занят.");
  });

  on("envelope-btn", function () {
    showDialog("Письмо для vyacheslav@geocities.com не ушло.\nМодем издаёт гудки и занят.");
  });

  on("btn-fav", function () {
    showDialog("Нажмите Ctrl+D, чтобы добавить страницу в закладки.\nВ Netscape Navigator это тоже так делали.");
  });

  on("btn-start", function () {
    showDialog("Браузер больше не разрешает сделать эту страницу стартовой.\nПредставьте, что в 1991 году получилось.");
  });

  on("btn-guest", function () {
    showDialog("Сообщение не отправлено.\nГостевая книга закрыта на ключ с 1991 года.\nПишите Вячеславу лично.");
  });

  var clickButtons = document.querySelectorAll(".js-click");
  var c;
  for (c = 0; c < clickButtons.length; c++) {
    clickButtons[c].addEventListener("click", function () {
      showDialog("Вы нажали кнопку.\nЭто и есть современный UX.\nНичего не скачалось. Модем выдохнул.");
    });
  }

  on("link-women", function (e) {
    e.preventDefault();
    showDialog("Ошибка 404.\nАдаптив находится в разработке с 1991 года.");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      hideDialog();
    }
  });

  var titles = [
    "ВЯЧЕСЛАВ ★ СОВРЕМЕННЫЕ САЙТЫ",
    "!!! UX 1991 !!!",
    "ДИЗАЙН БУДУЩЕГО ОБРАЗЦА 1991"
  ];
  var titleIndex = 0;
  window.setInterval(function () {
    titleIndex = (titleIndex + 1) % titles.length;
    document.title = titles[titleIndex];
  }, 900);

  var starColors = ["#ffff00", "#ff0000", "#00ffff", "#00ff00", "#ff00ff"];
  var lastStar = 0;
  document.addEventListener("mousemove", function (e) {
    var now = Date.now();
    if (now - lastStar < 55) {
      return;
    }
    lastStar = now;
    var star = document.createElement("span");
    star.className = "cursor-star";
    star.textContent = "★";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";
    star.style.color = starColors[(now >>> 2) % starColors.length];
    document.body.appendChild(star);
    window.setTimeout(function () {
      if (star.parentNode) {
        star.parentNode.removeChild(star);
      }
    }, 450);
  });
})();
