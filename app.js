const header = document.querySelector("header");

window.addEventListener("scroll",function (){
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.home-text',{delay:120,origin:'top'});
sr.reveal('.home-img',{delay:100,origin:'top'});
sr.reveal('.feature, .product, .cta-content, .contact',{delay:80,origin:'top'});