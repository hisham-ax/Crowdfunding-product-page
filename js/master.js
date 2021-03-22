/* start navbar */

let myButton = document.querySelector(".navbar-button"),
    
    navTitle = document.querySelector(".nav-title");

myButton.onclick = function () {
    
    navTitle.classList.toggle("active");
}

/* end navbar */


/* start section back */

var back = document.querySelector(".back"),
    
    buttonback = document.querySelector(".bamboo-body button"),
    
    stand = document.querySelectorAll('.back-project .stand'),

    pledge = document.querySelectorAll(".stand .enter-pledge"),
    
    checkBox = document.querySelector('.stand-content input'),
    
    i;

buttonback.onclick = function () {
    
    back.classList.add("active");

}

stand[0].onclick = function () {
    
    this.style.border = '2px solid  hsl(176, 50%, 47%)';
}
stand[1].onclick = function () {
    
    this.style.border = '2px solid  hsl(176, 50%, 47%)';
    
    pledge[0].classList.add('active')
    
}
stand[2].onclick = function () {
    
    this.style.border = '2px solid  hsl(176, 50%, 47%)';
    
    pledge[1].classList.add('active')
    
}
stand[3].onclick = function () {
    
    this.style.border = '2px solid  hsl(176, 50%, 47%)';
    
    pledge[2].classList.add('active')
    
}

/* end section back */

/* start section supported */

var supported = document.querySelector(".supported"),
    
    supportedButton = document.querySelector(".supported button"),
    
    buttonBamboo = document.querySelectorAll(".enter-pledge .continue"),
    
    i;
    
    for (i = 0; i < buttonBamboo.length - 1; i++) {
        
        buttonBamboo[i].onclick = function () {
    
            supported.classList.add('active');
            
            back.remove();
        
        }
    }

supportedButton.onclick = function () {
    
    supported.remove();
}

/* end section supported */