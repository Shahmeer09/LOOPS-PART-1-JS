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













// console.log("4+4");
// let name = 'shahmeer'
// let age = 19 
// console.log("my name is shahmeer "+ "1" + 9 + ".")

// percentage

// let username = prompt("enter your name");
// let chemmarks = Number(prompt("enter chemistry marks"));
// let physmarks = Number(prompt("enter physics marks"));
// let mathsmarks = Number(prompt("enter maths marks"));
// let biomarks = Number(prompt("enter biology marks"));

// let totalmarks = 400;
// let usertotal = chemmarks + physmarks + mathsmarks + biomarks
// let percentage = usertotal / totalmarks * 100;

// console.log("student name " + username + " got " + percentage +"%.")

// let num = 1;
// num += 2
// console.log(num);

// let names = ''
// let age = 19
// console.log("My name is " + names + " and my age is " + age + ".")


// let userName = prompt('Enter your name');
// let chemMarks = Number(prompt('Enter chemistry marks'));  
// let phyMarks = Number(prompt('Enter physics marks'));  
// let mathsMarks = Number(prompt('Enter maths marks'));  
// let bioMarks = Number(prompt('Enter biology marks'));  

// let totalMarks = 400;
// let userTotal = chemMarks + phyMarks + mathsMarks + bioMarks;
// let percentage = userTotal / totalMarks * 100;

// console.log( userName + " got " + percentage + "%.")

// let num = 1;
// // num = num + 2;
// num += 2
// console.log(num);


// let num1 = 10;
// let num2 = 10;
// let cond = num1 > num2;
// let cond = num1 < num2;
// let cond = num1 === num2;
// let cond = num1 === num2;
// let cond = num1 >= num2;
// let cond = num1 <= num2;
// let cond = num1 == num2;

// console.log(cond);

//&&
//||

// let condition = 9 < 6 || 10 > 9;
// let condition2 = 10 > 9 && 9 < 6;

// console.log(condition2)







// 1)  ASSIGNMENT 1 ( ALERT ) ;


// console.log("hello world");

// alert("Welcome to the JS Land!")
// alert("Error! Please enter a valid password.")

// alert("Welcome to JS Land...\nHappy Coding!")

// alert("Welcome to JS Land...")

// END :


// ASSIGNMENT 2 :

// let hellomessage = alert('Hello...I can run JS through my browsers console');
// console.log('hellomessage');


// var userName = 'Muhammad Shahmeer '
// var myName = 'Muhammad Shahmeer'

//  var message = 'Hello World'
// alert(message)

// END ;


// let age = '18 years old'
// let uni = 'SSUET'
// let skill = 'Mobile and Cloud Computing - Module A'

//  alert(myName)
//  alert(age)
//  alert(uni)
//  alert(skill)

//  let pizza = 'PIZZA\nPIZZ\nPIZ\nPI\nP'
//  alert(pizza)

//  let numberofchildren = '2 kids.'
//  let partnersName = 'ABC'
//  let geographicLocation = 'USA,'
//  let jobTitle = 'Sofware Developer'

//  alert("You will be a " + jobTitle + ' in ' + geographicLocation + ' and married to ' + partnersName + ' with ' + numberofchildren )


// var email = 'shahmeerrizwan921@gmail.com.'

// alert('My email address is ' + email )

// var book = 'A smarter way to learn JavaScript'

// alert('I am trying to learn from the book ' + '"' + book + '"')


// var myName2 = 'My name is Muhammad Shahmeer'
// var age2 = 'I am 17 years old'
// var skill2 = 'I take Mobile and Cloud Computing - Module A'
// var uni2 = 'I study in SSUET'

// alert(myName2 + '\n' + age2 + '\n' + uni2 + '\n' + skill2)

// document.write('Yay! I can write HTML content through JavaScript')



// var myage = 'I am 14 years old.'
// alert(myage)

// var names = 'abdullah';
// names = 'usman';
// console.log(names);


// let names = 'abdullah'
// names = 'usman';
// console.log(names);


// const names = 'abdullah'
// names = 'usman'
// console.log(names);

// var number = 10;

// if (number % 2 === 0) {
//   console.log(number + " is even.");
// } else {
//   console.log(number + " is odd.");
// }


// var checkbox = document.getElementById(input.checkbox)

