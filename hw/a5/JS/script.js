
$(document).ready(function() {
var confirmCookies = confirm("Do you want a Cookie?");
alert("Let's get Bakin'!: ");

/*

*/
$(".myFunction").on("click", function() {
myFunction();
});
function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("funkytion").innerHTML = greeting;
}

  var bakingSteps = ["Bake", "Eat", "Regret Eating More", "Continue Eating More"];

  for (var i = 0; i < bakingSteps.length; i++) {

  }
  $("#click-me").on("click", function() {
    alert("Be Proud!");
  });
  $("#mouse-over-me").on("mouseover", function() {
    alert("Great Job!, Eat Up!");
  });
  $("#mouse-leave-me").on("mouseleave", function() {
    alert("and Share if you want to");
  });
$( "#looper" ).on("mouseover", function() {

//$( "#looper" ).hide( "slow", function() {
    $("#looper").hide();
});
    $("#looper").on("mouseleave", function() {
    $("#looper").show();
  });

  $("button").click(function(){
       $("#html").html("Hello <b>Cookie Monster!</b>");
console.log("test");
   });
});
