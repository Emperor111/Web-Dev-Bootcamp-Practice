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
