//-------------- BREAK   ----------------

// Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end,
//  яке ділиться на 5 без остачі.

// Оголошена змінна start
// Оголошена змінна end
// Оголошена змінна number
// Якщо start це 6, а end це 17, то підсумкове значення змінної number дорівнює 10
// Якщо start це 17, а end це 25, то підсумкове значення змінної number дорівнює 20
// Якщо start це 2, а end це 11, то підсумкове значення змінної number дорівнює 5
// В коді є цикл for, в якому використовується break для можливості виходу з циклу до завершення всіх ітерацій

// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i < end; i++){
//   if(i%5===0){
//     number = i;
//     break;
//   }
// }
// console.log(number);

// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break
// Оголошена функція findNumber(start, end, divisor)
// Виклик findNumber(2, 6, 5) повертає 5
// Виклик findNumber(8, 17, 3) повертає 9
// Виклик findNumber(6, 9, 4) повертає 8
// Виклик findNumber(16, 35, 7) повертає 21
// Виклик findNumber() з випадковим набором чисел повертає правильний результат
// В циклі for не повинен використовуватися break для можливості виходу з циклу до завершення всіх ітерацій

// function findNumber(start, end, divisor) {
//   let a=0;
//   for(let i=start; i<=end; i++){
//     if(i%divisor===0){
//       a=i;
//       return a;
//     }
//   }
// } console.log(findNumber(2, 6, 5));


 
// --------------------Array-------------------------------------


// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.
//  Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array


// function getLastElementMeta(array) {
// console.log(array);

//     const number = array.length - 1;
// console.log(number);

//     const lastIndex = array.length - 1;
//     console.log(array[lastIndex]);
    
//    let newArray = [];
//     newArray[0] = number;
//     newArray[1] = array[lastIndex];
//     return newArray;
// }
// getLastElementMeta(["apple", "peach", "pear"]);
// console.log(getLastElementMeta(["apple", "peach", "pear"]));

// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини.
// Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.


// function getExtremeElements(array) {
// const firstElement = array[0];
//   const lastElement = array.length-1;
//   let newArray = [];
//   newArray[0] = firstElement;
//   newArray[1] = array[lastElement];
//   return newArray;

  
// }
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
 
// -----------------------------Метод join()----------------------------

// Функція getLength(array) очікує один параметр array - масив довільних значень.
// Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників,
//     і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//   const a = array.join("").length;
//   return a;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));


// ----------------------------Метод split()-----------------------------


// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
// const a = message.split(" ").length;
// console.log(a);
//   const b = pricePerWord*a;
//     return b;
//     console.log(b);
    
// }
// console.log(calculateEngravingPrice("Web-development is creative work", 40));


// ---------------------Метод slice()------------------------

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// -------------------------------Метод concat()-----------------------------

// Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив,
//     що складається з усіх елементів масивів oldClients і newClients.
//     Спочатку мають іти елементи з масива oldClients, а потім з newClients.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// --------------------------------Метод indexOf()---------------------------------

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
// const a = array.indexOf(value);
//     const b = array.slice(0, a +1);
//     const c = array.slice(0, 0);
    
//     console.log(a);
//     console.log(b);
    
//   if(a=>0){
//     return b;
//   }
//   else{
//     return c;
//   }
  
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));

// Виклик getSlice(["Mango", "Poly", "Ajax"], "Poly") повертає ["Mango", "Poly"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Ajax") повертає ["Mango", "Poly", "Ajax"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Mango") повертає ["Mango"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Jacob") повертає []
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Casey") повертає []

// ----------------------------------------Метод push()------------------------------
// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
//     щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//   let a =[];
//   for (let i = min; i <= max; i++) {
//     a.push(i);
    
//   }
//   return a;
// }
// console.log(createArrayOfNumbers(14, 17));


// -------------------------------Ітерація по масиву----------------------------

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
//  Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//     let total = 0;
//   for(let i = 0; i < order.length; i += 1){
      
//       console.log(order[i]);
//       total += order[i];
//     }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));



// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   let arr = [];
//   for(let i = start; i<=end; i++){
//     if(i%2===0){
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getEvenNumbers(2, 5));

// --------------------------------------Метод includes()-----------------------------------------
// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
// let a = storage;
//   let b = item.toLowerCase();
//   if(a.includes(b)){
//     return `${b} is available to order!`;
//   }
//     else{
//       return "Sorry! We are out of stock!";
//     }
  
// }
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

// function getCommonElements(array1, array2) {
//   let arr=[];
//     for (let i = 0; i < array1.length; i++){

//       console.log(`array1-${array1[i]}`);
//       console.log(`array2-${array2[i]}`);
      
        
//       if(array2.includes(array1[i])) {
//           arr.push(array1[i]);
//         }
//     }
//     return arr;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


// ----------------------------------------Цикл for...of------------------------------------

// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order.
// Використай цикл for...of для перебору масиву.

// function calculateTotalPrice(order) {
//   let total = 0;
//     for (const a of order) {
//       console.log(a);
//         total += a;
    
//   }
//   return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ----------------------------------------Псевдомасив arguments-----------------------------

// Функція createReversedArray() може приймати довільну кількість аргументів.
// Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку.
//     Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив[3, 2, 1].
//     Використовуй цикл або метод масиву toReversed(),
//     який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray() {
//   const array= Array.from(arguments);
//     return array.toReversed();
//     }
// }
// console.log(createReversedArray(12, 85, 37, 4));

// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//   const a = amount * taxRate;
//   return a;
// }
// console.log(calculateTax(100));

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.location = {
// country: "Jamaica",
// city: "Kingston",
// };
// apartment.area = 60;
// apartment.rooms = 3;
// console.log(apartment);

// const keys = [];
// const values = [];

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// for(const i in apartment){
//     console.log(i);
//     console.log(apartment[i]);
//     keys.push(i);
//     values.push(apartment[i])
  
// }
// console.log(keys);
//     console.log(values);

// --------------------------------Метод Object.keys()--------------------------------
// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів властивостей об'єкта apartment,
//  і додай в масив values всі значення його властивостей.
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//    values.push(apartment[key]);
// }
// console.log(values);
// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за
// допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей.
//  Функція має повернути кількість властивостей в об'єкті object.


// function countProps(object) {
//   const keys = Object.keys(object);
  
//   return Object.keys(object).length;


// }
 

// console.log(countProps({}));


// -----------------------------Метод Object.values()----------------------------

// Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень.
//  Використовуй методи Object.keys() і Object.values().

//  const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра.
// Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const sal = Object.values(salaries);
//   for (let value of sal) {
//     console.log(value);
    
//     totalSalary+=value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));


// --------------------------------------Масив об’єктів------------------------------------

// Масив colors містить колекцію кольорів.
// Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex,
//     а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for(const hexs of colors){
//     hexColors.push(hexs.hex);
// }
// for (const rgbs of colors) {
//     rgbColors.push(rgbs.rgb)
// }
// console.log(hexColors);
// console.log(rgbColors);

// ---------------------------------------Пошук об'єкта за значенням властивості-----------------------------------
// Функція getProductPrice(productName) приймає один параметр productName - назва продукту.
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям(властивість name) в масиві products
//  і повертала його ціну(властивість price).Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//     for (const item of products) {
//     //   console.log(item.name);
//     //   console.log(item.price);
      
//     if(item.name === productName){
//       return item.price;
      
//         }
//   }
// }

// console.log(getProductPrice("Engine"));

// --------------------------------------------Колекція значень властивості-------------------------------

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const a = [];
//   for(const item of products){
//         // console.log(name);
//     //   console.log(item);
      
//     //   console.log(item.price);
//     //   console.log(item.quantity);
//     if(propName === "name"){
//         a.push(item.name);
//     //   console.log(item.name);
//     }
//     else if(propName === "price"){
//       a.push(item.price);
//   }
//     else if(propName === "quantity"){
//       a.push(item.quantity);
// }
//     }
//     return a;
// }
// console.log(getAllPropValues("quantiasdty"));

// Функція calculateTotalPrice(productName) приймає один параметр productName - назва товару.
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає,
//     то функція повинна повертати рядок "Product <productName> not found!", де < productName > — це ім'я товару.

// function calculateTotalPrice(productName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     let sum;
//     for (const product of products) {
//         // console.log(product.name);
      
//         if (product.name === productName) {
//                 sum = product.price*product.quantity
//                 return `${productName} ${sum}`;
//             }
//     }
//     return `"Product ${productName} not found!"`
//     }

// console.log(calculateTotalPrice("dsg"));

// const atTheOldToad = {
//   potions : [],
//   getPotions(){
//     return "List of all available potions";
//     },
//     addPotion(potionName) {
//   return `Adding ${potionName}`;
// }
// }
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// // atTheOldToad.getPotions();
// // atTheOldToad.addPotion("Invisibility");
// // atTheOldToad.addPotion("Power potion") // повертає рядок "Adding Power potion";

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());

// function add(...num) {
//     let result = 0;
//     for (const number of num) {
//         result += number;
//     }
//     return result;
// }
// console.log(add(12, 4, 11, 48));

// function addOverNum(value, ...args ) {
//   let total = 0;
//   for(const number of args){
//     if(value<number){
//       total+=number;
      
//     }
// }
// return total;
// }
// console.log(addOverNum(15, 32, 6, 13, 19, 8));

// function getExtremeScores(scores) {
//   return `{best: ${Math.max(...scores)}, worst: ${Math.min(...scores)}}`;
// }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

