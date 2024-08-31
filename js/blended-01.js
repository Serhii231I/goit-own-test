// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі.

// function checkSeason(number) {
//   switch (number) {
//     case 1:
//       return "Winter";
//     case 2:
//       return "Spring";
//     case 3:
//       return "Summer";
//     case 4:
//       return "Autumn"
//     default:
//       return "Something going wrong"
//   }
  
// }


// console.log(checkSeason(3));



// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10


// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const modifiedHours = String(hours).padStart(2, 0);
//   const minutes = totalMinutes % 60;
//   const modifiedMinutes = String(minutes).padStart(2, 0)
// console.log(`${modifiedHours}:${modifiedMinutes} `);

// }
// formatTime(69);


//За допомогою циклу for додайте всі парні числа від min до max

// function calculateEvenNumber(min, max) {
//   let sum = 0;
//   for (let i = min; i < max; i++){
//     if (i % 2 === 0) {
//       sum += i; 
//     }
//   }
//   return sum;
// }
// console.log(calculateEvenNumber(1, 50));