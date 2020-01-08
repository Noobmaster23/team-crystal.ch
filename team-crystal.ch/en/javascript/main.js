window.addEventListener("load", loaded);
var counter_1 = 0;
var interval_1;
var is_dropdown = false;

function loaded() { //waits until the page is loaded, important for functions that need the content of the page (when the page is not fully loaded, it doesn't detect everything)
    var ddn = document.getElementById("dropdown");
    ddn.addEventListener("click", dropdown);
}

function dropdown() {
    if (is_dropdown == false) {
        counter_1 = 0;
        interval_1 = setInterval(dropdown_animation, 1);
        is_dropdown = true;
    }
    else {
        counter_1 = 0;
        interval_1 = setInterval(goup_animation, 1);
        is_dropdown = false;
    }
}

function dropdown_animation() { //lines turn by 90° (more or less) animation for dropping menu down (duh)
    var ddn = document.getElementById("dropdown");
    var sb = document.getElementById("selectionbar");
    var top = sb.clientHeight / 90;
    var temp_number = 120 - sb.clientHeight + top * counter_1;
    sb.style.top = String(temp_number) + "px";
    sb.style.display = "initial";
    ddn.style.transform = "rotate(" + counter_1 + "deg)";
    counter_1++;
    if (counter_1 > 90) {
        counter_1 = 0;
        clearInterval(interval_1);
        interval_1 = undefined;
    }
}

function goup_animation() { //lines turn by 90° (more or less) animation for going up with the menu (duh)
    var ddn = document.getElementById("dropdown");
    var sb = document.getElementById("selectionbar");
    var top = sb.clientHeight / 90;
    var temp_number = 120 - top * counter_1;
    sb.style.top = String(temp_number) + "px";
    ddn.style.transform = "rotate(" + (90 - counter_1) + "deg)";
    counter_1++;
    if (counter_1 >= 90) {
        counter_1 = 0;
        sb.style.display = "none";
        clearInterval(interval_1);
        interval_1 = undefined;
    }
}