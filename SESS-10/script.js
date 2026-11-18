const div_A = document.getElementById('A');
const div_B = document.getElementById('B');
const div_C = document.getElementById('C');

const events = ["mouseup", "mousedown", "click", "dblclick"];

for (let i = 0; i < events.length; i++) {
    div_A.addEventListener(events[i], function() {
        console.log(`The following event ${events[i]} has been appeared`);
    });
}

const nbuLink = document.getElementsByTagName("a")[0];

nbuLink.addEventListener("click", function(e) {
    console.log("nbu link has been clicked");
    e.preventDefault();
});

// document - super global object
// window - the browser window
const keyEvents = ["keyup", "keydown", "keypress"];

for (let i = 0; i < keyEvents.length; i++) {
    window.addEventListener(keyEvents[i], function(e) {
        console.log(e);
    });
}

window.addEventListener("load", function() {
    console.log("all external content has been loaded");
});

window.addEventListener("DOMContentLoaded", function() {
    console.log("DOM has been created");
});

window.addEventListener("mousemove", function(e) {
    console.log(e);
});

