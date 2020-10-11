const blobs = document.querySelector("#blobs");
const title = document.querySelector("#title_txt");
const subtitle = document.querySelector("#subtitle_txt");
const enter = document.querySelector("#enter_bttn");

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


function pageTransition() {
    var tl = gsap.timeline();
    tl.fromTo("#red_slider", {
        duration: 2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut;"
    });

    tl.to("#red_slider", {
        duration: 2,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut;",
        delay: 0.3
    });

    tl.set("#red_slider", { left: "0%" })
}



$(function() {
    barba.init({
        sync: true,
    
        transitions: [{
    
            async leave(data) {
                const done = this.async();
                pageTransition();
                await delay(1500);
                done();
            }
        }]
        
    })
})


