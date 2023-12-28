                                 // CHAPTER 17-20

// let twoDarr = [[1],[]];

// console.log(twoDarr);


// Q3
// for(let i = 1; i<=10; i++){
//     console.log(i);
// }


// Q4
// var tableNumber= +prompt("Enter Table Number");
// var tableLength= +prompt("Enter Table Length");

// for(let i =1; i<=tableLength; i++){
//     console.log(`${tableNumber} x ${i} = ${tableNumber*i} `);
// }


// Q5
// var fruits = ["apple","banana","mango","orange","strawberry"];

// for(let i =0; i < fruits.length; i++){
// document.write(fruits[i] + "<br>")
// }

// document.write(`Element at index 0 is ${fruits[0]} <br>`);
// document.write(`Element at index 1 is ${fruits[1]} <br>`);
// document.write(`Element at index 2 is ${fruits[2]} <br>`);
// document.write(`Element at index 3 is ${fruits[3]} <br>`);
// document.write(`Element at index 4 is ${fruits[4]} <br>`);


// Q6
// var counting= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// document.write(`<h2>Counting:</h2> ${counting}`)

// var reverseCounting = [10,9,8,7,6,5,4,3,2,1];
// document.write(`<h2>Reverse Counting:</h2> ${reverseCounting}`)

//  var numArray =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var evenArray=[];
// var oddArray=[];

// for(var i =0; i< numArray.length; i++){
//     if(numArray[i] % 2===0){
//         evenArray.push(numArray[i]);
//     }else{
//         oddArray.push(numArray[i]);

//     }
// }
// document.write(`<h2>Even:</h2>  ${evenArray.join(", ")} <br>`);
// document.write(`<h2>Odd:</h2>  ${oddArray.join(", ")} <br>`);


// var series = ["2k","4k","6k","8k","10k","12k","14k","16k","18k","20k"];
// document.write(`<h2>Series:</h2> ${series}`);


// Q7
// Array of items
// const items = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt user for input
// const userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");

// // Check if the entered item is in the array
// if (userInput !== null) {
//   const searchedItem = userInput.toLowerCase(); // Convert to lowercase for case-insensitive comparison

//   if (items.includes(searchedItem)) {
//     document.write(`${searchedItem} is available at index ${items.indexOf(searchedItem)} in our bakery.`);
//   } else {
//     document.write(`We are sorry."${searchedItem}" is not available in our bakery.`);
//   }
// } else {
//   document.write("Invalid input or user canceled.");
// }


// Q8

// var arrNum = [24,53,78,91,12];
// var largestNumber = arrNum[0];

// for(var i = 1; i< arrNum.length; i++){
//     if(arrNum[i] > largestNumber){
//         largestNumber=arrNum[i];
//     }
// }

// document.write(`Array items: 24,53,78,91,12 <br>`);
// document.write(`The Largest Number is ${largestNumber}`)


// Q9
// var arrNum = [24,53,78,91,12];
// var smallestNumber = arrNum[0];

// for(var i = 1; i<=arrNum.length; i++){
//     if(arrNum[i] <  smallestNumber){
//         smallestNumber=arrNum[i];
//     }
// }

// document.write(`Array items: 24,53,78,91,12 <br>`);
// document.write(`The Smallest Number is ${smallestNumber}`)


// Q10
// for(i = 1; i <= 100; i++){
//     if(i % 5 === 0){
//         document.write(`${i}`);
//         }
// }



                              //  CHAP 21 -25


//  Q1

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + lastName;

// console.log(fullName);

// Q2

// var phoneNum = "Oppo A5s";
// var phoneLength = phoneNum.length;

// console.log(`My Favourite Phone is: ${phoneNum}`);
// console.log(`Length of String: ${phoneLength}`)

// Q3

// var str =`Pakistani`;
// var str2= str.indexOf("n");

// console.log(`String:${str}`);
// console.log(`Index of 'n':${str2}`);


// Q4

// var greet = "Hello World";

// console.log(`String: ${greet}`);
// console.log(`last index of l is: ${greet.lastIndexOf("l")}`)

//  Q5

// var str =`Pakistani`;
// var str2= str[3];

// console.log(`String:${str}`);
// console.log(`Character at index 3 is:${str2}`);


// Q6

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// console.log(firstName + " " +lastName);


// Q7

// var city = "Hyderabad";
// var word = "Hyder";
// var replace = "Islam";

// console.log(`City: ${city}`)
// console.log(`After replacement: ${city.replace(word,replace)}`);

// Q8

// var msg = "Ali and Sami are bestfriends.They play cricket and football together."
// var word = "and";
// var replace = "&";