// if (checkbox) {
//     alert('checkbox is checked')
// }
// else {
//     alert('checkbox is not checked')
// }


// Check if localStorage already has a visit count
//  if(localStorage.getItem('visitCount')) {
//  If yes, increment the count by 1
// var visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
// } else {
//   If not, set the count to 1
//    var visitCount = 1;
//    }

//    Store the updated visit count in localStorage
//    localStorage.setItem('visitCount', visitCount);

//    Display the visit count on the webpage
//   document.write("You have visited this site " + visitCount + " times.");





// const wicket = 6 

// if ( wicket >= 5 )
// console.log("draw")
// else ( wicket <=10)






// FUNCTION :

// function greetuser() {
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// }

// greetuser();
// greetuser();
// greetuser();


// ARGUMENT OR PARAMETER :

// function greetuser(names , age , salary) {
//     console.log("my name is " + names + " and my age is " + age + " and my salary is " + salary);}


//     greetuser(" shahmeer " , 20 , 20000 );



//     function sumofTwoNum(num1, num2) {
//         const sum = num1 + num2
//         return sum
//     }

//     console.log(sumofTwoNum(8, 9));




//      let userName = prompt('Enter your name');
//  let amount = Number(prompt('Enter amount'));  
//  let age = Number(prompt('Enter age')); 


 
//  let  = amount
 







// const img = document.querySelector('img')
// const para = document.querySelector('p')

// function toss(clicked){
//     let roundNumber = Math.floor(Math.random()*2);
//     console.log(roundNumber);
//     if(clicked === 'masjid' && roundNumber === 0 || clicked === 'chand' && roundNumber === 1){
//         console.log(clicked , 'toss jeet gai');
//         para.innerHTML = 'toss jeet gai'
//     }else{
//         console.log('toss haar gaye');
//         para.innerHTML = 'toss haar gaye'
// }
// if (roundNumber === 1){
//     Image.scr = ''
// }else{
//     Image.scr = ''
// }






// let grade = 'B';

// switch (grade) {
//     case 'A':
//         console.log('A grade');
//         break
//     case 'B' :
//         console.log('B grade');
//         break
//     case 'C' :
//         console.log('C grade');
//         break
//     default:
//         console.log('fail ho gai');
// }


// let num = 1;
// switch (true) {
//     case  num > 5 :
//         console.log("case 1 chl raha hai");
//         break
//         default:
//             console.log('case 2 chl raha');

//     }


// let currentDate = new Date('Octuber 21 , 2004');
// console.log(currentDate);

// let grade = 'B';

// switch (grade) {
//     case 'A':
//         console.log('A grade');
//         break
//     case 'B' :
//         console.log('B grade');
//         break
//     case 'C' :
//         console.log('C grade');
//         break
//     default:
//         console.log('fail ho gai');
// }


// LOOPS :

// for (let i = 0; i < 5; i++ ) {
//     console.log('shahmeer',i);
// }





// ARRAY :

// const students = ['shahmeer','hasssan','raza'];
// console.log(students);

// let a = 12;
// let b = 19;
// sumoftwonumbers(a, b);

// let c = 20
// let d = 10
// sumoftwonumbers(c, d);

// let e = 10
// let f = 5
// sumoftwonumbers(e , f);

// function sumoftwonumbers(a, b) {
//     let sum = a + b;
    
//     console.log("The Result is", sum);
//     return
// }

// let currentDate = new Date();
// let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// console.log(days[currentDate,currentDate]);






// PRACTICE FOR QUIZ IN [SMIT] 

// 1) JavaScript is a Case Sensitive




// Defference Between in Undefined Or Not Defined

// Not Defined => Jab Declared Or Iniatialized Nhi Kiya Hoga Tou Not Defined Aiga
// eg
// console.log(shahmeer);


// UnDefined => Varialble Banawa Hai Pr Value nhi di
// eg
// let shah;
// console.log(shah);


var a = 98;
var a = 80;

console.log(a); // Answer is 80 bcz code execute line by line






// in javascript only two characters are allowed in initialization
// first is dollar sign "$"
// Second is "_" underscore

// eg
// let $abc = "shahmeer"
// let _abc="shah"


// Chapter Let Var Const :

