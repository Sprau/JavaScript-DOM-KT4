const slider1 = document.querySelector('.slider1'); // Получаем первый ползунок из HTML-разметки
const slider2 = document.querySelector('.slider2'); // Получаем второй ползунок из HTML-разметки

const counter1 = document.querySelector('.counter1'); // Получаем элемент для отображения значения первого ползунка
const counter2 = document.querySelector('.counter2'); // Получаем элемент для отображения значения второго ползунка

// Обработчик события изменения первого ползунка
slider1.addEventListener('input', () => {
counter1.textContent = slider1.value; // Обновляем значение элемента для отображения значения первого ползунка
});

// Обработчик события изменения второго ползунка
slider2.addEventListener('input', () => {
counter2.textContent = slider2.value; // Обновляем значение элемента для отображения значения второго ползунка
});