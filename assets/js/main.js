var navLinks = document.querySelectorAll("nav div div ul li a"),
    navBar = document.getElementById("mainNav"),
    header = document.getElementById("header"),
    navBrand = document.getElementsByClassName("navbar-brand");

var body = document.body,
    html = document.documentElement;

window.onload = function() {
    header.style.opacity = 1.0;
  }

// listener for the scroll event using the throttling function
window.addEventListener("scroll", throttle(colorChange, 50));

//the throttling function - throttling the event handler fornot firing every small scroll-event - thanks to Camilo Reyes from sitepoint
function throttle(fn, wait) {
        var time = Date.now();
        return function () {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        }
    }

// function for the navbar color change (= callback of the throttle)
function colorChange(){
    var fromTop = window.scrollY + window.innerHeight/100*50;    //  triggering at 50% height for opacity
    for (var i = 0; i < navLinks.length; i++) {
        var section = document.querySelector(navLinks[i].hash);
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            switch (section.id) {
                case "start":
                    navBrand[0].style.color = "#5CCC3D";
                    navBar.style.backgroundPositionY = "25%";
                    section.style.opacity = 1.0;
                    break;
                case "mid":
                    navBrand[0].style.color = "#6966FF";
                    navBar.style.backgroundPositionY = "50%";
                    document.getElementById("midCont").style.opacity = 1.0;
                    break;
                case "end":
                    navBrand[0].style.color = "#FFAC80";
                    navBar.style.backgroundPositionY = "75%";
                    section.style.opacity = 1.0;
                    break;
                default:
                    navBrand[0].style.color = "black";
                    navBar.style.backgroundPositionY = "0%";
            }
        }
    }
}