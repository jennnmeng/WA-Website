/* when opening browser
FADE IN: WA and subtitle (one after another)
FADE IN: Blobs: section by section
*/
$(document).ready(function() {
    $("title_txt").css("display","none");
    $("subtitle_txt").css("display", "none")
    $("title_txt").fadeIn(3000);
    $("subtitle_txt").fadeIn(3000);
});



// fade in sections based on user selection
var sectionSelected; // user input
var title = document.getElementsByTagName("h2"); // change mat title
var section = document.getElementsByTagName("grid"); // change photo grid


$("a").click(function () {
    sectionSelected = $("a").attr("id");
    document.getElementById(sectionSelected) = sectionSelected;

    // change css based on section

    if (sectionSelected === "wbl") { // if wbl chosen
        document.getElementById(sectionSelected).innerHTML = "WOOD<br>BAMBOO<br>LACQUER";
    } else if (sectionSelected === "mtl") { // if mtl chosen
        document.getElementById(sectionSelected).innerHTML = "METAL";
    } else if (sectionSelected === "cgs") { // if cgs chosen
        document.getElementById(sectionSelected).innerHTML = "CERAMICS<br>GLASS<br>STONE";
    }

}

);



/* 1. user presses a section
2. register section 
3. if section pressed was (this): 
a. replace section title with section selected
b. load section on click

 */

