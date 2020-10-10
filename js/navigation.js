// NAVIGATION
const foreword1 = document.querySelector("#foreword1");
const foreword2 = document.querySelector("#foreword2");
const wbl = document.querySelector("#wbl");
const mtl = document.querySelector("#mtl");
const cgs = document.querySelector("#cgs");

const ppr = document.querySelector("#ppr");
const ff = document.querySelector("#ff");
const newmat = document.querySelector("#new");
const purchase = document.querySelector("#purchase");

const navtl = new TimelineMax();

navtl.fromTo(
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
