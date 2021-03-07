/* start navbar */

let myButton = document.querySelector(".navbar-button"),
    
    navTitle = document.querySelector(".nav-title");

myButton.onclick = function () {
    
    navTitle.classList.toggle("active");
}

/* end navbar */