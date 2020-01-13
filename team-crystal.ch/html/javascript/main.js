window.addEventListener("load", loaded);
var counter_1 = 0;
var interval_1;
var is_dropdown = false;
var is_mobile;

function loaded() { //waits until the page is loaded, important for functions that need the content of the page (when the page is not fully loaded, it doesn't detect everything)
    var ddn = document.getElementById("dropdown");
    ddn.addEventListener("click", dropdown);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) { //checks if the website is used on a mobile devise
        is_mobile = true;
        var sb = document.getElementById("selectionbar_desktop");
        sb.style.display = "none";
    } else {
        var sb = document.getElementById("selectionbar_mobile");
        sb.style.display = "none"
    }
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

function dropdown_animation() { //turning animation and shows the menu
    var ddn = document.getElementById("dropdown");
    var sb = document.getElementById("selectionbar_mobile");
    var top = sb.clientHeight / 90;
    var temp_number = 120 - sb.clientHeight + top * counter_1;
    if (is_mobile) { //if mobile device, do nothing to this
        sb.style.top = String(temp_number) + "px";
        sb.style.display = "initial";
    }
    ddn.style.transform = "rotate(" + counter_1 + "deg)";
    counter_1++;
    if (counter_1 > 90) {
        counter_1 = 0;
        clearInterval(interval_1);
        interval_1 = undefined;
    }
}

function goup_animation() { //turning animation and shows the menu
    var ddn = document.getElementById("dropdown");
    var sb = document.getElementById("selectionbar_mobile");
    var top = sb.clientHeight / 90;
    var temp_number = 120 - top * counter_1;
    if (is_mobile) { //if mobile device, do nothing to this
        sb.style.top = String(temp_number) + "px";
    }
    ddn.style.transform = "rotate(" + (90 - counter_1) + "deg)";
    counter_1++;
    if (counter_1 >= 90) {
        counter_1 = 0;
        sb.style.display = "none";
        clearInterval(interval_1);
        interval_1 = undefined;
    }
}