const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const box1 = document.querySelector(".main .box1")
    const box2 = document.querySelector(".main .box2")
    const features = document.querySelector('.features')
    const section = document.querySelector('.section:nth-child(2n+1)')
    const section2 = document.querySelector('.section:nth-child(2n+2)')

    burger.addEventListener('click', () => {
        // toggle Nav
        nav.classList.toggle('nav-active');
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

sr.reveal('.animate-left',{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:100
})

sr.reveal('.animate-right',{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:300
})
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

// gsap animations

// gsap.timeline({
//     scrollTrigger:{
//         trigger:".main",
//         start:"40%",
//         end:"100%",
//         markers:true,
//         scrub:true,
//     }
// })

// .from('.features',{
//    opacity:0
// }
// )
// .from('.reveal',{
//     scale:0.8,
//     opacity:0
// })
// .from('.p',{
//     scale:1.2,
//     opacity:0
// })

// gsap.timeline({
//     scrollTrigger:{
//         trigger:".features",
//         start:"0%",
//         end:"200%",
//         markers:true,
//         scrub:true,
//     }
// })

// .from('.h1',0.4,
// {
//     x:-100,
//     opacity:0
// }
// )
// .from('.para1',{
//     x:-300,
//     opacity:0
// },0.2)
// .from('.image1',{
//     scale:0.7,
//     opacity:0
// },0.2)


// gsap.timeline({
//     scrollTrigger:{
//         trigger:".animatebox",
//         start:"90%",
//         end:"100%",
//         markers:true,
//         scrub:true,
//     }
// })

// .from('.h2',0.4,{
//     x:100,
//     opacity:0
// })
// .from('.para2',{
//     x:300,
//     opacity:0
// },0.2)
// .from('.image2',{
//     scale:0.7,
//     opacity:0
// },0.2)

// gsap.timeline({
//     scrollTrigger:{
//         trigger:".animatebox1",
//         start:"90%",
//         end:"100%",
//         markers:true,
//         scrub:true,
//     }
// })

// .from('.h3',0.4,{
//     x:-100,
//     opacity:0
// })
// .from('.para3',{
//     x:-300,
//     opacity:0
// },0.2)
// .from('.image3',{
//     scale:0.7,
//     opacity:0
// },0.2)