// *****************************************************************************
//                           Коллекции в JavaScript
// *****************************************************************************

// ******************************       Псевдомассивы в JavaScript       ********************************************
// 1. Даны абзацы:
// let elems = document.querySelectorAll(".text");
// Проверьте, будут ли работать методы массивов для переменной elems.

let elems1 = document.querySelectorAll(".text");

for (let elem of elems1) {
  console.log(elem.textContent);
}
console.log(Array.isArray(elems1));

// ************************      Преобразование псевдомассивов в JavaScript          *****************************

// 2. Преобразуйте псевдомассив в массив тремя разными способами
let elems2 = document.querySelectorAll(".text");

// A. деструктуризация
let arr2A = [...elems2];
console.log(Array.isArray(arr2A));

// B. создание нового массива
let arr2B = [];
for (let elem2 of elems2) {
  arr2B.push(elem2);
}
console.log(Array.isArray(arr2B));

// C. метод для псевдомассивов
let arr2C = Array.from(elems2);
console.log(Array.isArray(arr2C));

// ************************      Разница между NodeList и HTMLCollection        ***********************************

// 3. Проверьте, какой тип коллекции будет в свойстве childNodes и в свойстве children.
let box3A = document.querySelector(".box");

// *************************      Коллекции Map в JavaScript                 ****************************************

// 4. Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы,
// а значениями - какие - нибудь строки.

let arr4A = [1, 2, 3];
let arr4B = [4, 5, 6];
let arr4C = [7, 8, 9];

let map4 = new Map();

map4.set(arr4A, "value1");
map4.set(arr4B, "value2");
map4.set(arr4C, "value3");

console.log(map4.get(arr4A));
console.log(map4);

// 5. Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map,
// сделайте ключами коллекции объекты, а значениями - соответствующие массивы.

let obj5A = { 1: "a", 2: "b", 3: "c" };
let obj5B = { 1: "a", 2: "b", 3: "c" };
let obj5C = { 1: "a", 2: "b", 3: "c" };

let arr5A = [1, 2, 3];
let arr5B = [4, 5, 6];
let arr5C = [7, 8, 9];

let map5 = new Map();

map5.set(obj5A, arr5A);
map5.set(obj5B, arr5B);
map5.set(obj5C, arr5B);

console.log(map5.get(obj5A));
console.log(map5);
