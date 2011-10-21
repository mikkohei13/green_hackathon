
document.getElementById("ctl00_ContentPlaceHolderLeftCol_toplists1_toplistFlight1_ctl00_price_link").style.background='red !important';

var greeting = "hola, ";
var person_name = "Roberto";
var button = document.getElementById("ctl00_ContentPlaceHolderLeftCol_toplists1_toplistFlight1_ctl00_price_link");
button.addEventListener("click", function() {
  alert(greeting + person_name + ".");
}, false);


