//  Main navigation
var navbarCont = document.getElementById("mainNavCont");
var navbar = document.getElementById("mainNav")
var navbarLogo = document.getElementById("navLogo");

//  Mobile Nav
var hamburger = document.getElementById("mobileHamburger");
var mobileNav = document.getElementById("mobileNav");
var mobileNavClose = document.getElementById("mobileNavClose");

hamburger.addEventListener("click", mobileNavDriver);
mobileNavClose.addEventListener("click", mobileNavDriver);

window.onscroll = function() {
    headerChanger();
}

//  Change header from transparent to having a background
function headerChanger() {
    //  We scrolled down
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        navbarCont.classList.remove("main-nav-cont-trans");
        navbarCont.classList.remove("pt-5");
        navbarCont.classList.add("main-nav-cont-light");
        navbarCont.classList.add("pt-3");

        navbar.classList.remove("main-nav-trans");
        navbar.classList.add("main-nav-light");

        navbarLogo.src = "images/logo/default.svg";

    } else {    //  Back up top
        navbarCont.classList.add("main-nav-cont-trans");
        navbarCont.classList.add("pt-5");
        navbarCont.classList.remove("main-nav-cont-light");
        navbarCont.classList.remove("pt-3");

        navbar.classList.add("main-nav-trans");
        navbar.classList.remove("main-nav-light");

        navbarLogo.src = "images/logo/default_w.svg";
    }
}

function mobileNavDriver() {
    
    var menuWidth = mobileNav.style.width;

    if(menuWidth != "100%") {
        mobileNav.style.width = "100%";
        navbarCont.classList.add("d-none");
    } else {
        mobileNav.style.width = "0%";
        navbarCont.classList.remove("d-none");
    }

    console.log(menuWidth)
}