// document.write(`<p>Before replacement: ${msg}</p>`);
// document.write(`<p>After replacement: ${msg.replaceAll(word,replace)}</p>`);

// Q9

// var value= "472";
// var value2 = Number("472");

// document.write(`<h4>Value: ${value}</h4>`);
// document.write(`<h4>Type: ${typeof(value)}</h4>`);

// document.write(`<h4>Value: ${value2}</h4>`);
// document.write(`<h4>Type: ${typeof(value2)}</h4>`);


// Q10

// var userInput = prompt("Enter Any Key");

// document.write(`<h4>User Input: ${userInput}</h4>`);
// document.write(`<h4>Upper Case: ${userInput.toUpperCase()}</h4>`);

//  Q11

// var userInput = prompt("Enter Any Key");

// document.write(`<h4>User Input: ${userInput}</h4>`);
// document.write(`<h4>Title Case: ${userInput.charAt(0).toUpperCase() + userInput.slice(1)}</h4>`);


//  Q12

// var num = 35.36;
// var num2 = num.toString().replace('.','');
// document.write(`Number: ${num}<br>`);
// document.write(`Result: ${num2}<br>`);


//  Q13

// Q14

// Array of items
// const items = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt user for input
// const userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");

// // Check if the entered item is in the array
// if (userInput !== null) {
//   const searchedItem = userInput.toLowerCase(); // Convert to lowercase for case-insensitive comparison

//   if (items.includes(searchedItem)) {
//     document.write(`${searchedItem} is available at index ${items.indexOf(searchedItem)} in our bakery.`);
//   } else {
//     document.write(`We are sorry."${searchedItem}" is not available in our bakery.`);
//   }
// } else {
//   document.write("Invalid input or user canceled.");
// }


// Q15

// Q16

// var university = "Sindh Madressatul-Islam University Karachi";
// var universityArray = university.split(" ");

// for(i= 0; i < universityArray.length; i++)
// document.write(universityArray[i]+"<br>")

// Q17
// var userInput = prompt(`Enter any Key`);

// document.write("User Input: "+userInput +"<br>");
// document.write(`Last Character of Input: ${userInput.charAt(userInput.length-1)}`) 


// Q18
// var str ="The quick brown fox jumps over the lazy dog";

// document.write("Text: "+str);
// document.write(charo)


                              //CHAP 26-30
//Q1   
// var userInput = (prompt("Enter positive integer:"));

// document.write(`number: ${Number(userInput)} <br>`);
// document.write("round off value: " +Math.round(userInput) +"<br>");
// document.write("Floor value: " +Math.floor(userInput) +"<br>");
// document.write("ceil value: " +Math.ceil(userInput) +"<br>");

// Q2
// var userInput = (prompt("Enter negative integer:"));

// document.write(`number: ${Number(userInput)} <br>`);
// document.write("round off value: " +Math.round(userInput) +"<br>");
// document.write("Floor value: " +Math.floor(userInput) +"<br>");
// document.write("ceil value: " +Math.ceil(userInput) +"<br>");

// Q3
// var num =-4;
// var num2 = 5;
// document.write(`The absolute value of ${num} is ${Math.abs(num)}<br>`);
// document.write(`The absolute value of ${num2} is ${Math.abs(num2)}`);

// Q4
// var firstRandom = Math.round(Math.random()*6);
// var secondRandom = Math.round(Math.random()*6);

// document.write(`Random dice value: ${firstRandom} <br>`);
// document.write(`Random dice value: ${secondRandom} <br>`);

// Q5
// var firstRandom = Math.floor(Math.random()*3);
// // var secondRandom = Math.round(Math.random()*3);

// if (firstRandom === 2){
// document.write(`${firstRandom} <br> Random coin value: Heads`);
// }
// else if(firstRandom === 0){
//     document.write(`${firstRandom} <br> Random coin value: Try Again`)
// }else{
// document.write(`${firstRandom} <br> Random coin value: Tails`);
// }

// Q6

// var randomNumber = Math.floor(Math.random()*101);

// document.write(`<h2>Random Number Between 1 to 100: ${randomNumber}</h2>`);

// Q7
// var weight = parseFloat(prompt("Enter user weight"));

// document.write(`The weight of user is ${weight}KGS`);


// Q8
// var userInput = +prompt("Enter a number between 1 to 10");
// var secretNumber = Math.floor(Math.random()*11);

// if(userInput===secretNumber){
//     alert("Congratulations")
// }
// else if(userInput !==null){
//     alert("Enter any number");
// }else{
//     alert("Try again!");
// }






