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
//          product = i;
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

// 15. Which of the following is  valid JavaScript variable name?
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




// FUNCTIONS QUESTIONS ;


//  function displayDate() {
//         document.getElementById('showdate').innerHTML = Date();
//      Date()
//     }
   





    // FUNCTIONS ;

   //  function greetUser(firstName,secondName,lastName) {
   //    let fullName = `${firstName} ${secondName} ${lastName}`;
   //       return `ASSALAM O ALAIKUM , ${fullName}`};

   //       const greeting = greetUser("MUHAMMAD", "SHAHMEER", "RIZWAN");
   //       console.log(greeting);



         //  NEXT QUESTION :


         // let a = prompt("please enter a first number ");
         // let b = prompt("please enter a second number ");

         // let c = parseInt(a) + parseInt(b);
         // console.log("the sum of " +a+ " and " +b+ " is "+ c );



        // ANOTHER QUESTION 


//          let str = prompt('enter any string');

//  function palindrome (str){
//      console.log(str.split('').reverse().join(''));
//      if(str.split('').reverse().join('') ===str){
//          console.log('this is palindrome');
//      }else{
//          console.log('this is not palindrome');
//      }

//  }
// palindrome(str);



//  ANOTHER QUESTION 





//  let str = prompt('enter any sentence');

//  function abc(str) {
//      let convertArr = str.split(' ');
//      const arr = []
//      for (let i = 0; i < convertArr.length; i++) {
//        //   console.log(convertArr[i]);
//          let converted = convertArr[i].charAt(0).toUpperCase() + convertArr[i].slice(1);
//          arr.push(converted)

//      }
//      return arr.join(' ');
//  }
//  console.log(abc(str));



// ANOTHER QUESTION :


// function celsiusToFahrenheit() {
//    let c = prompt('Enter number ,  centigrade into fahrenheits ')
//    let f = (c * 9 / 5) + 32
//    console.log(`${c}°C is ${f}°F`);
// }

// celsiusToFahrenheit()











// var originalNum = 23;
//  var numToBeAdded = 7;


//   let newNum = originalNum + numToBeAdded;
// console.log(newNum);








// TEST :

// QUESTION NO 1 :

//  let A = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < A.length; i++){
//     console.log(A[i])
// }


// QUESTION NO 2 :


// let scores = [12, 45, 3, 22, 34, 50];
//   let stopValue = parseInt(prompt("Enter the stop value:"));

//   if (!isNaN(stopValue)) {
//       let output = [];
//       for (let i = 0; i < scores.length; i++) {
//          if (scores[i] <= stopValue) {
//              output.push(scores[i]);
//     } else {
//              break;
//          }
//     }

  
//      console.log(output);
//   } else {
      
//       console.log("Invalid input. Please enter a valid number.");
//   }



  // question no 6 :


//   let str = prompt('enter any name');

//    function palindrome (str){
//        console.log(str.split('').reverse().join(''));
//        if(str.split('').reverse().join('') ===str){
//            console.log('this is palindrome');
//        }else{
//            console.log('this is not palindrome');
//        }
  
//    }
//   palindrome(str);






// QUESTION NO 7 :



// function celsiusToFahrenheit() {
//       let c = prompt('Enter number ,  centigrade into fahrenheits ')
//       let f = (c * 9 / 5) + 32
//       console.log(`${c}°C is ${f}°F`);
//    }
    
//    celsiusToFahrenheit()
    


// QUESTION NO 2 :



// app 

