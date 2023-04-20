
document
  .getElementById("more-button")
  .addEventListener("click", function() {

    let button = document.getElementById('more-button');
    let cvCircle = document.getElementById('cv')
    let aProposCircle = document.getElementById('a-propos')
    let contactCircle = document.getElementById('contact')

    if(button.innerText == "MORE") {   
        button.innerText = "LESS";
        button.style.opacity = "0.5";

        cvCircle.style.opacity = "1";
        cvCircle.style.transform = 'translateY(-200px)'

        aProposCircle.style.opacity = "1";
        aProposCircle.style.transform = 'translate(-173px, 100px)'

        contactCircle.style.opacity = "1";
        contactCircle.style.transform = 'translate(173px, 100px)'


    } else {
        button.innerText = "MORE";
        button.style.opacity = "1";

        cvCircle.style.opacity = "0";
        cvCircle.style.transform = 'translateY(0)'

        aProposCircle.style.opacity = "0";
        aProposCircle.style.transform = 'translate(0, 0)'

        contactCircle.style.opacity = "0";
        contactCircle.style.transform = 'translate(0, 0)'

    }
  });