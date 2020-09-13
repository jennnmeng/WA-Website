$(document).ready(function () {

    /* when opening browser
FADE IN: WA and subtitle (one after another)
FADE IN: Blobs: section by section
*/

    function fadeInPage() {
        if (!window.AnimationEvent) {
            return;
        }
        var fader = document.getElementById('fader');
        fader.classList.add('fade-out');
    }

    

    // fade in sections based on user selection
    /* 1. user presses a section title
    2. register section 
    3. if section pressed was (this): 
    a. replace section title with section selected
    b. load section on click
     */



});







