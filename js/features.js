const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients =document.querySelectorAll('.gradient');

let prevColor= "blue";
let animationEnd = true;

function changeSize(){
    sizes.forEach(size=>size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color= this.getAttribute('color');
    let shoe= document.querySelector(`.shoe[color="${color}"]`);
    let gradient =document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary',primary);

    shoes.forEach(s=> s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first','second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend',()=>{
        animationEnd = true;
    })
}
sizes.forEach(size=> size.addEventListener('click',changeSize));
colors.forEach(c => c.addEventListener('click', changeColor))



// navbar
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener('click', () => {
        // toggle Nav
        nav.classList.toggle ('nav-active');
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 +0.5}s`;
            }
        });

        // Burger Animations
        burger.classList.toggle("toggle");

    });
}
// scroll reveal
window.sr =ScrollReveal()

sr.reveal('.animate-top',{
    origin:'top',
    duration:1000,
    distance:'25rem',
    delay:600
})
sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration:1000,
    distance:'25rem',
    delay:600
})

navSlide();