/*

const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Abdullah',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]

const div = document.querySelector('.container');
const checkoutBtn = document.querySelector('#checkout-btn');

for (let i = 0; i < phones.length; i++) {
    // console.log(phones[i]);
    div.innerHTML += `
    <div class="p-5 border border-secondary-subtle m-5">
    brand:${phones[i].brand}<br/>
    Model:${phones[i].model}<br/>
    price:${phones[i].price}<br/>
    <button class="btn btn-primary my-2" onclick="addToCart(${i})">Add to Cart</button>
    </div> 
    `
    
}

const data = JSON.parse(localStorage.getItem('cartItems'));
let arr;
if(Array.isArray(data)){
    arr = [...data];
}else{
    arr = []
}
function addToCart(index){
    console.log('add to cart called' , index);
    arr.push(phones[index]);
    console.log(arr);
}


function checkout (){
    window.location = 'checkout.html'
    localStorage.setItem('cartItems',JSON.stringify(arr))
}

checkoutBtn.addEventListener('click' , checkout) /*




//         LAST CLASS 


//  const obj = {
//   name :  "shah",
//   age : "19",
//  }
// console.log(obj["name"]);

// for (const key in obj) {
// console.log(`${key} : {obj [key]}`);

    
//   }

// const arr = [4,5,6,7,8,56]
// arr.forEach((item)=>{
//   console.log(item);
// })


// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map( numbers => numbers);
// console.log(numbers);






























//                      JAVA SCRIPT PRACTICE :





// 9/12/2023   // PRACTICE JAVASCRIPT :
// JAVA SCRIPT IS A CASE SENSITIVE :
// TOPIC 1 :
// VARIABLE ?
// VARIABLE IS A CONTAINER THAT STORES A VALUE . VARIABLES ADD ANY NUMBER , STRINNG & ARRAYS 
// HOW TO MAKE VARIABLE ? 


// SYNTAX :
// let  a = 67
// console.log(a);


// TOPIC NO 2 :
// CONST ,  LET , VAR :
// 1 : LET IS A BLOCK SCOPE.
// LET CAN  BE UPDATED BUT NOT RE-DECLARED .

// SYNTAX :
// let a = 67
// console.log(a);

// EX :
// let a = "shahmeer";
// { let a = "shah"
// console.log(a);}
// console.log(a);


// 2 :
// VAR :
// VAR IS GLOBALLY SCOPE .
// LET CAN  BE UPDATED AND RE-DECLARED .

// SYNTAX :
// var a = 45;
// console.log(a);

// 3 : CONST :
// CONST CANNOT BE UPDATED AND NOT RE DECLARED .
// CONST IS A BLOCK SCOPE .


// SYNTAX 
// const a = 65;
// console.log(a);

 // const a = 65 // ERROR BECZ CONST CANNOT BE UPDATED AND NOT REDECLARED .


 // TOPIC 3 :
 // OBJECT , DATA TYPE (PRIMITIVE DATA TYPE ).

 // THERE ARE 7 TYPE OF PRIMITIVE DATA TYPE .
 // BEST WAY TO LEARN DATA TYPE IS => NN BB SU 
 // N FOR NUMBER , N FOR NULL ,  B FOR BOLEAN , B FOR BIGINT , S FOR SYMBOL AND U FOR UNDEFINED.

// OBJECT :

// SYNTAX ;
// const name = {
//   name : 'shahmeer' ,
//   section : ' b'
// }
// console.log(name);
 
// add a new name 

// const name = {
//     name : 'shahmeer' ,
//     section : ' b'
//   }
//   name['class']= '8'
//   console.log(name);


// TOPIC 4 :
// OPERATORS & CONDITIONS :

// OPERATORS :
// SYNTAX :

// let a = 45;
// let  b = 4;

// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a x b = ", a*b);
// console.log("a / b = ", a/b);


// INCREMENT (OPERATORS):

// let a = 10 ;
// console.log("++a = " , ++a );  // 1 plus ho jaiga 


// let a = 10 ;
// console.log("a++ = " , a++ ); // add nhi hoga 10 , 10 hi rahega

// = VARIABLE BANANE K LIYE USE HOTA 
// += ADD KRDEGA VALUE 
// -= MINUS KRDEGA VALUE 
// *= MULTIPLY KR DEGA
// /= DIVIDE KRDEGA

// COMPARISON OPERATORS :

// != MTLB ( NOT EQUAL TO )
// == TYPE CHECK NHI KRTA & EQUAL TO 
// === TYPE CHECK KRTA HAI (DONO KI TYPE SAME HAI TOU CHALEGA )  
// !== NOT EQUAL VALUE OR NOT EQUAL TYPE
// < (LESS THAN)
// <= (LESS THAN OR EQUAL TO)
// > (GREATER THAN)
// >= (GREATER THAN OR EQUAL TO)


// LOGICAL OPERATORS :

// let  x = 5;
// let y = 6;
// console.log(x<y && x==5); // answer (true) && dono condition check krta hai agr dono true houngi tou true aiga result agr ek true or ek false tou false answer aiga agr dono false tou phr false 

//  let  x = 5;
//  let y = 6;
//  console.log(x<y || x==4); // answer (false) || dono condition check nhi krta agr ek condition bhi true hogi tou true result aiga


// !true // answer false aiga !true false krdeta hai
// !false // answer true aiga !false true krdeta hai


// TOPIC 5 :

// CONDITIONS :
// THERE ARE THREE TYPE OF CONDITIONS 
// 1 ) IF STATEMENT
// 2 ) IF/ELSE STATEMENT
// 3 ) IF ELSE IF STATEMENT 

// 1 ) IF STATEMENT :

// SYNTAX :
// let a = prompt('enter your age')
// a = Number.parseInt(a)
// if (a >= 18) {
//   console.log("valid age because your age is " , a);
// }


// 2 ) IF ELSE STATEMENT :

// SYNTAX :

// if (age < 18){
//   console.log("you are kid ");
// }else{
//   console.log("you are not a kid");
// }

// EXAMPLE :

// USER SE OSKI AGE LO AGR 18+ HAI TOU YOU ARE 18+ SHOW HO AGR NHI HAI TOU YOU ARE KID SHOW HO 


// let age = prompt("enter your correct age");
// if (age < 18){
//   console.log("you are kid ");
// }else{
//   console.log("you are 18+ ");
// }


// 3) IF . ELSE IF STATEMENT :

// SYNTAX OR EXAMPLE :

// let age = prompt("enter your correct age");
// if(age <= 0){
//   console.log("invalid age please enter correct age ");
// }else if (age <= 10 && age >= 1 ) {
//   console.log("you are a child go and watch cartoon");
// } else if ( age >= 10 && age <= 18) {
//   console.log("you are a teenager");
// } else   {
//   console.log("you are 18 +");
// }


// TERNARY OPERATOR :

// SYNTAX :

// (CONDITION)? " " : " "

// EXAMPLE :

// let age = prompt("enter your correct age");
// console.log("you can" , (age<18?   "not drive" : "drive"));



// SWITCH CASE :

// SYNTAX :

// SWITCH (VARIABLE) {
// CASE " 1 " :
// CODE ----- HERE
// BREAK
  // CASE " 2 " :
// CODE ----- HERE
// BREAK
// CASE " 3 " :
// CODE ----- HERE
// BREAK
// CASE " 4 " :
// CODE ----- HERE
// BREAK
// DEFAULT :
// CODE ---- HERE
// } 

// EXAMPLE :
/*
let age = prompt("enter  your age ");
switch (age) {
  case  "1":
    console.log("your age is 1");
    break;
    case  "2":
      console.log("your age is 2");
      break;
      case  "3":
        console.log("your age is 3");
        break;
        case  "4":
          console.log("your age is 4");
          break;
          case  "5":
            console.log("your age is 5");
            break;
            case  "6":
              console.log("your age is 6");
              break;
              case  "7":
                console.log("your age is 7");
                break;
                case  "8":
                  console.log("your age is 8");
                  break;
                  case  "9":
                    console.log("your age is 9");
                    break;
                    case  "10":
                      console.log("your age is 10");
                      break;
  default:
    console.log(" your age is invalid");
    break;
} */


