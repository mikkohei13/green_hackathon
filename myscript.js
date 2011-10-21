
var i = 0;
while (i < 10)
{
// Changing style
//	document.getElementById("ctl00_ContentPlaceHolderLeftCol_toplists1_toplistFlight1_ctl0" + i + "_price_link").style.background='red !important';

//	jQuery.getJSON( url [, data] [, success(data, textStatus, jqXHR)] );

	var inner = document.getElementById("ctl00_ContentPlaceHolderLeftCol_toplists1_toplistFlight1_ctl0" + i + "_price_link").innerHTML;

$.getJSON("http://www.luomus.fi/projects/carbonflight/get/?",
  {
    from: "Stockholm",
    to: "Phuket"
  },
  var newinner = inner + " <b>CO<sup>2</sup><img width='20' height='5' src='http://www.flygstolen.se/images/icons/twitter_02.png' /></b>";
);
	document.getElementById("ctl00_ContentPlaceHolderLeftCol_toplists1_toplistFlight1_ctl0" + i + "_price_link").innerHTML = newinner;
	i++;
}


