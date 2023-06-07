// $("h1").css("color","red"); //change css
// $("button"); 

// $("h1").addClass("big-title"); //Add Class
// $("h1").text("GoodBye"); //Change text
// $("button").text("Don't Click Me");

// //Changing & Manipulating Attributes
// console.log($("img").attr("src"));
// $("a").attr("href","https://www.yahoo.com")

// //Event Listeners using jQuery

// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

// $("input").keydown(function(event){
//     console.log(event.key);
// });

// $("body").keydown(function(event){
//     $("h1").text(event.key);
// });

$("h1").on("mouseover", function(){
    $("h1").css("color","purple");
});

//Adding and Removing Element with jquery
$("h1").before("<button>New</button>"); //also prepend or append instead of before

$("button").on("click",function(){
    $("h1").toggle();   //or fade out or fade in or fadetoggle or slideup or slidedown or slidetoggle
});

$("button").on("click",function(){
    $("h1").animate({opacity: 0.5});   //or fade out or fade in or fadetoggle or slideup or slidedown or slidetoggle
});