var greeting = "hola, ";
var button = document.getElementById("ctl00_ContentPlaceHolderLeftCol_searchFirstPage_1_SearchHeader");
button.person_name = "Roberto";
button.addEventListener("click", function() {
  alert(greeting + button.person_name + ".");
}, false);


