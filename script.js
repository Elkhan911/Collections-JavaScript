// Коллекции в JavaScript

// Псевдомассивы в JavaScript

// 1. Даны абзацы:
// let elems = document.querySelectorAll(".text");
// Проверьте, будут ли работать методы массивов для переменной elems.

let elems1 = document.querySelectorAll(".text");

for (let elem of elems1) {
  console.log(elem.textContent);
}
console.log(Array.isArray(elems1));

// Преобразование псевдомассивов в JavaScript

// 2. Преобразуйте псевдомассив в массив тремя разными способами

let elems2 = document.querySelectorAll(".text");

// деструктуризация
let arr2A = [...elems2];
console.log(Array.isArray(arr2A));

// создание нового массива
let arr2B = [];
for (let elem2 of elems2) {
  arr2B.push(elem2);
}
console.log(Array.isArray(arr2B));

// метод для псевдомассивов
let arr2C = Array.from(elems2);
console.log(Array.isArray(arr2C));
