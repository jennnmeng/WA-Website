const blobs = document.querySelector("#blobs");
const title = document.querySelector("#title_txt");
const subtitle = document.querySelector("#subtitle_txt");
const enter = document.querySelector("#enter_bttn");

const redSlider = document.querySelector("red_slider");

// animate title, subtitle and blobs on load
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
        "-=0.5"
    )
    .fromTo(
        enter,
        1.5,
        { opacity: '0%' },
        { opacity: '100%', ease: Power2.easeInOut },
    )

    // open red rectangle on hover
    
