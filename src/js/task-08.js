/* 8 Задача : Напиши скрипт создания и очистки коллекции элементов. Пользователь
* вводит количество элементов в input и нажимает кнопку Создать, после чего
* рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов
* очищается.

* Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
* Функция создает столько div, сколько указано в amount и добавляет их в
* div#boxes.

* Каждый созданный div:

* Имеет случайный rgb цвет фона Размеры самого первого div - 30px на 30px Каждый
* следующий div после первого, должен быть шире и выше предыдущего на 10px Создай
* функцию destroyBoxes(), которая очищает div#boxes.
*/

const refs = {
  input: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

let arrayDivs = [];

refs.destroyBtn.addEventListener('click', destroyBoxes);
refs.renderBtn.addEventListener('click', renderNumberBoxes);

function createDivs(amount) {
  arrayDivs = [];
  refs.boxes.innerHTML = '';

  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    size += 10;

    const createDiv = document.createElement('div');
    createDiv.style.width = `${size}px`;
    createDiv.style.height = `${size}px`;
    createDiv.style.backgroundColor = `#${Math.random()
      .toString(16)
      .substr(-6)}`;
    arrayDivs.push(createDiv);
  }

  refs.boxes.append(...arrayDivs);
}

function destroyBoxes() {
  arrayDivs = [];
  refs.boxes.innerHTML = '';
  refs.input.value = '';
}

function renderNumberBoxes() {
  const value = Number(refs.input.value);

  createDivs(value);
}
