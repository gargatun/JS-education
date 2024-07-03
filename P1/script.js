"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const callButton = document.getElementById("callButton");
  const messageDiv = document.getElementById("message");

  // Слушатель для нашего пользовательского события "schoolBell"
  messageDiv.addEventListener("schoolBell", (event) => {
    messageDiv.textContent = `Пора идти на урок! Данные: ${event.detail}`;
  });

  // Обработчик клика на кнопке
  callButton.addEventListener("click", () => {
    // Создание пользовательского события
    const schoolBellEvent = new CustomEvent("schoolBell", {
      detail: "Всем ученикам идти в класс!",
    });

    // Диспетчеризация события на элементе messageDiv
    messageDiv.dispatchEvent(schoolBellEvent);
  });
});
