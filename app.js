// -----------1
//            Alerts-----------

// -------------------1.2-------------------

// alert("JavaScript Alert\n\nError! Please enter a valid password. ");

// --------------------1.3------------------

// alert("JavaScript Alert\n\nWelcome to JS Land...\nHappy Coding!")

// -----------------------1.4------------------

// alert("JavaScript Alert\n\nWelcome to JS Land...")

// alert("JavaScript Alert\n\nHappy Coding!\nPrevent this pagefrom creating additional dialog. ")

// -------------------------1.5------------------

// alert("JavaScript Alert\n\nHelsa...I can run JS through my web browser's console");

// ----------------------------1.6-----------

// let btnshow = document.querySelector('button');

// btnshow.addEventListener('click', () => {
//     swal("Tittle", "He world!", "success");
// } );

// ----------------in custom way----------

// let btnshow = document.querySelector('button');

// btnshow.addEventListener('click', () => {
//     swal({
//         title: 'My Title',
//         text: 'He World',
//         icon: 'success',
//         button: 'Custom Button'
//     });
// } );

//                2
//       Variables for Strings

// syntax
// decleration  var a;

// initiation   a = "he's world";

// alert(a);    a = "JS First Class"

// ----------------2.1-------------------------

// var username ;

// ----------------2.2--------------------------

// var myName = "Muhammad Asif";

// ---------------2.3-----------------------------

// var message = "He's World";
// alert(message);

// ----------------------2.4---------------------

// var data = "John Doe";
// alert(data);

// var data = "15 year old";
// alert(data);

// var data = "Certified Mobile Application Development";
// alert(data);

// ----------------------2.5---------------------

// var a = ("PIZZA\nPIZZ\nPIZ\nPI\nP")
// alert(a);

// ----------------------2.6---------------------

// var email  = "My email address is ";
// var b = "example@example.com";
// alert(email+b);

// ----------------------2.7---------------------

// var book = "I am trying to learn from the Book.";
// var books = "A smarter way to learn JavaScript";
// alert(book+books);

// ----------------------2.8---------------------

// var a = "Yah! I can write HTML content through JavaScript";
// document.write(a);

// ----------------------2.9---------------------

// var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(a);
// document.write(a);

// ---3
// ----Variables for Numbers

// ----------------------3.1---------------------

// var age ="I am " ;
// var num = 15;
// var ages =" year old";
// alert(age+num+ages);

// ----------------------3.2---------------------

// var a ="You have visited this site 14 times" ;
// alert(a);

// ----------------------3.3---------------------

// var birthYear ="My birth year is 1990\nData type of my declared variable is number" ;
// alert(birthYear);

// ----------------------3.4---------------------

// var name= "John Doe";
// var Quantity=" ordered 5 T-shirt(s)";
// var title= " on XYZ Clothing store";
// document.write(name+Quantity+title)

// ------4
// -----Variable Names Legal and Illegal

// ----------------------4.1---------------------

// ---------a----------
// var name = "john",
// rollNo = 11,
// age = 19;
// // console.log(name+rollNo+age)
// console.log(name);

// ---------b----------

// var [name, pinNo, age] = ["John" , 110, 26];
// console.log(name);

// ---------c----------

// var name = "john", rollNo = 11 , age = 19;
// console.log(rollNo);

// ----------------------4.2---------------------
// 5 illegal

// var product cost=3;  spaces
// var 123val = 4; Variable names cannot start with a number
// var alert = "hey";  reserved keyword
// var p2%$ = "hey";   special character
// my-variable   hyphens
// let - "let" reserved keyword

// 7 legal

// test
// TEST
// $test
// _test
// _123test
// test_value123$
// testValue

// ----------------------4.3---------------------

// var a = "Rules for naming JS variables" + "<br>" + "<br>" + "<br>" ;
// var b= "Variable names can only contain,number,$ and _.For example : $my_1stVariable" + "<br>";
// var c="Variables must begin with a letter,$ or _.For example : $name,_name or name" + "<br>";
// var d="Variable names are case sensitive" + "<br>";
// var e= "Variable names should not be JS keyword";
// document.write(a+b+c+d+e);

//          5
//    Math expressions:
//    Familiar operators

// --------------5.1-------------

// var a =3 ;
// var b = 5;
// var result= (a+b);
// document.write("The sum of 3 and 5 is " +result);

// --------------5.2-------------

// subtraction

