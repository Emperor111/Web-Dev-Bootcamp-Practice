// alert("Hi! My name is Eshan.")
// var your_name = prompt("What is your name?");
// var your_occupation = prompt("Hello "+ your_name +" What is your occupation")
// var help = prompt("So "+ your_name + " How can i help you in relation to " + your_occupation)
// alert("Okay " + your_name + ", Let's work together on " + help)

// length = your_name.length;
// if (length>2){
//     var xtra = (length - 2);
//     alert("You have crossed the word limit by " + xtra)};
// //comment
// /*Multiline
// comment*/

// var tweet = prompt("Write your tweet here. Word limit is 20 characters.")
// alert("Your tweet is of size " + tweet.length +". Click 'Ok' to see your tweet.")
// alert(tweet.slice(0,21))

// name = prompt("What is your name?");
// var letter1 = (name.slice(0,1)).toUpperCase();
// var remaining = (name.slice(1, name.length)).toLowerCase();
// alert("Hello " + letter1 + remaining);

// var dog_age = prompt("What is the age of your dog?");
// var human_age = ((dog_age - 2) * 4) + 21;
// alert(human_age);

// function getMilk(money) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//   //if a bottle costs 2 dollars
//     var bottles = Math.floor(money/2);
//     console.log("Buy " + bottles + " bottles of milk.");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     alert("Robby is about to return with " + bottles + " bottles of milk.")
//     return money % 2; //Remainder of this division.
//   }
//   var money = prompt("How much money did you give to robby?")
//   getMilk(money)
//   var change = getMilk(money);
//   console.log(change);

//BMI Calculator
// Create your function below this line.
// The first parameter should be the weight and the second should be the height.
// function bmiCalculator(weight, height){
//     var bmi = weight/(Math.pow(height,2));
//     return Math.round(bmi);
//   }
//   // If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
    
//   // This is the BMI Formula
  
//   /* var bmi = bmiCalculator(65, 1.8); 
  
//   bmi should equal 20 when it's rounded to the nearest whole number.
  
//   */
//   var bmi = bmiCalculator(65,1.8);
//   console.log(bmi);

//Life Remaining
// function lifeInWeeks(age) {
    
//     /************Don't change the code above************/    
        
//         //Write your code here.
        
//         //if max age is 90
//         var days = (90 - age) * 365;
//         var weeks = (90 - age) * 52;
//         var months = (90 - age) * 12;
//         console.log("You have " + days +" days, "+ weeks +" weeks, and "+ months +" months left.")
    
        
        
        
        
//     /*************Don't change the code below**********/
//     }
//     var age = prompt("What is your age?");
//     lifeInWeeks(age)    

//Random Love Calculator
// alert("Welcome to Love Calculator.");
// var name1 = prompt("Enter your name.");
// var name2 = prompt("Enter your partner's name.");

// function love(){
//     var percent = Math.round((Math.random() * 100) + 1);
//     return percent
// }
// score = love()
// alert(name1 + "'s love percent with " + name2 + " is " + score);

// //Random Love Calculator
// alert("Welcome to Love Calculator.");
// var name1 = prompt("Enter your name.");
// var name2 = prompt("Enter your partner's name.");

// function love(){
//     var percent = Math.round((Math.random() * 100) + 1);
//     return percent
// }
// score = love()
// if (score > 70){
//     alert(name1 + "'s love percent with " + name2 + " is " + score + "Your love is like kanye loves kanye.");
// } else {
//     alert(name1 + "'s love percent with " + name2 + " is " + score);
// } 

//Guest List Checker
// var guestlist = ["Eshan","Aman","Ayush","Shashank","Abhijeet"];
// var name = prompt("What is your name?")
// if (guestlist.includes(name)){
//     alert("Welcome!")
// }else{
//     alert("Sorry, maybe next time.")
// }

//Fizzbuzz .push / ,pop
// var output=[];
// var count=1;
// function fizzbuzz(){
// if (count%3==0 && count%5==0){
//     output.push("fizzbuzz");
//     count++;
// }
// else if (count%3===0){
//     output.push("fizz");
//     count++;
// }
// else if (count%5===0){
//     output.push("buzz");
//     count++;        
// }
// else {
//     output.push(count); 
//     count++;}
// console.log(output)
// }

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }

//For loop
// for (i=0; i<2; i++){

// }

//Fibonacci Series
// function fibonacciGenerator (n) {
//     //Do NOT change any of the code above 👆
        
//         //Write your code here:
//         //Fibonacci Series
//         var output = [];
//         if (n===1){
//             output = [0];
//         }
//         else if (n===2){
//             output = [0,1];
//         }
//         else{
//             output = [0,1];    
//             for (var i=2; i<n; i++){
//                 output.push(output[i-2] + output[i-1]);
//             }
//         }
//         return output;
    
//         //Return an array of fibonacci numbers starting from 0.
        
//     //Do NOT change any of the code below 👇
//     }
    
//DOM - Document Object Model //type in console
// document;
// document.firstElementChild;
// document.firstElementChild.firstElementChild;
// document.firstElementChild.lastElementChild;
// var heading = document.firstElementChild.lastElementChild.firstElementChild;



// heading.innerHTML = "GoodBye";

// document.querySelector("input").click();
// //Call - Set - Get Properties & Method

// //GetElements
// document.getElementsByTagName("li");
// document.getElementsByTagName("li")[3].style.color="purple";
// document.getElementsByTagName("li").length;
// document.getElementsByClassName("btn");
// //but to select an specific item, you have to take class as an array, hence
// document.getElementsByClassName("btn")[0].style.color="Blue";
// document.getElementById("h1").innerHTML="GoodBye";

// //queryselector
// document.querySelector("Anything, Id, Class, String, tag using css method")
// document.querySelectorAll("")[].;
// document.querySelector(".btn").style.backgroundColor="yellow";
// document.querySelector("button").classList;
// document.querySelector("button").classList.add("invisible");
// document.querySelector("button").classList.remove("invisible");
// document.querySelector("button").classList.toggle("invisible");

// document.querySelector("h1").textContent;
// document.querySelector("h1").innerHTML="<em>invisible</em>";
// document.querySelector("a").attributes;
// document.querySelector("a").getAttribute("href");
// document.querySelector("a").getAttribute("href", "https://www.bing.com");

//Higher Order Functions and Passing Functions as Arguements
//function add(num1,num2){
//    return num1 + num2;}
//function subtract(num1,num2){
//    return num1 - num2;}
//function multiply(num1,num2){
//    return num1 * num2;}
//function divide(num1,num2){
//    return num1 / num2;}
//function calculator(num1,num2, operator) {
//    return operator(num1,num2);}

//debugger;
//calculator(2,8,multiply) //for chrome debugger

//Constructor Function
function BellBoy (name, age, hasWorkPermit, languages) {
	this.name = name;
	this.age = age;
	this.hasWorkPermit = hasWorkPermit;
	this.languages = languages;
}
var BellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);