/* when opening browser
FADE IN: WA and subtitle (one after another)
FADE IN: Blobs: section by section
*/

/* var title = document.getElementById("title_text");
var subtitle = document.getElementById("subtitle_txt");

$(document).ready(function() {
    $("title_txt").fadeIn(3000,callback);
    $("subtitle_txt").fadeIn(3000, callback);
}); */

$(document).ready(function() {
    $("title_txt").css("display","none");
    $("subtitle_txt").css("display", "none")
    $("title_txt").fadeIn(3000);
    $("subtitle_txt").fadeIn(3000);
});

