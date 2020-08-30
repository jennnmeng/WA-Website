$(document).ready(function () {

    var sectionSelected; // register section chosen by user

    /* when opening browser
FADE IN: WA and subtitle (one after another)
FADE IN: Blobs: section by section
*/
    $("title_txt").css("display", "none");
    $("subtitle_txt").css("display", "none")
    $("title_txt").fadeIn(3000);
    $("subtitle_txt").fadeIn(3000);

    // fade in sections based on user selection
    /* 1. user presses a section title
    2. register section 
    3. if section pressed was (this): 
    a. replace section title with section selected
    b. load section on click
     */

    $("h2").click(function () {
        sectionSelected = $("h2").attr("id");
    });

});







