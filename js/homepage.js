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