// const shah = 20; //cannot redeclared block scope variables
// console.log(shah);

// let shah=



// let b = "shahmeer"
// {
//     let b = "shah";   // First Render Shah
//     console.log(b);  // then Render Shahmeer
// }
// console.log(b);



// LET = block scope  // let can be updated but not re-declared
// VAR = globally scope  // var can be updated or re-declared
// CONST  = block scope // const cannot be updated or redeclared

// Const example:
// const sin = "shahmeer"
// sin = "anwara"
// console.log(sin);

// Let Example // Var
// let shah = "meer"

// shah = "shahaa"
// console.log(shah);

// var abc = "ABC";
// var abc = "ABD";
// console.log(abc);


// CHAPTER OBJECT & DATA TYPE

// PRIMITIVE DATA TYPE

// There  Are seven Types Of Data Types
// 1) Null
// 2) Number
// 3) Boolean
// 4) Bigint
// 5) String
// 6) Symbol
// 7) Undefined


// Short Form to learn NNBBSSU


// NON PRIMATIVE DATA TYPE = OBJECT


// Chapter Increment Decrement

// ++7 = agr age plus hoga tou wo pre increment kehlata hai . mtlb phele plus ho jaiga chahe baad mai koi value ho ya na ho
// 7++ = agr peche plus hoga post increment kehlaiga . mtlb phele plus nhi hoga agr iske baad koi value hogi tou jab ye plus hoga .
// --7 = agr aage minus hoga tou pre decrement kehlaiga .mtlb phele minus hoga .
// 7-- = agr peche minus hoga tou post decrement kehlaiga .mtlb bad mai minus hoga agr bad mai koi value hogi tou minus hoga agr nhi hogi tou minus bhi nhi hoga .




// Chapter Logical Operator

// So 
// True + True = True
// False + False = False
// True + False = False
// False + True = False


// let x = 5;
// let y = 6;
// console.log(x < y || x == 5);  // True


// && ye dono condition check krta hai agr inme se ek bhi false hogi tou false return dega agr dono false tou false or agr dono true tou phr true return karega

// || iska mtlb ye dono conditions check karega agr dono mai se ek bhi true hai tou true return karega agr dono value false hai tou false .




// Chapter Loop


// there are 5 types of loops

// FOR LOOP
// FOR IN LOOP
// FOR OFF LOOP
// WHILE LOOP
// DO WHILE LOOP






// QUIZ QUESTIONS

// 1) console.log(typeof typeof 1); // = STRING BCZ typeof "number" which returns "string".

// Explanation!
// This actually returns "string".

// This expression is evaluated from right to left.

// The first sub-expression evaluated actually is typeof 1 which will return "number".

// Only after that the next sub-expression is evaluated which now is typeof "number" which returns "string".


// 2) console.log(1 +  "2" + "2");


// Explanation!
// The result is "122", but why is that?

// The plus operator is defined for numbers and for strings and the expression is evaluated from left to right.

// The interesting thing about the algorithm behind it is, that it checks whether a string is present.

// If we take a look at how the runtime handles the expression, it will start with the first part as follows:

// 1 + "2"

// And as the right side contains a string, a concatenation will be made, which results in n intermediary result of

// 1 + "2" -> "12"

// Only after that, the last part is evaluated as follows:

// "12" + "2" -> "122"


// 3) console.log("This is a string." instanceof String);


// Explanation!
// This actually returns false.

// The reason for that circumstance is that JavaScript distinguishes between primitives and objects.

// And "This is a string." is actually a primitive string and not an instance of the object String.

// If the code was like this:

// new String("This is a string.") instanceof String

// you'd actually get the result you would have expected at the beginning.

// What instanceof actually does is checking if the String constructor is nested within the prototype chain of the value provided.

// In this case, it isn't.






// 4) console.log(018 - 015);

// Explanation!
// This will actually result in 5 but this is pretty strange, isn't it?

// Please note, that this example will only work in lax mode, and not in strict mode, and we will come to the explanation soon enough.

// In earlier versions of JavaScript, a leading 0 on a number marked an octal number.

// Octal numbers are numbers with a base of 8 (instead 10 like with decimal numbers).

// This means that numbers from 0 to 7 are valid digits.

// In our case, 018 can't actually be a octal number, can it?


// 5) console.log(false == '0');