// var a =3 ;
// var b = 5;
// var result= (a-b);
// document.write("The subtraction of 3 and 5 is " +result);

// multiplication

// var a =3 ;
// var b = 5;
// var result= (a*b);
// document.write("The multiplication of 3 and 5 is " +result);

// division

// var a =3 ;
// var b = 5;
// var result= (a/b);
// document.write("The division of 3 and 5 is " +result);

// modulus.

//    var a =3 ;
//     var b = 5;
//     var result= (a%b);
//     document.write("The modulus of 3 and 5 is " +result);

// --------------5.3-------------

// var a = 5
// document.write("Initial value :"+ a + "<br>");
// var b = ++a;
// document.write("Value after increment is:"+ b + "<br>");
// var c = b+7;
// document.write("Value after addition is:"+ c + "<br>");
// var d = --c;
// document.write("Value after decrement is:"+ d + "<br>");
// var e = 12%3;
// document.write("The remainder is :"+ e );

// --------------5.4-------------

//    var a = 600;
//    var b = a*5;
//    document.write("Total cost to buy 5 tickets to a movie is "+ b + "PKR");

// --------------5.5-------------

// for(i = 1; i <=10; i++ ){
//     document.write("4" + "x" + i + "=" + 4*i + "<br>");
// }

// --------------5.6-------------

// Conversion Formulae:

// C = (5/9) * (F-32)

// const cToF = function (celcius){

//     const cTemp = celcius;
//     const ToFahr = cTemp * (9/5) + 32;
//     const msg = '$ {cTemp}\xB0C is $ {ToFahr} \xB0F.';
//     return msg;
// }
// console.log(cToF(60));

// const fToC = function (fahrenheit){

//     const fTemp = fahrenheit;
//     const fTocel = (fTemp- 32) * (5/9);
//     const msg = '${fTemp}\xB0F is ${fTocel} \xB0C.';
//     return msg;
// }

//  console.log(fToC(60));

//     function cToF(celsius)
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit)
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// }
// cToF(25);
// fToC(70);

// --------------5.7-------------

// var a = 650;
//     document.write("Price of item 1 is "+ a + "<br>");
// var b = 3;
//     document.write("quantity of item 1 is "+ b + "<br>");
// var c = 100;
//     document.write("Price of item 2 is "+ c + "<br>");
// var d = 7;
//     document.write("Ordered Quantity of item 2 is "+ d + "<br>");
// var e = 100;
//     document.write("Shipping charges "+ e + "<br>" + "<br>");

//     var result =(a*b) + (c*d) + e ;
//     document.write("Total cost of your order is "+ result + "<br>");

// --------------5.8-------------

// var a = 980;
// document.write("Total marks : "+ a + "<br>");
// var b = 804;
// document.write("Total marks : "+ b + "<br>");

// var result = b/a*100;
// document.write("Percentage : "+ result + "%" + "<br>");

// --------------5.9-------------

//    var a = 104.80;
//   var b = a*10;
//    var c = 28;
//   var d = c*25;
//   var result = b + d;
//   document.write("Total Currency in PKR: "+ result );

// --------------5.10-------------

// var a = 11;
// var b = a+5;
// var c = b*10;
// var d = c/2;
// document.write(d);

//   var a = 11;
//   var b = 5;
//   var c = 10;
//   var d = 10;
//   var e = (a+b)* c/2;
//   document.write(e);

//   var e = (a+b)* c/2;
//   document.write(e);

// --------------5.11-------------

//    var a = 2023;
//    document.write("Current Year:" + a + "<br>");
//    var b = 1997;
//    document.write("Birth Year:" + b + "<br>");
//    var result = a-b;
//    document.write("Your Age is:" + result + "<br>");

// --------------5.12-------------

// var a = 20;
// document.write("Radius of a circle:" + a + "<br>");
// var b = 2*3.142*20;
// document.write(" The circumference:" + b + "<br>");
// var c = a*a*3.142;
// document.write("The area is:" + c + "<br>");

// --------------5.13-------------

// var a = "chocolate chip";
// document.write("Favorate Snack:" + a + "<br>");
// var b = 15;
// document.write("Current age:" + b + "<br>");
// var c = 65;
// document.write("Estimated Maximum:" + c + "<br>");
// var d = 3;
// document.write("Amount of snacks per day:" + d + "<br>");
// var e = 150;
// document.write("You will need " + e );
// var f = 65;
// document.write("chocolate chip to last you until the ripe age " + f );

