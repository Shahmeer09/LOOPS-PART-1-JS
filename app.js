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














// FUNCTIONS PRACTICE :


// const hello = ()=>{
//   console.log("hello dude i am fine");
// }
// hello ()


// // EXAMPLE ;


// let a = 1;
// let b = 2;
// let c = 3;
// function oneplus (a,b){
//   return 1 + (a / c)
// }
// console.log("sum of a and b is  ", oneplus(a, b));
// console.log("sum of a and b is  ", oneplus(a, b));
// console.log("sum of a and b is  ", oneplus(a, b));

// // EXAMPLE ;

// let marks = { 
//   shahmeer:90,
//   abdullah:87,
//   talha:85,
//   adnan:76
// }
// for(let i=0;i<marks.lenght;i++){
//   console.log("The marks of " +(marks)[i]+ 'are ' + marks[Object.keys(marks)[i]]);
// }

// console.log(marks);


// // EXAMPLE ;

// function sayHello() {
//   console.log("Hello, world!");
// }

// sayHello()


// // EXAMPLE ;

// function cube(x) {
//   return x + x;
// }

// let result = cube(6); 
// console.log(result);

// // EXAMPLE ;

// let sayHelloo = () => {
//   console.log("Hello, world!");
// }

// sayHelloo ();

// // EXAMPLE ;

// function cookMaggi(maggi){
//   console.log("your maggi will be ready in " + maggi  + "minutes" );
// }
// cookMaggi(2);

// EXAMPLE ;


// let a = 12;
// let b =  12;
// sum(a + b);

// let c = 10;
// let d = 10;
// sum( c + d);

// let e = 10;
// let f = 30;
// sum(e + f);


// function sum(a, b){
// let sum = a + b;
// console.log("The Total Result is " , a);

// }






// NESTED FUNCTION ;


// function  addSquares(a,b){
//   const sa = square(a);
//   const sb = square(b);
  
//   function square(num) {
//     return num *  num;
//   }
//   return sa + sb;
// }
// console.log(addSquares(90,90));




// ASSIGMNETS ;


 //  QUESTION NO 1 : 

//  function sayHello() {
//    console.log("Hello, world!")};

// sayHello();


// QUESTION NO 2 :


// let currentDate = new Date();
// console.log(currentDate);


// QUESTION NO 3 :


// function greetUser(firstName,secondName,lastName) {
//   let fullName = `${firstName} ${secondName} ${lastName}`;
//   return `ASSALAM O ALAIKUM , ${fullName}`;
// }


// const greeting = greetUser("MUHAMMAD", "SHAHMEER", "RIZWAN");
// console.log(greeting);

// QUESTION NO 4 :

// let a = prompt("please enter a first number ");
// let b = prompt("please enter a second number ");

// let c = parseInt(a) + parseInt(b);
// console.log("the sum of " +a+ " and " +b+ " is "+ c );



// QUESTION NO 5 :

// NHI A RAHA 

// QUESTION NO 6 :

// let a = prompt("please enter a number ");
// function squareNumber(number) {
//     return number * number;
// }

// let squaredResult = squareNumber(a);

// console.log(`The square of ${a} is ${squaredResult}`);



// QUESTION NO 7 :

// let a = prompt("please enter a factorial number  ");
// function factorial(number) {
//   if (number < 0) {
//    return"is less than 0 please enter the number who is greater than 0"
//   } 
//    else {
//       let result = 1;
//       for (let i = 2; i <= number; i++) {
//           result *= i;
//       }
//       return result;
//   }
// }

// let inputNumber = a;
// let result = factorial(a);

// console.log(`The factorial of ${a} is ${result}`);


// const numbers = [33, 2, 8]; 
// numbers.sort();
// console.log(numbers[1])



// console.log(typeof NaN);

// console.log(false == '0');

// // QUIZ :


// !!~1 // TRUE


// (function () {})()  // undefined

// null == undefined

// ~~(-5.5)   // -5

// // [1,2,3,4][1,2]  // 3



// [[[[[[[22]]]]]]] == 22; // TRUE





// parseInt( null, 24 )=== 23  // TRUE




// ?,,,,? == Array(4)  // FALSE




// alert(parseInt(1/0,19));  // 18



// 11. Which of the following is the tainted property of a window object in Java Script?

// C. Defaultstatus 


// 13. Which of the following is used to capture all click events in a window?
// A. window.captureEvents(Event.CLICK);

// 14. Javascript is an object oriented language?
//true

// 15. Which of the following is not a valid JavaScript variable name?
// A. 2java

// 18. ___________ JavaScript is also called client-side JavaScript.
// B. Navigator 

// 20. Why so Java and JavaScript have similar name?
// B. The syntax of JavaScript is loosely based on Java syntax 

// 21. File is a server-side JavaScript object?
// A. True 


// 22. What is the alternate name for Java script?
// D. ECMAScript 


// 28. Java Script supports all boolean operators
// B. False

// 29. Java Script entities start with ____________ and end with ______________
// D. Ampersand, semicolon 

// 12. Which attribute needs to be changed to make elements invisible?
// B. visible 

// 17. What is negative infinity in Java script?
// D. number in JavaScript, derived by dividing negative number by zero

// 24. What java wrapper type is created when a JavaScript object is sent to Java?
// A. ScriptObject


// 27. Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?
// A. Eval 







 function displayDate() {
        document.getElementById('showdate').innerHTML = Date();
     Date()
    }
   





    // FUNCTIONS ;

    function greetUser(firstName,secondName,lastName) {
      let fullName = `${firstName} ${secondName} ${lastName}`;
         return `ASSALAM O ALAIKUM , ${fullName}`};

         const greeting = greetUser("MUHAMMAD", "SHAHMEER", "RIZWAN");
         console.log(greeting);



         //  NEXT QUESTION :


         let a = prompt("please enter a first number ");
         let b = prompt("please enter a second number ");

         let c = parseInt(a) + parseInt(b);
         console.log("the sum of " +a+ " and " +b+ " is "+ c );



         let str = ' madam';
         function palindrome (){
            console.log(str.split('').reverse().join(''));
            if(str.split('').reverse().join() )

         }
         palindrome(str)