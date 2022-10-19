
let body = document.body;

function checkboxOn() {
    var isOn = document.getElementById("checkbox").checked;
    if (isOn) {
        body.style = "animation: changeBackgroundDark 900ms forwards;"
    }
    else {
        body.style = "animation: changeBackgroundLight 900ms forwards;"
    }
}