// function getExtremeScores(scores) {
//   let a = Math.max(...scores);
//   let b = Math.min(...scores)
//   return `best: ${a}, worst: ${b}`;
// }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Ultracheese", deliverPizza));

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`)
// });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number){
//         totalPrice+=number;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {

//   const newArray = [];
//   numbers.forEach(function (number) {
//     if(number>value){
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }console.log(filterArray([1, 2, 3, 4, 5], 3));

// const calculateTotalPrice = (orderedItems) => {
    
//     let totalPrice = 0;
//     const a = (item) =>
//         totalPrice += item;
    
//     orderedItems.forEach(a);
//     return totalPrice;
// };
// console.log(calculateTotalPrice([164, 48, 291]));

// ------------------------------------------- Методи map і flatMap-----------------------------------
    // ----------------------------------------Чисті функції--------------------------------


// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент,
//     значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers,
//     а створювала, наповнювала і повертала новий масив з оновленими значеннями.
// function changeEven(numbers, value) {
//   const newArray = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//           newArray.push(numbers[i] + value)
//         }
//       else {
//           newArray.push(numbers[i]);
//         }
// }
// return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// -------------------------------------Метод map()------------------------

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// В масиві planets зберігаються назви планет.Доповни код таким чином, щоб у змінній planetsLengths вийшов масив,
//     що буде складатися з довжин назв кожної планети з масиву planets.Обов'язково використовуй метод map().
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];


// const planetsLengths = planets.map(planet=> planet.length);
// console.log(planetsLengths);

// -------------------------------------------Масив об'єктів----------------------------------

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг(властивість title) з масиву books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);


// -------------------------------------Метод flatMap()--------------------------------------------------------
    // Масив books містить колекцію об'єктів книг, кожен з яких містить властивість genres, значенням якої є масив жанрів. 
    // Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив жанрів усіх книг(властивість genres) з масиву books.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book=> book.genres);

// Доповни стрілочну функцію getUserEmails(users) таким чином,
//     щоб вона повертала масив поштових адрес користувачів(властивість email) з масиву об'єктів в параметрі users.

// const getUserEmails = (users) => {
//     const getEmails = users.map(user => user.email);
//     console.log(getEmails);
//     return getEmails;
// };
// console.log(getUserEmails([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]));
// ----------------------------------------FILTER()-----------------------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number %2===0);
// const oddNumbers = numbers.filter(number => number %2!=0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ------------------------------------------------Метод reduce()------------------------------------------

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем. 
// У змінній players зберігається об'єкт, де ключ це ім'я гравця, а значення - його ігровий час.
// У змінній playtimes зберігається масив значень об'єкта players, тобто масив ігрового часу усіх гравців. 
// Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.

// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, number)=> {
//   return previousValue + number;
// }, 0);


// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
//     і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame.
//     Розрахувати час для кожного з гравців можна, розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, pleyer)=>{
//  return acc += pleyer.playtime / pleyer.gamesPlayed
   
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const calculateTotalBalance = (users) => {
//     const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
//     return totalBalance;
// }
//     console.log(calculateTotalBalance([
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             eyeColor: "blue",
//             friends: ["Sharron Pace"],
//             isActive: false,
//             balance: 2811,
//             gender: "male"
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             gender: "female"
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             gender: "male"
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             gender: "female"
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             isActive: true,
//             balance: 3951,
//             gender: "male"
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             isActive: false,
//             balance: 1498,
//             gender: "male"
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             gender: "female"
//         }
//     ]));


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a,b)=>a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = books.toSorted((a,b)=>b.author.localeCompare(a.author));

// const sortedByAscendingRating = books.toSorted((a,b)=>a.rating - b.rating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter((rate)=>rate.rating>MIN_BOOK_RATING).map((authors)=>authors.author).toSorted((a,b)=>a.rating - b.rating);
// console.log(names);

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
    
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked"));

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.call(mango, "Aloha"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Welcome"); // "Aloha, Poly, your room is 191!"


// class Car {
//   constructor(brand, model, price){
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// const a = new Car();
// console.log(new Car("Nissan","Murano", 31700));

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }
// const a = new Car({}
// //   brand : "Audi",
// //     model : "Q3",
// //     price : 36000
// );
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));

// class Car {
//   #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand  = newBrand;
//   }
// }
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));

// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {

//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     console.log(newPrice);
      
      
//     }
    
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #maxPrice = 50000;
// static checkPrice(price){
//   if(price < Car.#maxPrice){
//     return "Success! Price is within acceptable limits";
//   }
//   return "Error! Price exceeds the maximum";
// }
//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor(params){
//     super(params.email);
//     this.access = params.access
    
    
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
    
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//     this.blacklistedEmails = params.blacklistedEmails;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true;
//     }
//     return false;
//   }

// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
//   blacklistedEmails : [],
// });
// console.log(mango);


// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

