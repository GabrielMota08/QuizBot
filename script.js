function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToCenter(number) {
    var sections = document.querySelectorAll('section');
    var section = sections[number-1];
    var elementRect = section.getBoundingClientRect();
    var paddingTop = 0.15 * window.innerHeight;
    var ontop = elementRect.top + window.scrollY - paddingTop;
    window.scrollTo({
        top: ontop,
        behavior: 'smooth'
    });
}

$(document).ready(function(){
    ScrollReveal().reveal('#toppage', {
        origin: 'left',
        duration: 2000,
        distance: '7%'
    })
    ScrollReveal().reveal('#imgbot', {
        origin: 'right',
        duration: 2000,
        distance: '7%'
    })
    ScrollReveal().reveal('#crown', {
        origin: 'top',
        duration: 2000,
        distance: '7%'
    })
})
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById('navbar');
    var content = document.getElementById('content');

    window.addEventListener('scroll', function() {
        // Calcula a cor de fundo da página com base no primeiro pixel visível
        var bgColor = getComputedStyle(content).backgroundColor;
        navbar.style.background = bgColor;
    });
});

function convidar(){
    window.alert("Este página é apenas para fins de treinamento, o bot não existe de verdade")
}

document.addEventListener("scroll", function(){
    var navbar = document.querySelector('nav');
    navbar.classList.toggle('donttop', window.scrollY > 160)
})