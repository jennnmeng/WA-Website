/* when opening browser
FADE IN: WA and subtitle (one after another)
FADE IN: Blobs: section by section
*/


// fade in sections based on user selection
/* 1. user presses a section title
2. register section
3. if section pressed was (this):
a. replace section title with section selected
b. load section on click
 */


const blobs = document.querySelector("#blobs");
const title = document.querySelector("#title_txt");
const subtitle = document.querySelector("#subtitle_txt");
const enter = document.querySelector("#enter_bttn");

const hometl = new TimelineMax();

hometl.fromTo(
    blobs,
    3,
    { opacity: '0%' },
    { opacity: '100%', ease: Power2.easeInOut }
)
    .fromTo(
        title,
        1.5,
        { opacity: '0%' },
        { opacity: '100%', ease: Power2.easeInOut },
        "-=1.5"
    )
    .fromTo(
        subtitle,
        1.5,
        { opacity: '0%' },
        { opacity: '100%', ease: Power2.easeInOut },
        "-=1"
    )
    .fromTo(
        enter,
        1.5,
        { opacity: '0%' },
        { opacity: '100%', ease: Power2.easeInOut },
    )

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
    foreword1, foreword2,
    1.5,
    { opacity: '0%' },
    { opacity: '100%', ease: Power2.easeInOut }
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
        1,
        { opacity: '0%' },
        { opacity: '100%', ease: Power2.easeInOut },
        "+=1"
    )
    .fromTo(
        mtl,
        1,
        { opacity: '0%' },
        { opacity: '100%', ease: Power2.easeInOut },
        "-=0.5"
    )
    .fromTo(
        cgs,
        1,
        { opacity: '0%' },
        { opacity: '100%', ease: Power2.easeInOut },
        "-=0.5"
    )
    .fromTo(
        ppr,
        1,
        { opacity: '0%' },
        { opacity: '100%', ease: Power2.easeInOut },
        "-=0.5"
    )
    .fromTo(
        ff,
        1,
        { opacity: '0%' },
        { opacity: '100%', ease: Power2.easeInOut },
        "-=0.5"
    )
    .fromTo(
        newmat,
        1,
        { opacity: '0%' },
        { opacity: '100%', ease: Power2.easeInOut },
        "-=0.5"
    )