// Explanation!
// The answer is true.

// In this situation, the abstract equality comparison algorithm is used, which is also called the type-coercing equality check.
// What it does is converting the values as long as possible, until they match in type and can be compared strictly.

// In this case, the following steps are performed:

// // 1st step
// false == '0'

// // 2nd step
// Number(false) == '0' -> 0 == '0'

// // 3rd step
// 0 == '0' -> 0 == Number('0')

// // 4th step
// 0 == 0 -> 0 === 0 -> true

// Well it can't and the runtime knows this, which is why it treats 018 as 18 although the right side contains a perfectly valid octal number 015 which is 13 in decimal.

// And the runtime will perform the calculation exactly like this, which results in:

// 18 - 13 -> 5


// 6) console.log(0.1 + 0.2 == 0.3);

// Explanation!
// The answer is false.

// This is not a JavaScript quirk but actually based on floating point arithmetic.
// Some decimal numbers simply can't be represented accurately by computers and some decimal numbers can't be added up accurately.
// This is the case in this situation.

// 0.1 + 0.2 -> 0.30000000000000004

// And 0.30000000000000004 is never equal to 0.3.



// 7) const numbers = [33, 2, 8];  //33
// numbers.sort();
// console.log(numbers[1])


//8) console.log(typeof NaN); // Number


console.log(('b' + 'a' + + 'a' + 'a').toLowerCase()); // b + a = ba & ba + + = NaN = banan + a = banana



var x = "5";
var y = 10;
alert(x + y)






// MATH EXPRESSIONS QUESTIONS 

// QUESTION NO 1 :


// let num1 = 10;
// let num2 = 80;

// alert(`The Sum of ${num1} and ${num2} is ${num1 + num2}`);




// QUESTION NO 2 :

//   A Part )


// let num1 = 30;
// let num2 = 20;

// alert(`The Substraction of ${num1} and ${num2} is ${num1 - num2}`)



// B Part )


// let num1 = 20;
// let num2 = 20;

// alert(`The Multiplication Of ${num1} And ${num2} is ${num1 * num2}`)



// C Part )


// let num1 = 19;
// let num2 = 12;
// alert(`The Dividing of ${num1} And ${num2} is ${num1 / num2}`)




// D Part )


// let num1 = 10;
// let num2 = 20;

// alert(`The Remainder of ${num1} And ${num2} is ${num1 % num2}`)







// QUESTION NO 3 :


// let value;
// document.write(`"Value
// after variable declaration is ${value} " <br>`)


// let initialValue = 3;
// document.write(`The Initial Value is ${initialValue}
// <br>
// Value After Increment is ${++initialValue}
// <br>
// Value After 7 addition is ${7 + initialValue}
// <br>
// Value After Decrement is ${--initialValue}
// <br>
// The Remainder is ${initialValue % 3}
// `)






// QUESTION NO 4

// let movieTicket = 600;
// let buyTicket = 5;

// document.write(`
// Total Cost to Buy ${buyTicket} Tickets To a Movie is ${buyTicket * movieTicket} PKR
// `)


// QUESTION NO 5 :


// let number = prompt("Enter Any Number You Want To Generate Table");

// for (i = 1; i <= 10; i++) {
//     document.write(` ${number}  x   ${i}   = ${number * i}<br>`)
// }


// QUESTION NO 6 :


// PART A )
// Celsius Into Fehrenheit

// let celsius = prompt("Enter Celcius Temperature Into Fehrenheit");

// document.write(`
//  The Temperature in Celsius is ${celsius} C<sup>0</sup> And Fehrenheit is ${(celsius * 9 / 5) + 32}
// `)


// PART B )
//   Fehrenheit Into Celsius


// let fehrenheit = prompt("Enter A fehrenheit Temperature Into Celsius");

// document.write(`
// The Temperature in Fehrenheit is ${fehrenheit} F<sup>0</sup> And in Celsius is ${(fehrenheit - 32) * 5 / 9}C<sup>0</sup>
// `)








// QUESTION NO 7 :

// let Priceofitem1 = 560;
// let Priceofitem2 = 200;
// let quantityofitem1 = 2;
// let quantityofitem2 = 5;
// let shippingCharges = 150;

