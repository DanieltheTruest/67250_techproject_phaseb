var x = 5
var y = 6
var z = x + y
console.log(z)

var A = "Hello "
var B = "World"
var C = A + B
console.log(C)

function sumnPrint(x1, x2){
    var sum = x1 + x2
    console.log(sum)
}

sumnPrint(x, y)
sumnPrint(A, B)

if (C.length > z) {
    console.log(C)
}
    if (C.length < z) {
    console.log(z)
    }
    
else{
    console.log("good job")
}
/*
L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(L) {
    for (var i = 0; i < L.length; i++) {
        if (L[i] === "Banana") {
            alert("Found the Banana!");
            return;
        }
    }}

findTheBanana(L1);
findTheBanana(L2);
*/

var now = new Date()
var hours = now.getHours()

function greeting(hour) {
    var element = document.getElementById("greeting");
    if (!element) return;
    var h = Number(hour);

    if (h < 5 || h >= 20) {
        element.innerHTML = "Good night";
    } else if (h < 12) {
        element.innerHTML = "Good morning";
    } else if (h < 18) {
        element.innerHTML = "Good afternoon";
    } else {
        element.innerHTML = "Good evening";
    }
}


greeting(hours)

function addYear() {
    var copyYear = document.getElementById("copyYear");
    if (!copyYear) return;
    var currentYear = new Date().getFullYear();
    copyYear.innerHTML = currentYear; }


function ActiveNav() {

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();


if (typeof $ !== "undefined") {
  $("#readMore").click(function () {
    $("#longIntro").show();
    $("#readMore").hide();
    $("#readLess").show();
  });

  $("#readLess").click(function () {
    $("#longIntro").hide();
    $("#readMore").show();
    $("#readLess").hide();
  });
}


function showForm(date) {
  document.getElementById("ticketForm").style.display = "block";
  document.getElementById("selectedDate").innerHTML = "Selected Date: " + date;
}

function submitForm() {
  alert("Redirecting to payment system.");
}


function toggleNav() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

if (document.getElementById('map')) {
  var map = L.map('map').setView([36.1556, -86.7844], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
}