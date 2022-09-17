// *****************************************************************************************************************
//                                      Коллекции в JavaScript
// *****************************************************************************************************************

// ******************************       Псевдомассивы в JavaScript       ********************************************
// 1. Даны абзацы:
// let elems = document.querySelectorAll(".text");
// Проверьте, будут ли работать методы массивов для переменной elems.

let elems1 = document.querySelectorAll(".text");
for (let elem of elems1) {
  console.log(elem.textContent);
}
console.log(Array.isArray(elems1));

// ************************      Преобразование псевдомассивов в JavaScript          ********************************

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

console.log(box3A.childNodes);
console.log(box3A.children);

// *************************      Коллекции Map в JavaScript            ********************************************

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

// *************************      Отделение ключей и значений в коллекциях Map    *******************************

// 6. Пусть дана коллекция Map. Получите массив ее ключей и переберите их циклом for-of.

let map6 = new Map();
map6.set(1, "str1");
map6.set(2, "str2");
map6.set(3, "str3");

for (let key of map6.keys()) {
  console.log(key);
}

// 7. Пусть дана коллекция Map. Получите массив ее элементов и переберите их циклом for-of.

let map7 = new Map();
map7.set(1, "str1");
map7.set(2, "str2");
map7.set(3, "str3");

for (let value of map7.values()) {
  console.log(value);
}

// *************************          Применение коллекций Map             *****************************************

// 8. Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map,
// ключами в которой будут инпуты, а значением - их порядковый номер на странице.
// Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.

let inputs8All = document.querySelectorAll(".input8");
let map8 = new Map();

for (let i = 0; i < inputs8All.length; i++) {
  map8.set(inputs8All[i], i);

  inputs8All[i].addEventListener("focus", function () {
    this.value += i;
  });
}

// 9. Даны инпуты. В каждый инпут можно ввести число.
// Пусть по нажатию на Enter инпут запоминает введенное число.
// Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив
// всех введенных ранее в инпут чисел.

let inputs9All = document.querySelectorAll(".input9");
let map9 = new Map();
let valueCounter1 = 1;

for (let input of inputs9All) {
  input.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== "NumpadEnter") return;
    map9.set(valueCounter1, this.value);
    valueCounter1++;
    this.value = "";
  });
  input.addEventListener("blur", function () {
    console.log([...map9.values()]);
  });
}
