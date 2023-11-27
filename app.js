// question 1

//  for (let i = 0; i < 5; i++){
//      document.write('Hello to the World of Loops <br>')
//  }

//question 2

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

//question 3

// const number = +prompt('Enter any number to write its multiplication table:')
// const length = +prompt('Enter the lenght of multiplication table:')

// if (!isNaN(number) && !isNaN(length)){
//     document.write(`<h2>Multiplication Table of ${[number]} </h2>`)
//     document.write('<ul>')
//     for (let i = 1; i <= length; i++){
//         const result = number * i;
//         document.write(`<li>${[number]} x ${[i]} = ${[result]} </li>`)
//     }
//     document.write('</ul>')
// } else {
//     document.write(`<h2>Please enter a valid input number</h2>`)
// }

//question 4

// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (let i = 0; i < A.length; i++){
//     console.log(A[i])
// }

//question 5

// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

//question 7

// document.write(`<h2>Counting: </h2>`)
// for (i = 1; i <= 15; i++){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Reverse Counting: </h2>')
// for (let i = 10; i >= 1; i--){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Even: </h2>')
// for (let i = 0; i <= 20; i += 2){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Odd: </h2>')
// for (let i = 1; i <= 19; i += 2){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Series: </h2>')
// for (let i = 2; i <= 20; i += 2){
//     document.write(`${[i]}k, `)
// }

//question 9

// let A = [24, 53, 78, 91, 12]
// let largestNum = A[0]

// for (let i = 1; i < A.length; i++){
//     if (A[i] > largestNum){
//         largestNum = A[i]
//     }
// }
// console.log(`The Largest number in the Array is ${[largestNum]}`);

//question 10

// let A = [24, 53, 78, 91, 12]
// let smallestNum = A[0]

// for (let i = 1; i < A.length; i++){
//     if (A[i] < smallestNum){
//         smallestNum = A[i]
//     }
// }
// console.log(`The smallest number in the Array is ${[smallestNum]}`);

//question 11

// let A = [24, 53, 78, 91, 12]

// let largeNum = A[0]
// let SmallNum = A[0]

// for (let i = 1; i < A.length; i++){
//     if (A[i] > largeNum){
//         largeNum = A[i]
//     } else if (A[i] < SmallNum){
//         SmallNum = A[i]
//     }
// }
// console.log(`The Array is ${[A]}`)
// console.log("The largest number in the array is: " + largeNum)
// console.log("The smallest number in the array is: " + SmallNum)

//question 12

// for (let i = 5; i <= 100; i += 5){
//     document.write(`${[i]}, `)
// }

//question 13

//  let students = ["Ali", "Abdullah", "Talha", "Ahsan"]
//  let scores = [58, 73, 89, 90]

//  let table = "<table border='1'><tr><th>Student Name</th><th>Score</th></tr>"

//  for ( i = 0; i < students.length; i++){
//      table += `<tr><td> ${[students[i]]} </td><td> ${[scores[i]]}</td> </tr>`
//  }
//  table += '</table>'
//  document.write(table)

//question 14

// Given array
//  var scores = [12, 45, 3, 22, 34, 50];

//  // Ask the user for the stop value
//  var stopValue = parseInt(prompt("Enter the stop value:"));

//  // Check if the input is a valid number
//  if (!isNaN(stopValue)) {
//      // Iterate through the array and print numbers until the stop value is reached
//      var output = [];
//      for (var i = 0; i < scores.length; i++) {
//         if (scores[i] <= stopValue) {
//             output.push(scores[i]);
//    } else {
//             break;
//         }
//    }

//    // Print the output
//     console.log(output);
//  } else {
//      // Display an error message if the input is not a valid number
//      console.log("Invalid input. Please enter a valid number.");
//  }

//question 15

//  // Given 2D array
//  let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//   // Using nested for loops to print each element on a new line
//  for (let i = 0; i < A.length; i++) {
//      for (let j = 0; j < A[i].length; j++) {
//          console.log(A[i][j]);
//      }
//  }

//question 16

// Ask the user for input
//  let num = parseFloat(prompt("Enter a number:"));

//  // Check if the input is a valid number
//  if (!isNaN(num)) {
//    //   Repeat and print the value of num while num is positive
//      while (num > 0) {
//          console.log(num);
//          num -= 0.5;
//      }
//  } else {
//     //  Display an error message if the input is not a valid number
//      console.log("Invalid input. Please enter a valid number.");
//  }

//question 17

// Using a for loop to iterate from 0 to 20
//  for (let i = 0; i <= 20; i++) {
//     //  Checking if the current number is even or odd
//      if (i % 2 === 0) {
//          console.log(i + " is even");
//      } else {
//          console.log(i + " is odd");
//      }
//  }

