// *****************************************************************************************************************
//                                      Коллекции в JavaScript
// *****************************************************************************************************************

// ******************************       Псевдомассивы в JavaScript       ********************************************
// 1. Даны абзацы:
// let elems = document.querySelectorAll(".text");
// Проверьте, будут ли работать методы массивов для переменной elems.

let elems1 = document.querySelectorAll(".task__text1");
for (let elem of elems1) {
  console.log(elem.textContent);
}
console.log(Array.isArray(elems1));

// ************************      Преобразование псевдомассивов в JavaScript          ********************************

// 2. Преобразуйте псевдомассив в массив тремя разными способами

let elems2 = document.querySelectorAll(".task__text1");
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
let box3A = document.querySelector(".task__box");

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

let inputs8All = document.querySelectorAll(".task__input8");
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

let inputs9All = document.querySelectorAll(".task__input9");
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

// *************************           Коллекции Set              *****************************************

// 10. Дан массив с числами:
// let arr = [1, 2, 3, 1, 3, 4];
// С помощью этого массива создаейте коллекцию Set.

let set10 = new Set([1, 2, 3, 1, 3, 4]);
console.log(set10);

// 11. Создайте пустую коллекцию Set.С помощью метода add
// добавьте в нее элементы со значениями 1, 2 и 3.

let set11 = new Set();
set11.add(1);
set11.add(2);
set11.add(3);
console.log(set11);

// 12. Создайте коллекцию Set с начальными значениями 1, 2 и 3.
// Выведите на экран количество элементов в коллекции.

let set12 = new Set([1, 2, 3]);
console.log(set12.size);

// 13. Создайте коллекцию Set с начальными значениями 1, 2 и 3.
// Проверьте наличие в коллекции элемента со значением 3,
// а затем элемента со значением 4.

let set13 = new Set([1, 2, 3]);
console.log(set13.has(3));
console.log(set13.has(4));

// 14. Создайте коллекцию Set с какими-нибудь числами.
// Переберите эту коллекцию циклом и найдите сумму ее элементов.

let set14 = new Set([1, 2, 3, 4, 5]);
let res14 = 0;

for (let elem of set14) {
  res14 += elem;
}

console.log(res14);

// 15. Дана коллекция Set. Преобразуйте ее в массив двумя способами
let set15 = new Set([1, 2, 3]);

let arr15A = [...set15];
console.log(arr15A);

let arr15B = Array.from(set15);
console.log(arr15B);

// 16. Дан массив. Преобразуйте его в коллекцию.

let arr16 = [1, 2, 3];
let set16 = new Set(arr16);
console.log(set16);

// 17. Напишите функцию, которая параметром будет принимать массив
// и возвращать этот массив без дублей.

let arr17 = [1, 2, 2, 3, 3, 4, 3, 4];

function deleteDoubles(arr) {
  let set17 = new Set(arr);

  return [...set17];
}

console.log(deleteDoubles(arr17));

// 18. Даны абзацы и кнопка. Пользователь кликает на эти абзацы в произвольном порядке. ------- ?????????
// Сделайте так, чтобы по нажатию на кнопку в конец каждого абзаца,
// на который был совершен клик, был добавлен восклицательный знак.

let text18All = document.querySelectorAll(".task__text18");
let button18 = document.querySelector(".task__button19");
let set18 = new Set();
console.log(set18);

for (let text of text18All) {
  text.addEventListener("click", function () {
    set18.add(this);
  });
}
console.log(set18);

button18.addEventListener("click", function () {
  for (let elem of [...set18]) {
    // console.log(elem);
    elem.textContent += "!";
  }
  set18 = new Set();
});

// *************************     Преобразование JSON в структуру данных JavaScript     ***********************************

// 19. Дана строка в формате JSON, содержащая массив с числами:
// let json = '[1,2,3,4,5]';
// Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива.

let json19 = "[1,2,3,4,5]";
let arr19 = JSON.parse(json19);
let res19 = 0;

for (let elem of arr19) {
  res19 += elem;
}
console.log(res19);

// 20. Дана строка в формате JSON, содержащая объект с данными:
// Найдите сумму чисел из представленных данных
// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;

let json20 = `{
 	"data1": [1,2,3],
 	"data2": [4,5,6],
 	"data3": [7,8,9]
 }`;

let obj20 = JSON.parse(json20);
console.log(obj20);
let res20 = 0;

for (let key in obj20) {
  let subObj = obj20[key];

  for (let elem of subObj) {
    res20 += elem;
  }
}

console.log(res20);

// 21. Дана строка в формате JSON, содержащая имена юзеров:
// let json = '["user1","user2","user3","user4","user5"]';
// Выведите эти имена в виде списка ul.

let json21 = '["user1","user2","user3","user4","user5"]';
let arr21 = JSON.parse(json21);
let list21 = document.querySelector("#_list21");
console.log(arr21);

for (let elem of arr21) {
  let li = document.createElement("li");
  li.textContent = elem;
  li.classList.add("text");
  list21.append(li);
}

// 22. Дана строка в формате JSON, содержащая массив с данными работников:
// Выведите этих работников на экран в виде HTML таблицы.

let json22 = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;
let table22 = document.querySelector("#_table22");
let arr22 = JSON.parse(json22);

for (let elem of arr22) {
  let obj = elem;

  let tr = document.createElement("tr");
  tr.classList.add("table__row");
  table22.append(tr);

  for (let key in obj) {
    let td = document.createElement("td");
    td.textContent = obj[key];
    td.classList.add("table__column");
    tr.append(td);
  }
}

// 23. Дан следующий массив:
// let arr = ['user1', 'user2', 'user3', 'user4', 'user5'];
// Преобразуйте этот массив в формат JSON.

let arr23 = ["user1", "user2", "user3", "user4", "user5"];
let json23 = JSON.stringify(arr23);
console.log(json23);

// 24. Дан следующий HTML:
/* <ul>
	<li>city1</li>
	<li>city2</li>
	<li>city3</li>
	<li>city4</li>
</ul>
Получите список городов в формате JSON. */

let text24All = document.querySelectorAll(".task__text24");
let arr24 = [];

for (let text of text24All) {
  arr24.push(text.textContent);
}

let json24 = JSON.stringify(arr24);
console.log(json24);

// 25. Дан следующий JSON:
// let json = '["user1","user2","user3","user4","user5"]';
// Добавьте в конец строки еще одного юзера.

let json25 = '["user1","user2","user3","user4","user5"]';
let arr25 = JSON.parse(json25);
arr25.push("user6");
json25 = JSON.stringify(arr25);
console.log(json25);

// 26. Дан следующий JSON:
// let json = '["user1","user2","user3","user4","user5"]';
// Поменяйте имя второго юзера.

let json26 = '["user1","user2","user3","user4","user5"]';
let arr26 = JSON.parse(json26);
arr26[1] = "userX";

json26 = JSON.stringify(arr26);
console.log(json26);

/* 27. Дан следующий JSON:
Добавьте в эту строку еще одного работника. 
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`; */

let json27 = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

let arrOfUsers = JSON.parse(json27);
let newUser = {
  name: "user4",
  age: 30,
  salary: 4000,
};

arrOfUsers.push(newUser);
json27 = JSON.stringify(arrOfUsers);
console.log(json27);