// document.write(`
// <center>
// <h1> SHOPPING CART </h1>
// Price of Item 1 is ${Priceofitem1}<br>
// Quantity of Item 1 is ${quantityofitem1}<br>
// Price of Item 2 is ${Priceofitem2}<br>
// Quantity of Item 2 is ${quantityofitem2}<br>
// <br>
// Shipping charges is ${shippingCharges}
// <br>
// <br>
// Total Cost Of Your Order is ${Priceofitem1 * 2 + Priceofitem2 * 5 + 150}
// </center>
// `)




// FORM USER DATA FROM PROMPT :

// let Priceofitem1 = prompt("Enter Price Of Item 1");
// let Priceofitem2 = prompt("Enter Price of Item 2");
// let quantityofitem1 = prompt("Enter Quantity of Item 1");
// let quantityofitem2 = prompt("Enter Quantity of Item2");
// let shippingCharges = 150;

// document.write(`
//  <center>
//  <h1> SHOPPING CART </h1>
//  Price of Item 1 is ${Priceofitem1}<br>
//  Quantity of Item 1 is ${quantityofitem1}<br>
//  Price of Item 2 is ${Priceofitem2}<br>
//  Quantity of Item 2 is ${quantityofitem2}<br>
//  <br>
//  Shipping charges is ${shippingCharges}
//  <br>
//  <br>
//  Total Cost Of Your Order is ${Priceofitem1 * quantityofitem1 + Priceofitem2 * quantityofitem2 + 150}
//  </center>
//  `)




// QUESTION NO 8 :


// let marksObtained = prompt("Enter a Marks You Obtained");
// let ToatalMarks = prompt("Enter a Total Marks And I Will Generate Your Percentage");
// document.write(`
// <center>
// <h1> Mark Sheet </h1>
// <br>
// <br>
// Your Total Marks is ${marksObtained}<br>
// Your Obtained Marks is ${marksObtained}<br>
// Congratulations You Got ${marksObtained / ToatalMarks * 100}%
// </center>
// `)



// QUESTION NO 9 :


// USD DOLLARS INTO PKR

// let usd = prompt("Enter a Amount You Want To Convert USD Dollars Into PKR Currency");

// document.write(`
// <center>
// <h1> USD Dollars Into PKR </h1>
// <b> The Amount You Convert ${usd} USD into PKR is ${usd * 279.50} PKR </b>
// </center>
// `)


// PKR INTO USD DOLLARS


// let pkr = prompt("Enter Amount You Want To Convert PKR Into USD Dollars");
// document.write(`
// <center>
// <h1>Pakistanis Rupees Converter Into USD Dollars</h1>
// <b>The Amount You Convert ${pkr} PKR Into USD Dollars is ${pkr * 0.0036} USD</b>
// </center>
// `)




// QUESTION NO 10 :

// let variable = +prompt("Enter Any Number For Airthmatic Sequence");
// alert(variable + 5 * 10 / 2)



// QUESTION NO 11 :


// let birthdayYear = prompt("Enter Your Birthday Year And I Will Generate Your Age ");
// let currentYear = new Date().getFullYear();
// document.write(`
// <center>
// <h1> The Age Calculator </h1>
// <b>
// Current Year is ${currentYear} <br>
// Your Birth Year is ${birthdayYear} <br>
// <br>
// <br>
// You Are ${currentYear - birthdayYear} Years Olds
// </b>
// </center>
// `)



// QUESTION NO 12 :




// const radius = prompt("Enter A Number You Want To Circumference And Area");
// const circumference = 2 * Math.PI * radius;
// const area = Math.PI * Math.pow(radius, 2);


// document.write(`The circumference is   ${circumference.toFixed(2)}
// <br >
// The area is  ${area.toFixed(2)}
// `);





// QUESTION NO 13 :


// let num = +prompt("Enter a number");

// let preIncre = ++num;
// let postIncre = num++;
// let preDecre = --num;
// let postDecre = num--;

// document.write(`
// <center>
// <h1> Result </h1>
// The Value of ++a is : ${preIncre} <br>
// Now the Value of a is : ${preIncre}
// <br>
// <br>
// The Value of a++ is : ${postIncre} <br>
// Now the Value of a is : ${postIncre}
// <br>
// <br>
// The Value of --a is : ${preDecre} <br>
// Now the value of a is : ${preDecre}
// <br>
// <br>
// The Value of a-- is : ${postDecre} <br>
// Now the Value of a is : ${postDecre}
// </center>
// `)