// chapter 6-9
// --------------------  Math expressions

// --------------6-9.1-------------

// var result = "Result:" + "<br>";
// document.write(result);
// var a = 10;
// var b = "Value of a is:" + a + "<br>" + "......................................." + "<br>" + "<br>" ;
// document.write(b);

// var c = ++a;
// var d = "The value of ++a is: " + c + "<br>";
// document.write(d);
// var e = "Now the value of a is: " + c  + "<br>"+ "<br>";
// document.write(e);

// var f = "The value of a++ is:" + c + "<br>";
// document.write(f);
// var c = ++a;
// var g = "Now the value of a is: " + c + "<br>"+ "<br>";
// document.write(g);

// var c = --a;
// var h = "The value of --a is:" + c + "<br>";
// document.write(h);
// var i = "Now the value of a is: " + c + "<br>"+ "<br>";
// document.write(i);

// var j = "The value of a-- is:" + c + "<br>";
// document.write(j);
// var c = --a;
// var k = "Now the value of a is: " + c + "<br>";
// document.write(k);

// --------------6-9.2-------------

// var a = 2;
// var b1 = --a;
// var c = "a is: " + b1 + "<br>";
// document.write(c);

// var b = 1;
// var d = --a - --b;
// var d =  + d ;
// // document.write(d);

// var e = d;
// var f = --a - --b + ++b;
// var h = "b is: " + f + "<br>";
// document.write(h);

// var i = d;
// var j = --a - --b + ++b + b--;
// var result = "result is: " + j + "<br>";
// document.write(result);

// --------------6-9.3-------------

// var a = prompt("Enter your name" );
// var b = " Assalam o Alaikum";
// alert(a+b);










// --------------6-9.5-------------


// var num = prompt("Enter a number");
// console.log("num", num);
// console.log("num", typeof num);
// if (num == "" ||num == null) {
//   for (i = 1; i <= 10; i++) {
//     document.write("5" + "x" + i + "=" + 5 * i + "<br>");
//   }
// }

// if(num){
//     for (i = 1; i <= 10; i++) {
//             document.write(num + "x" + i + "=" + num * i + "<br>");
//           }
// }









// --------------6-9.6-------------


// a) Take three subjects name from user and store them in 3 different variables.
// let subject1 = prompt("Enter the name of Subject 1: ");
// let subject2 = prompt("Enter the name of Subject 2: ");
// let subject3 = prompt("Enter the name of Subject 3: ");

// // b) Total marks for each subject is 100, store it in another variable.
// const totalMarks = 100;

// // c) Take obtained marks for first subject from user and stored it in different variable.
// let obtainedMarks1 = prompt(`Enter obtained marks for ${subject1}: `);

// // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// let obtainedMarks2 = prompt(`Enter obtained marks for ${subject2}: `);
// let obtainedMarks3 = prompt(`Enter obtained marks for ${subject3}: `);

// // e) Now calculate total marks and percentage and show the result in browser like this. (Hint: user table)
// let totalObtainedMarks = parseFloat(obtainedMarks1) + parseFloat(obtainedMarks2) + parseFloat(obtainedMarks3);
// let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write(`<table>
//   <thead>
//     <tr>
//       <th>Subject</th>
//       <th>Total Marks</th>
//       <th>Obtained Marks</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>${subject1}</td>
//       <td>${totalMarks}</td>
//       <td>${obtainedMarks1}</td>
//     </tr>
//     <tr>
//       <td>${subject2}</td>
//       <td>${totalMarks}</td>
//       <td>${obtainedMarks2}</td>
//     </tr>
//     <tr>
//       <td>${subject3}</td>
//       <td>${totalMarks}</td>
//       <td>${obtainedMarks3}</td>
//     </tr>
//     <tr>
//       <td><strong>Total</strong></td>
//       <td><strong>${totalMarks*3}</strong></td>
//       <td><strong>${totalObtainedMarks}</strong></td>
//     </tr>
//     <tr>
//       <td><strong>Percentage</strong></td>
//       <td><strong></strong></td>
//       <td><strong>${percentage.toFixed(2)}%</strong></td>
//     </tr>
//   </tbody>
// </table>`);










// --------------9-11-------------
// USER INPUT & CONDITIONAL
// STATEMENT




// --------------9-11.1-------------

