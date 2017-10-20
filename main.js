var canvas = document.getElementById("canvas");
var draw = canvas.getContext('2d');

canvas.height = 200;
canvas.width = 200;
height = canvas.height;
width = canvas.width;
draw.strokeStyle = '#1DADEB';
draw.fillstyle = '#191919';
draw.lineCap = "round";

function degree(angles) {
    var factor = Math.PI / 180;
    return angles * factor;

}

function timereturn() {
    draw.clearRect(0, 0, 200, 200);
    draw.strokeStyle = '#1DADEB';
    var gradient = draw.createRadialGradient(0, 0, 200, 0, 0, 200);
    gradient.addColorStop(0, "#1DAEEC");
    gradient.addColorStop(1, "Black");
    draw.fillStyle = '#191919';
    // draw.fillStyle = gradient;

    draw.lineCap = "round";

    draw.fillRect(0, 0, width, height);
    var totaltime = new Date();
    var stringtime = totaltime.toDateString();
    var timestring = totaltime.toLocaleTimeString();
    var hours = totaltime.getHours();
    var minutes = totaltime.getMinutes();
    var seconds = totaltime.getSeconds();
    var milliseconds = totaltime.getMilliseconds();

    draw.lineWidth = 10;

    var gradient = draw.createRadialGradient(0, 0, 500, 0, 0, 200);
    gradient.addColorStop(0, "#1DAEEC");
    gradient.addColorStop(1, "#86D62C");
    tseconds = seconds + (milliseconds / 1000);

    draw.beginPath();
    draw.arc(100, 100, 90, degree(270), degree((tseconds * 6) - 90));
    draw.stroke();
    draw.beginPath();
    draw.arc(100, 100, 75, degree(270), degree((minutes * 6) - 90));
    draw.stroke();

    draw.beginPath();
    draw.arc(100, 100, 60, degree(270), degree((hours * 30) - 90));
    draw.stroke();


    draw.font = "12px Arial";
    draw.fillStyle = "#FFFFFF";
    draw.fillText(stringtime, 57, 100);
    draw.fillText(timestring, 70, 120);
}

setInterval(timereturn, 100);