// QUESTION NO 14 :



// let a = 2; // 1
// let b = 1; // 0 1

// let result = --a - --b + ++b + b--;
// //             1 -   0 +   1 + 1
// document.write(`
// a is ${a}
// <br>
// b is ${b}
// <br>
// Result is ${result}
// `)



// QUESTION NO 15 :


// let favChips = prompt("Enter Your Favourite Snacks");
// let currentAge = Number(prompt("Enter Your Current Age"));
// let maximumAge = Number(prompt("Enter Your Maximum Age"));
// let totalAge = maximumAge - currentAge;
// let days = totalAge * 365;
// let amountOfSnacksPerDay = 2;


// document.write(`
// You Will Need ${days * 2} ${favChips} to Last You Until The Ripe Old Age Of ${maximumAge} .
// `)





//                       COMPLETED 

















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








// IF ELSE QUESTIONS 


//question 1

// let number = prompt("Enter a number:");

// if (!isNaN(number)) {
//     if (number % 3 === 0) {
//         console.log(number + " is divisible by 3.");
//     } else {
//         console.log(number + " is not divisible by 3.");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }


//question 2

// let number = prompt("Enter a number:");

// if (!isNaN(number)) {
//     if (number % 2 === 0) {
//         console.log(number + " is an even number.");
//     } else {
//         console.log(number + " is an odd number.");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }


//question 3

//  let age = 16; 

//  if (age > 18) {
//      console.log("Old enough");
//  } else {
//      console.log("Too young");
//  }


//question 4

//  let userName = prompt("Enter your name:");

//  if (userName = "Shahmeer") {
//      console.log("Hello, Shahmeer! It's great to see you!");
//  } else {

//  }



//question 6

// let input = prompt("Enter a character:");

// if (input.length === 1) {
//     let charCode = input.charCodeAt(0);
    
//     if (charCode >= 48 && charCode <= 57) {
//         console.log("The input is a number.");
//     }
//     else if (charCode >= 65 && charCode <= 90) {
//         console.log("The input is an uppercase letter.");
//     }
//     else if (charCode >= 97 && charCode <= 122) {
//         console.log("The input is a lowercase letter.");
//     }
//     else {
//         console.log("The input is neither a number nor a letter.");
//     }
// } else {
//     console.log("Invalid input. Please enter a single character.");
// }


//question 7

// let number1 = prompt("Enter the first number:");
// let number2 = prompt("Enter the second number:");
// let operator = prompt("Enter the operator (+, -, *, /, %):");

// let result;
// switch (operator) {
//     case '+':
//         result = number1 + number2;
//         console.log("Result: " + result);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log("Result: " + result);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log("Result: " + result);
//         break;
//     case '/':
//         if (number2 !== 0) {
//             result = number1 / number2;
//             console.log("Result: " + result);
//         } else {
//             console.log("Error: Division by zero is not allowed.");
//         }
//         break;
//     case '%':
//         if (number2 !== 0) {
//             result = number1 % number2;
//             console.log("Result: " + result);
//         } else {
//             console.log("Error: Modulus by zero is not allowed.");
//         }
//         break;
//     default:
//         console.log("Invalid operator. Please enter a valid operator (+, -, *, /, %).");
// }


//question 8

// let age = 14
// console.log(age);
// if (age>18){
//     console.log('you are allowed');

// }
// else{ console.log('you are not allow');}




//question 9


//  let year = prompt("Enter a year");

//  if (!isNaN(year) && year.toString().length === 4) {
//      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//          console.log(year + " is a leap year.");
//      } else {
//          console.log(year + " is not a leap year.");
//      }
//  } else {
//      console.log("Invalid input. Please enter a valid year in YYYY format.");
//  }


//question 10

//  let correctPassword = "pass123";

//  let userPassword = prompt("Enter your password:");

//  if (userPassword === "") {
//      console.log("Please enter your password.");
//  } else if (userPassword === correctPassword) {
//      console.log("Correct! The password you entered matches the original password.");
//  } else {
//      console.log("Incorrect password.");
//  }




// Loop Questions 





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


// Loop Questions 



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


