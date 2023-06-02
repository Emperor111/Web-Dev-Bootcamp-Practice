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

var dog_age = prompt("What is the age of your dog?");
var human_age = ((dog_age - 2) * 4) + 21;
alert(human_age);