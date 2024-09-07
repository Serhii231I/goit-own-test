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


