function firstReveal() {
  var reveals = document.querySelectorAll(".firstReveal");
    for (var i = 0; i < reveals.length; i++) {
      reveals[i].classList.add("active");
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 40;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
  }


function reveal2() {
    var reveals = document.querySelectorAll(".reveal2");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
}

firstReveal();
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);