//question 18

// Initialize the product variable with 1
//  let product = 1;

//  // Iterate from 1 to 7 and multiply odd numbers to the product
//  for (let i = 1; i <= 7; i++) {
//      if (i % 2 !== 0) {
//          product *= i;
//      }
//  }

//   // Output the product of odd integers
//  console.log("Product of odd integers from 1 to 7: " + product);

//question 19

// // Ask the user for the initial number of stars
//  let initialStars = parseInt(prompt("Enter the initial number of stars:"));

//  // Check if the input is a valid number
//  if (!isNaN(initialStars) && initialStars > 0) {
//     //  Loop to print lines of stars with decreasing count
//      for (let i = initialStars; i > 0; i--) {
//         let line = '';
//          // Append stars to the line
//          for (let j = 0; j < i; j++) {
//              line += '*';
//          }
//         // Print the line of stars
//          console.log(line);
//      }
//  } else {
//      // Display an error message if the input is not a valid number
//      console.log("Invalid input. Please enter a valid positive number.");
//  }

// question 20

// // Ask the user for the number of lines
// let numLines = parseInt(prompt("Enter the number of lines for pattern a:"));

// Create and display pattern a
// for (let i = 0; i < numLines; i++) {
//     let line = '';
//     for (let j = 0; j < 5; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
//     console.log(numLines);
// }
// document.write('<br>');

// Create and display pattern b
// for (let i = 1; i <= numLines; i++) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }
// document.write('<br>');

// Create and display pattern c
// for (let i = numLines; i > 0; i--) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }

// usama
// Create and display pattern c
// for (let i = numLines; i > 0; i--) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }

// 9 11 23

// question 20

// // Ask the user for the number of lines
// let numLines = parseInt(prompt("Enter the number of lines for pattern a:"));

// Create and display pattern a
// for (let i = 0; i < numLines; i++) {
//     let line = '';
//     for (let j = 0; j < 5; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
//     console.log(numLines);
// }
// document.write('<>');

// Create and display pattern b
// for (let i = 1; i <= numLines; i++) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }
// document.write('<br>');

// Create and display pattern c
// for (let i = numLines; i > 0; i--) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }

// PRACTICE ;

// Initialize the product variable with 1
//  let product = 1;

//  // Iterate from 1 to 7 and multiply odd numbers to the product
//  for (let i = 1; i <= 7; i++) {
//      if (i % 2 !== 0) {
//          product *= i;
//      }
//  }

//   // Output the product of odd integers
//  console.log("Product of odd integers from 1 to 7: " + product);

// ANOTHER QUESTION ;

//  let students = ["Ali", "Abdullah", "Talha", "Ahsan"]
//  let scores = [58, 73, 89, 90]

//  let table = "<table border='1'><tr><th>Student Name</th><th>Score</th></tr>"

//  for ( i = 0; i < students.length; i++){
//      table += `<tr><td> ${[students[i]]} </td><td> ${[scores[i]]}</td> </tr>`
//  }
//  table += '</table>'
//  document.write(table)

// ANOTHER QUESTION ;

// document.write(`<h2>Counting: </h2>`)
// for (i = 1; i <= 15; i++){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Reverse Counting: </h2>')
// for (let i = 10; i >= 1; i--){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Even: </h2>')
// for (let i = 0; i <= 20; i += 2){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Odd: </h2>')
// for (let i = 1; i <= 19; i += 2){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Series: </h2>')
// for (let i = 2; i <= 20; i += 2){
//     document.write(`${[i]}k, `)
// }

// ANOTHER ONE ;

// Given array
//  var scores = [12, 45, 3, 22, 34, 50];

//  // Ask the user for the stop value
//  var stopValue = parseInt(prompt("Enter the stop value:"));

//  // Check if the input is a valid number
//  if (!isNaN(stopValue)) {
//      // Iterate through the array and print numbers until the stop value is reached
//      var output = [];
//      for (var i = 0; i < scores.length; i++) {
//         if (scores[i] <= stopValue) {
//             output.push(scores[i]);
//    } else {
//             break;
//         }
//    }

//    // Print the output
//     console.log(output);
//  } else {
//      // Display an error message if the input is not a valid number
//      console.log("Invalid input. Please enter a valid number.");
//  }

// ANOTHER QUES ;

// let A = [24, 53, 78, 91, 12]
// let smallestNum = A[0]

// for (let i = 1; i < A.length; i++){
//     if (A[i] < smallestNum){
//         smallestNum = A[i]
//     }
// }
// console.log(`The smallest number in the Array is ${[smallestNum]}`);

// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (let i = 0; i < A.length; i++){
//     console.log(A[i])
// }

// ANOTHER ONE ;

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// const user = {
//     name: 'shahmeer',
//     age: '18',
//     email: 'shahmeerrizwan921@gmail.com',
//     girlfriend:'mere pe tou hai ni'
// }

// console.log(user.girlfriend);

// let complexObject = {
//     person: {
//         name: {
//             first: "John",
//             last: "Doe",
//         },
//         age: 30,
//         address: {
//             street: {
//                 number: 123,
//                 name: "Nested Street",
//             },
//             city: "Nested City",
//             country: "Nested Country",
//         },
//     },
//     work: {
//         company: {
//             name: "TechCorp",
//             location: {
//                 city: "TechCity",
//                 country: "TechCountry",
//             },
//         },
//         position: "Senior Developer",
//         projects: [
//             {
//                 name: "Project A",
//                 technologies: ["JavaScript", "React", "Node.js"],
//             },
//             {
//                 name: "Project B",
//                 technologies: ["Python", "Django", ["new" , ["PostgreSQL"]]],
//             },
//         ],
//     },
//     hobbies: {
//         indoor: ["Reading", "Chess"],
//         outdoor: ["Hiking", "Cycling"],
//     },
// };

// console.log(complexObject.work.company.location.country);
// console.log(complexObject.work.projects[1].technologies[2][1][0]);

// Ask the user for input
//  let num = parseFloat(prompt("Enter a number:"));

//  // Check if the input is a valid number
//  if (!isNaN(num)) {
//    //   Repeat and print the value of num while num is positive
//      while (num > 0) {
//          console.log(num);
//          num -= 0.5;
//      }
//  } else {
//     //  Display an error message if the input is not a valid number
//      console.log("Invalid input. Please enter a valid number.");
//  }

// EVENTS ;

// FORM ASSIGNMENT ;

// let form = document.getElementById("form")
// let input = document.getElementById("inp")

// form.addEventListener("submit",function(event){
//     form.innerHTML = ('')
//     event.preventDefault();
//     console.log(input.value);
//     input.value= ""
// } )

// BULB ASSIGNMENT ;

// let image = document.getElementById("img");
// image.addEventListener ("mouseover",function(){
//     image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBcfLBk6DAj-4sdPMoPXPkZZ-_J15-LJT6w&usqp=CAU"

// })

// let img = document.getElementById("img");
// image.addEventListener ("mouseout",function(){
//     image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLTClnj-XEF3qqaXMDwbNM4RU40rBVn1lkQ&usqp=CAU"

// })

// ANOTHER ASSIGMNET ;


// HIDE/SHOW PARAGRAPH ;

// function hide() {
//   let btn = document.getElementById("btn");
//   let para = document.getElementById("para");
  
 

//   btn.addEventListener("click", function run() {
//       if (para.style.display != "none") {
//         console.log("if");
//       para.style.display = "none";
//       btn.innerHTML = 'SHOW'
      
//     } else {
//         console.log("else");
//       para.style.display = "block";
//       btn.innerHTML = "Hide"
//     }
    
//   });
// }

// hide();


// 25-11-2023 (ARRAYS);

// let marks_of_class_10 = [12,13,14,15,16,17]

// console.log(marks_of_class_10[1]);
// console.log(marks_of_class_10[2]);
// console.log(marks_of_class_10[3]);
// console.log(marks_of_class_10[4]);
// console.log(marks_of_class_10[5]);
// marks_of_class_10[2] = 69 // array change ;
// console.log(marks_of_class_10);



// ASSIGNMNENT ;


// let marks = [23, 2, 35, 24, "this is the marks of class 12 "];
// for(let i = 0; i < marks.length; i++){
//   console.log(marks[i]);
// }


// CREATE AN ARRAY STUDENT NAME WITH MARKS :

 
//  let studentNames = ['SHAHMEER', 'ABDULLAH', 'TALHA', 'ADNAN']; // Create an array with student names
//  let studentMarks = [85, 92, 78, 95];  // Create an array with student marks
//    for (let i = 0; i < studentNames.length; i++) {    // Display student information using a loop
//    let name = studentNames[i];
//    let marks = studentMarks[i];
//    console.log(' CONGRATULATIONS ' + name + ', YOU  GOT ' + marks , ' MARKS OUT OF 100 ' );
   
//    let main = document.getElementById('main');
//    main.innerHTML += ' CONGRATULATIONS ' + name +  ', YOU  GOT '  + marks + ' MARKS OUT OF 100 '+ '<br>';
//    }


// function


// rishta(20000)
// .then(function (res){
//     console.log(res);
// })
// .catch(function(err){
//     console.log(err);
// })




