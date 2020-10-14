function delay(n) {
    n = n || 2000;
    return new Promise((done => {
        setTimeout(() => {
            done();
        }, n);
    }))
}


function homeAnimation() {
    var tl = gsap.timeline();
    tl
        .to(
            "#blobs",
            3,
            {
                opacity: '100%',
                ease: Power2.easeInOut
            }
        )
        .to(
            "#title-txt",
            1.5,
            {
                opacity: '100%',
                y: '-3vh',
                ease: Power2.easeInOut
            },
            "-=1.5"
        )
        .to(
            "#subtitle-txt",
            1.5,
            {
                opacity: '100%',
                y: '-3vh',
                ease: Power2.easeInOut
            },
            "-=1"
        )
        .to(
            "#enter-bttn",
            1.5,
            {
                opacity: '100%',
                y: '-3vh',
                ease: Power2.easeInOut
            },
        )

}


function navAnimation() {
    var tl = gsap.timeline();
    tl
        .to(
            "#foreword1",
            1.5,
            {
                opacity: '100%',
                y: '-2vh',
                ease: Power2.easeInOut
            }
        )
        .to(
            "#foreword2",
            1.5,
            {
                opacity: '100%',
                y: '-2vh',
                ease: Power2.easeInOut
            },
            "-=1.5"
        )
        .to(
            "#purchase",
            1.5,
            {
                opacity: '100%',
                y: '-2vh',
                ease: Power2.easeInOut
            },
            "-=1"
        )
        .to(
            "#wbl",
            0.5,
            {
                opacity: '100%',
                y: '-2vh',
                ease: Power2.easeInOut
            },
            "+=0.5"
        )
        .to(
            "#mtl",
            0.5,
            {
                opacity: '100%',
                y: '-2vh',
                ease: Power2.easeInOut
            },
            "-=0.1"
        )
        .to(
            "#cgs",
            0.5,
            {
                opacity: '100%',
                y: '-2vh',
                ease: Power2.easeInOut
            },
            "-=0.1"
        )
        .to(
            "#ppr",
            0.5,
            {
                opacity: '100%',
                y: '-2vh',
                ease: Power2.easeInOut
            },
            "-=0.1"
        )
        .to(
            "#ff",
            0.5,
            {
                opacity: '100%',
                y: '-2vh',
                ease: Power2.easeInOut
            },
            "-=0.1"
        )
        .to(
            "#new",
            0.5,
            {
                opacity: '100%',
                y: '-2vh',
                ease: Power2.easeInOut
            },
            "-=0.1"
        )
}


function sliderAnimation() {
    var tl = gsap.timeline();
    tl
        .fromTo(
            "#red-slider",
            1.2,
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


homeAnimation();

navAnimation();

barba.init({
    sync: true,

    transitions: [
        {
            async leave(data) {
                const done = this.async();

                sliderAnimation();
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