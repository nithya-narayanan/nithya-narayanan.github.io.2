/*
Author: Nithya Narayanan
Project: petparent.com
Course: Usability Design for Websites
Date: 15 June, 2016

References: 
		1) w3schools.com. "How To Responsive Top Navigation". Last accessed on July 22, 2016. http://www.w3schools.com/howto/howto_js_topnav.asp
*/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 5 seconds
}
