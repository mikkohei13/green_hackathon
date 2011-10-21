
var i = 0;
while (i < 10)
{
	document.getElementById("ctl00_ContentPlaceHolderLeftCol_toplists1_toplistFlight1_ctl0" + i + "_price_link").style.background='red !important';
	i++;
}




var greeting = "hola, ";
var person_name = "Roberto";
var button = document.getElementById("ctl00_ContentPlaceHolderLeftCol_toplists1_toplistFlight1_ctl00_price_link");
button.addEventListener("click", function() {
  alert(greeting + person_name + ".");
}, false);