// TOPIC  6 :
/*                    
 LOOOPS 
*  EK SE ZDA VALUES LIKHNI HO TOU LOOP KA ISTEMAL KRTE HAIN :
 THERE ARE FIVE TYPE OF LOOPS 
 1) FOR LOOP 
 2) FOR IN LOOP 
 3) FOR OF LOOP 
 4) WHILE LOOP 
 5) DO WHILE LOOP 

1) FOR LOOP :
 SYNTAX :
 
 for ( let i = 0 ; i < 10 ; i++){
  console.log(i);
 }
     statement 1         statement 2      statement 3
 (    let i = 0     ;      i < 10      ;    i++      )
    initialization       condition        implement

* statement 1 is executed one time when the loop is start .
* statement 2 is condition base on which the loop runs ( loop body is executed )
if the condition is wrong the loop is stop .
* statement 3 is executed every time when the loop body is executed .

*/

// EXAMPLE :
// print 1 to 100 counting 
 // for (let i = 0; i < 100 ; i++) {
 // console.log(i);       // agr 100 tak value chahiye tou console.log mai (i+1) likh dain
 // }






 



 




 // once again practice 


 // QUESTION NO 6 :
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

// 15. Which of the following is  valid JavaScript variable name?
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



let a = prompt("please enter a factorial number  ");
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