// var inputCity = prompt("Enter City Name");
// var cities = ["karachi"];


// for(var i = 0; i <cities.length; i++){
//     if (inputCity === cities[i]){
//   alert("Welcome to city of lights"  );
//     }
// }









// --------------9-11.2-------------



// var gender = prompt("Enter your Gender");
// if( gender == "male"){
//     alert("Good Morning Sir");
// }

// if( gender == "female"){
//     alert("Good Morning Ma'am");
// }








// --------------9-11.3-------------


// var color = prompt("Enter color of road traffic signal");
// if( color == "red"){
//     alert("Must Stop");
// }

// if( color == "yellow"){
//     alert("Ready to move");
// }
// if( color == "green"){
//     alert("Move now");
// }









// --------------9-11.4-------------


// var fuel = prompt("Enter remaining fuel");
// if( fuel == "0.25"){
//     alert("Please refill the fuel in your car");
// }









// --------------9-11.5-------------


//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");          
// }

// condition is true





//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// condition is false





// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// // condition is false





// if (c === 13){
// alert("condition 2 is true");
// }

// // condition is true





// if (++c < 14){
// alert("condition 3 is true");
// }

// // condition is false





// if(c === 14){
// alert("condition 4 is true");
// }

// condition is true





// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// condition is true


//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }





//  if("car" < "cat"){
//   alert("car is smaller than cat");
//   }
  // condition is true









  // --------------9-11.6-------------

//   let tMarks = prompt("Total marks : ");
//   let mObtained = +prompt("Marks obtained " );
//   let Percentage = (mObtained / tMarks ) * 100;
// if (Percentage < 100 && Percentage >=80){
//     document.write("Total Marks : " + tMarks + "<br>" + "Marks obtained : " + mObtained + "<br>"  + "Percentage : " + Percentage + "%" + "<br>" + "Grade : A-one" + "<br>" + "Remarks : Excellent" );
// }
// if (Percentage < 80 && Percentage >=70){
//     document.write("Total Marks : " + tMarks + "<br>" + "Marks obtained : " + mObtained + "<br>"  + "Percentage : " + Percentage + "%" + "<br>" + "Grade : A" + "<br>" + "Remarks : Good" );
// }
// if (Percentage < 70 && Percentage >=60){
//     document.write("Total Marks : " + tMarks + "<br>" + "Marks obtained : " + mObtained + "<br>"  + "Percentage : " + Percentage + "%" + "<br>" + "Grade : B" + "<br>" + "Remarks : You need to improve" );
// }
// if (Percentage < 60 && Percentage >=0){
//     document.write("Total Marks : " + tMarks + "<br>" + "Marks obtained : " + mObtained + "<br>"  + "Percentage : " + Percentage + "%" + "<br>" + "Grade : Fail" + "<br>" + "Remarks : Sorry" );
// }










  // --------------9-11.7-------------


// const secretNumber = 7;

// const guess = +prompt("Guess the secret number (between 1 and 10)");

// if (guess === secretNumber) {
//   document.write("Bingo! Correct answer.");
// } else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
//   document.write("Close enough to the correct answer.");
// } else {
//   document.write("Sorry, that's incorrect.");
// }










  // --------------9-11.8-------------


// const number = +prompt("Enter a number");

// if (number % 3 === 0) {
//   document.write(`${number} is divisible by 3.`);
// } else {
//   document.write(`${number} is not divisible by 3.`);
// }









  // --------------9-11.9-------------


// const number = parseInt(prompt("Enter a number"));

// if (number % 2 === 0) {
//   document.write(`${number} is an even number.`);
// } else {
//   document.write(`${number} is an odd number.`);
// }










  // --------------9-11.10-------------


// const temperature = +prompt("Enter temperature in Celsius");

// if (temperature > 40) {
//   document.write("It is too hot outside.");
// } else if (temperature > 30) {
//   document.write("The Weather today is Normal.");
// } else if (temperature > 20) {
//   document.write("Today's Weather is cool.");
// } else if (temperature > 10) {
//   document.write("OMG! Today's weather is so Cool.");
// } else {
//   document.write("Temperature is too low.");
// }










  // --------------9-11.11-------------


//   var val1 = prompt('enter your first value')
// var sign = prompt('enter your operator')
// var val2 = prompt('enter your second value')


