$(function () {


    gsap.registerPlugin(ScrollTrigger);

    let main_vis = gsap.timeline({
        scrollTrigger: {
            trigger: '.main__content.first',
            start: 'top 50%',
            // markers:true,


        }
    });

    main_vis.fromTo('.main__section.first strong > span span', { y: '100%', }, { duration: 1, y: 0, stagger: 0.3 })
        .fromTo('.main__section.first .description p', { opacity: 0, y: 100, }, { duration: 1, opacity: 1, y: 0, stagger: 0.1 })

    // 두 번째 영역
    let main_vis02 = gsap.timeline({
        scrollTrigger: {
            trigger: '.main__section.second',
            start: 'top 50%',
            end: '+=300',
            scrub: 1,
            // markers:true,
        }
    });


    main_vis02.fromTo('.img__wrap.img02', { 'visibility': 'hidden', opacity: 0 }, { 'visibility': 'visible', opacity: 1 })
        .fromTo('.main__section.second strong > span span', { y: '100%', }, { duration: 1, y: 0, stagger: 0.3 })


        .fromTo('.main__section.second .description p', { opacity: 0, y: 100, }, { duration: 1, opacity: 1, y: 0, stagger: 0.1 })
    // 세 번째 영역
    let main_vis03 = gsap.timeline({
        scrollTrigger: {
            trigger: '.main__section.third',
            start: 'top 50%',
            end: '+=300',
            scrub: 1,
            // markers:true,
        }
    });

    main_vis03.fromTo('.img__wrap.img03', { 'visibility': 'hidden', opacity: 0 }, { 'visibility': 'visible', opacity: 1 })
        .fromTo('.main__section.third strong > span span', { y: '100%', }, { duration: 1, y: 0, stagger: 0.3 })
        .fromTo('.main__section.third .description p', { opacity: 0, y: 100, }, { duration: 1, opacity: 1, y: 0, stagger: 0.1 })
    // 네 번쨰
    let main_vis04 = gsap.timeline({
        scrollTrigger: {
            trigger: '.main__section.four',
            start: 'top 50%',
            end: '+=1000',
            pin: true,
            scrub: 1,
            // markers:true,
        }

    });

    main_vis04.fromTo('.img__wrap.img04', { 'visibility': 'hidden', opacity: 0 }, { 'visibility': 'visible', opacity: 1 })
        .fromTo('.main__section.four strong > span span', { y: '100%', }, { duration: 1, y: 0, stagger: 0.3 })
        .fromTo('.main__section.four .description p', { opacity: 0, y: 100, }, { duration: 1, opacity: 1, y: 0, stagger: 0.1 })

    gsap.to('#portfolio li:nth-child(odd)', {
        scrollTrigger: {
            trigger: '#portfolio',
            start: 'top 50%',
            // end:'+=300',
            scrub: 2,
            // markers:true,
        },
        y: 100
    })
    gsap.to('#portfolio li:nth-child(even)', {
        scrollTrigger: {
            trigger: '#portfolio',
            start: 'top 50%',
            // end:'+=300',
            scrub: 2,
            // markers:true,
        },
        y: -100
    })
    // $('.menubar').click(function () {
    //     $('#navbar').toggleClass('on')
    // })

})
const navbarbtn = document.querySelector(".menubar");
const fixnavbar = document.querySelector(".fixed__bg");
const body = document.querySelector("body");

navbarbtn.addEventListener("click", () => {
    fixnavbar.classList.add("active");
    body.classList.toggle("hidden");
});

// tab menu
const menubar = document.querySelector(".menubar");
const navbar = document.querySelector("#navbar");
const navMenuList = document.querySelectorAll(".nav__menu__list li");

menubar.addEventListener("click", () => {
    navbar.classList.toggle("on");
    navMenuList.forEach((menulistani) => {
        menulistani.classList.toggle('on');
    });
});

// //scroll에 따른 애니메이션 효과 
// $(window).scroll(function () {
//     ani_curr = $(window).scrollTop();

//     scroll_motion('.main__section first', $(window).height() / 1.5);
//     scroll_motion('.main__section second', $(window).height() / 1.5);
//     scroll_motion('.main__section third', $(window).height() / 1.5);
// })

// // x  - 트리거  #section1 .sec01
// // z - offset $(window).height() / 1.5


// function scroll_motion(trigger, offset) {
//     target = $(trigger).offset().top - offset;
//     if (ani_curr > target) {
//         $(trigger).addClass('on');
//     }

// }

const checkbox = document.querySelector(".form__email .form__info label");

checkbox.addEventListener("click", () => {
    checkbox.classList.toggle("check");
});