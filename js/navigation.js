
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

navtl
    .to(
        foreword1,
        1.5,
        { opacity: '100%', ease: Power2.easeInOut }
    )
    .to(
        foreword2,
        1.5,
        { opacity: '100%', ease: Power2.easeInOut },
        "-=1.5"
    )
    .to(
        purchase,
        1.5,
        { opacity: '100%', ease: Power2.easeInOut },
        "-=1"
    )
    .to(
        wbl,
        0.5,
        { opacity: '100%', ease: Power2.easeInOut },
        "+=0.5"
    )
    .to(
        mtl,
        0.5,
        { opacity: '100%', ease: Power2.easeInOut },
        "-=0.1"
    )
    .fromTo(
        cgs,
        0.5,
        { opacity: '100%', ease: Power2.easeInOut },
        "-=0.1"
    )
    .to(
        ppr,
        0.5,
        { opacity: '100%', ease: Power2.easeInOut },
        "-=0.1"
    )
    .to(
        ff,
        0.5,
        { opacity: '100%', ease: Power2.easeInOut },
        "-=0.1"
    )
    .to(
        newmat,
        0.5,
        { opacity: '100%', ease: Power2.easeInOut },
        "-=0.1"
    )
