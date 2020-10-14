// no idea what this does
function delay(n) {
    n = n || 2000;
    return new Promise((done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.fromTo("#red-slider", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut;"
    });
    tl.to("#red-slider", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut;",
        delay: 0.3
    });
    tl.set("#red-slider", { left: "-100%" });
}


const foreword1 = document.querySelector("#foreword1");
const foreword2 = document.querySelector("#foreword2");
const wbl = document.querySelector("#wbl");
const mtl = document.querySelector("#mtl");
const cgs = document.querySelector("#cgs");

const ppr = document.querySelector("#ppr");
const ff = document.querySelector("#ff");
const newmat = document.querySelector("#new");
const purchase = document.querySelector("#purchase");

function navAnimation() {
    var tl = gsap.timeline();
    tl.fromTo(
        foreword1,
        1.5,
        { opacity: '0%' },
        { opacity: '100%', ease: Power2.easeInOut }
    )
        .fromTo(
            foreword2,
            1.5,
            { opacity: '0%' },
            { opacity: '100%', ease: Power2.easeInOut },
            "-=1.5"
        )
        .fromTo(
            purchase,
            1.5,
            { opacity: '0%' },
            { opacity: '100%', ease: Power2.easeInOut },
            "-=1"
        )
        .fromTo(
            wbl,
            0.5,
            { opacity: '0%' },
            { opacity: '100%', ease: Power2.easeInOut },
            "+=0.5"
        )
        .fromTo(
            mtl,
            0.5,
            { opacity: '0%' },
            { opacity: '100%', ease: Power2.easeInOut },
            "-=0.1"
        )
        .fromTo(
            cgs,
            0.5,
            { opacity: '0%' },
            { opacity: '100%', ease: Power2.easeInOut },
            "-=0.1"
        )
        .fromTo(
            ppr,
            0.5,
            { opacity: '0%' },
            { opacity: '100%', ease: Power2.easeInOut },
            "-=0.1"
        )
        .fromTo(
            ff,
            0.5,
            { opacity: '0%' },
            { opacity: '100%', ease: Power2.easeInOut },
            "-=0.1"
        )
        .fromTo(
            newmat,
            0.5,
            { opacity: '0%' },
            { opacity: '100%', ease: Power2.easeInOut },
            "-=0.1"
        )
}


$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },
                async enter(data) {
                    navAnimation();
                },
                async once(data) {
                    navAnimation();
                },
            },
        ]
    });
});





function sliderAnimation() {
    var tl = gsap.timeline();
    tl
        .fromTo(
            "#red-slider",
            1.2
            {
                width: "100%",
                left: "0%",
                ease: Power2.easeInOut,
            },
            {
                width: "100%",
                left: "100%",
                ease: Power2.easeInOut,
            }
        )
}