// console.log(val1+sign+val2)
// if(sign === '+'){
//     alert((+val1)+(+val2))
// }
// else if(sign === '-'){
//     alert(val1-val2)
// }
// else if(sign === '*'){
//     alert(val1*val2)
// }
// else if(sign === '/'){
//     alert(val1/val2)
// }
// else if(sign === '%'){
//     alert(val1/val2*100 + '%')
// }










  // // --------------Chapter 12-13-------------
  //       IF…ELSE & ELSE IF STATEMENT,
  //      TESTING SET OF CONDITIONS



    // // --------------Chapter 12-13.1-------------


// let input = prompt("Enter a character: ");

// let ascii = input.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//   console.log("Input is a number.");
// }
// else if (ascii >= 65 && ascii <= 90) {
//   console.log("Input is an uppercase letter.");
// }
// else if (ascii >= 97 && ascii <= 122) {
//   console.log("Input is a lowercase letter.");
// }
// else {
//   console.log("Invalid input.");
// }










    // // --------------Chapter 12-13.2-------------

// let num1 = parseInt(prompt("Enter the first integer: "));
// let num2 = parseInt(prompt("Enter the second integer: "));

// if (num1 === num2) {
//   console.log(`The two integers are equal: ${num1} = ${num2}`);
// }
//  else {
//   let largerNum = num1 > num2 ? num1 : num2;
//   console.log(`The larger integer is: ${largerNum}`);
// }










    // // --------------Chapter 12-13.3-------------


// let number = parseInt(prompt("Enter a number: "));

// if (number > 0) {
//   console.log(`${number} is a positive number`);
// }
//  else if (number < 0) {
//   console.log(`${number} is a negative number`);
// }
//  else {
//   console.log(`${number} is zero`);
// }









    // // --------------Chapter 12-13.4-------------


// let character = prompt("Enter a character: ");

// if (
//   character === "a" || 
//   character === "e" || 
//   character === "i" || 
//   character === "o" || 
//   character === "u"  
   
// ) {
//   console.log(`${character} is a vowel`);
// }
//  else {
//   console.log(`${character} is not a vowel`);
// }







    // // --------------Chapter 12-13.5-------------


// const correctPassword = "12345";

// let userPassword = prompt("Please enter your password:");

// if (!userPassword) {
//   console.log("Please enter your password");
// }
//  else {
//   if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password");
//   }
//    else {
//     console.log("Incorrect password");
//   }
// }









    // // --------------Chapter 12-13.6-------------


//     var greeting;
//    var hour = 13;
//    if (hour < 18) {
//    greeting = "Good day";
//   }
//   else {
//  greeting = "Good evening";
//  }










    // // --------------Chapter 12-13.7-------------


// let time = parseInt(prompt("Enter time in 24-hour format (e.g. 1900): "));

// let hour = Math.floor(time / 100);
// let minute = time % 100;
// let meridiem;

// if (hour === 0) {
//   hour = 12;
//   meridiem = "Good morning";
// } else if (hour < 12) {
//   meridiem = "Good afternoon";
// } else if (hour === 12) {
//   meridiem = "Good evening";
// } else {
//   hour = hour - 12;
//   meridiem = "Good night";
// }

// console.log(`The time is ${hour}:${minute < 10 ? "0" + minute : minute} ${meridiem}`);











// let time = parseInt(prompt("Enter time in 24-hour format (e.g. 1900): "));



// if (time >= 0000 && time<1200) {
//   time = "Good morning";
// } 

// else if (time >= 1200 && time<1700) {
//   meridiem = "Good afternoon";
// }

//  else if (time >= 1700 && time<2100) {
//   meridiem = "Good evening";
// } 

//  else if (time >= 2100 && time<=1200) {
//   meridiem = "Good night";
// } 

// console.log(meridiem );









                           //  ARRAYS


    // // --------------Chapter 14-16.1-------------
  

    // const studentNames = [];










    // // --------------Chapter 14-16.2-------------
  

    // const studentNames = [];
    // console.log();










    // // --------------Chapter 14-16.3-------------


    // const fruits = ["apple", "banana", "orange"];
    //    console.log(fruits);



    // const fruits = new Array("apple", "banana", "orange");
    //   console.log(fruits);










        // // --------------Chapter 14-16.4-------------


      //   const numbers = [1, 2, 3, 4, 5];
      // console.log(numbers);




      //   const numbers = new Array(1, 2, 3, 4, 5);
      // console.log(numbers);










     // // --------------Chapter 14-16.5-------------


    //  const booleanValues = [true, false, true, false];
    //   console.log(booleanValues);




      // const booleanValues = new Array(true, false, true, false);
            // console.log(booleanValues);










   // // --------------Chapter 14-16.6-------------



      // const mixedValues = [1, "hello", true, null, {name: "John"}];
      // console.log(mixedValues);



      // const mixedValues = new Array(1, "hello", true, null, {name: "John"});
      //       console.log(mixedValues);










   // // --------------Chapter 14-16.7-------------


//       const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2> Qualifications:</h2>");

// document.write("<ol>");

// for (let i = 0; i < qualifications.length; i++) {
//   document.write("<li>" + qualifications[i] + "</li>");
// }

// document.write("</ol>");











   // // --------------Chapter 14-16.8-------------



  //  const students = ["John", "Jane", "Bob"];
  //  const scores = [430, 380, 450];
  //  const totalMarks = 500;
   
  //  document.write("<h2>Student Scores:</h2>");
   
  //  for (let i = 0; i < students.length; i++) {
  //    const percentage = (scores[i] / totalMarks) * 100;
  //    document.write(students[i] + " scored " + scores[i] + " out of " + totalMarks + ", which is " + percentage + "%<br>");
  //  }










     // // --------------Chapter 14-16.9-------------


    //  const colors = ["red", "green", "blue", "yellow", "orange"];

    //  document.write("<h2>Original Array:</h2>");
    //  document.write(colors.join(", ") + "<br><br>");
     
    //  const addColorBeginning = prompt("Enter a color to add to the beginning of the array:");
    //  colors.unshift(addColorBeginning);
     
    //  document.write("<h2>Updated Array (Added color to beginning):</h2>");
    //  document.write(colors.join(", ") + "<br><br>");
     
    //  const addColorEnd = prompt("Enter a color to add to the end of the array:");
    //  colors.push(addColorEnd);
     
    //  document.write("<h2>Updated Array (Added color to end):</h2>");
    //  document.write(colors.join(", ") + "<br><br>");
     
    //  colors.unshift("purple", "pink");
     
    //  document.write("<h2>Updated Array (Added two colors to beginning):</h2>");
    //  document.write(colors.join(", ") + "<br><br>");
     
    //  colors.shift();
     
    //  document.write("<h2>Updated Array (Deleted first color):</h2>");
    //  document.write(colors.join(", ") + "<br><br>");
     
    //  colors.pop();
     
    //  document.write("<h2>Updated Array (Deleted last color):</h2>");
    //  document.write(colors.join(", ") + "<br><br>");
     
    //  const addColorIndex = parseInt(prompt("Enter the index where you want to add the color:"));
    //  const addColorName = prompt("Enter the color name to add at the index:");
    //  colors.splice(addColorIndex, 0, addColorName);
     
    //  document.write("<h2>Updated Array (Added color at user-defined index):</h2>");
    //  document.write(colors.join(", ") + "<br><br>");
     
    //  const deleteColorIndex = parseInt(prompt("Enter the index from where you want to delete the color(s):"));
    //  const deleteColorCount = parseInt(prompt("Enter the number of colors you want to delete:"));
    //  colors.splice(deleteColorIndex, deleteColorCount);
     
    //  document.write("<h2>Updated Array (Deleted color(s) at user-defined index):</h2>");
    //  document.write(colors.join(", "));
     










         // // --------------Chapter 14-16.10-------------


//          const scores = [75, 82, 90, 68, 92, 85, 79];

// document.write("<h2>Score of Students:</h2>");
// document.write(scores.join(", ") + "<br><br>");

// scores.sort(function(a, b) {
//   return a - b;
// });

// document.write("<h2>Ordered Score of Students:</h2>");
// document.write(scores.join(", "));










         // // --------------Chapter 14-16.11-------------


// const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

// const selectedCities = cities.slice(0, 3);

// console.log("Cities:", cities); // ["New York", "London", "Paris", "Tokyo", "Sydney"]
// console.log("Selected cities:", selectedCities); // ["New York", "London", "Paris"]










         // // --------------Chapter 14-16.12-------------


// const arr = ["This", "is", "my", "cat"];

// const singleString = arr.join(" ");

// console.log(singleString); // "This is my cat"










//          // // --------------Chapter 14-16.13-------------


// const fifoArray = [];

// fifoArray.push("first");
// fifoArray.push("second");
// fifoArray.push("third");

// console.log(fifoArray); 

// // Remove the first value from the array (FIFO)
// const firstValue = fifoArray.shift();

// console.log(firstValue); // "first"
// console.log(fifoArray); // ["second", "third"]









//          // // --------------Chapter 14-16.14-------------


// const lifoArray = [];

// lifoArray.push("first");
// lifoArray.push("second");
// lifoArray.push("third");

// console.log(lifoArray); 

// // Remove the last value from the array (LIFO)
// const lastValue = lifoArray.pop();

// console.log(lastValue); // "third"
// console.log(lifoArray); // ["first", "second"]










         // // --------------Chapter 14-16.15-------------


// const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// let selectMenu = "<select>";

// for (let i = 0; i < phoneManufacturers.length; i++) {
//   selectMenu += `<option value="${phoneManufacturers[i]}">${phoneManufacturers[i]}</option>`;
// }

// selectMenu += "</select>";

// // Display the select menu in the browser
// document.write(selectMenu);












                                  // ARRAYS AND LOOP
  // // --------------Chapter 17-20.1-------------


  // const myArray = [[]]; 
  //  empty 2-dimensional array with one empty array inside

  // myArray[0].push(1); // adds the element 1 to the first (and only) inner array


  // also declare a larger multidimensional array with multiple empty arrays inside

  










    // // --------------Chapter 17-20.2-------------


    // const matrix = [
    //   [1, 2, 3,"<br>"],
    //   [4, 5, 6 ,"<br>"],
    //   [7, 8, 9]
    // ];
    // document.write(matrix);
    









        // // --------------Chapter 17-20.3-------------


        // for (let i = 1; i <= 10; i++) {
        //   document.write("<br>" + i);
        // }
        










     // // --------------Chapter 17-20.4-------------


//      const number = parseInt(prompt("Enter a number to print its multiplication table:"));
// const length = parseInt(prompt("Enter the length of the multiplication table:"));

// for (let i = 1; i <= length; i++) {
//   document.write(`${number} x ${i} = ${number * i}` + "<br>");
// }










     // // --------------Chapter 17-20.5-------------



//      const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i] );
// }
// for (let i = 0; i < fruits.length; i++ ) {
//   console.log(`Element at index ${i} is ${fruits[i]}`);
// }





   



     // // --------------Chapter 17-20.6-------------


    //  document.write("<h3>Counting:</h3> " );
    //  for (let i = 1; i <= 15; i++) {
    //   document.write(i + ",");
    // }
    

    // document.write("<h3>Reverse counting:</h3> " );
    // for (let i = 10; i >= 1; i--) {
    //   document.write(i + ",");
    // }
    


    // document.write("<h3>Even:</h3> " );
    // for (let i = 0; i <= 20; i += 2) {
    //   document.write(i + ",");
    // }
    

    // document.write("<h3>Odd:</h3> " );
    // for (let i = 1; i <= 19; i += 2) {
    //   document.write(i + ",");
    // }
    

    // document.write("<h3>Series:</h3> " );
    //  for (let i = 1; i <= 10; i++) {
    //   document.write( i * 2 + "k" + ",");
    // }
        









         // // --------------Chapter 17-20.7-------------


//          const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// const userInput = prompt("Enter an item to search for:");

// const foundIndex = A.findIndex(item => item.toLowerCase() === userInput.toLowerCase());

// if (foundIndex !== -1) {
//   document.write(`${userInput} is available at index ${foundIndex} in our baker`);
// } 
// else {
//   document.write(`We are sorry.${userInput} is not available in our bakery.`);
// }








         // // --------------Chapter 17-20.8-------------


// const A = [24, 53, 78, 91, 12];

// let largestNum = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largestNum) {
//     largestNum = A[i];
//   }
// }

// document.write(`The largest number is ${largestNum}.`);










         // // --------------Chapter 17-20.9-------------


        //  const A = [24, 53, 78, 91, 12];

        //  let smallestNum = A[0];
         
        //  for (let i = 1; i < A.length; i++) {
        //    if (A[i] < smallestNum) {
        //      smallestNum = A[i];
        //    }
        //  }
         
        //  document.write(`The smallest number is ${smallestNum}.`);
         









           // // --------------Chapter 17-20.10-------------


          //  for (let i = 1; i <= 20; i++) {
          //   const multiple = i * 5;
          //   document.write(multiple + ",");
          // }
          
        
