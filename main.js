mouseEvent = "empty";
var lastX, lastY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
widthLine = 1;

canvas.addEventListener("mousedown", myMousedown);
canvas.addEventListener("mousemove", myMousemove);
canvas.addEventListener("mouseup", myMouseup);
canvas.addEventListener("mouseleave", myMouseleave);

function myMousedown() {
    mouseEvent = "mousedown";
    console.log("mousedown");
}

function myMousemove(e) {
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    console.log(currentX);
    console.log(currentY);
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = document.getElementById("colorInput").value;
        ctx.lineWidth = document.getElementById("widthInput").value;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.arc(currentX, currentY, document.getElementById("radiusInput").value, 0, 2 * Math.PI);
        ctx.stroke();
    }
    lastX = currentX;
    lastY = currentY;
}

function myMouseup() {
    mouseEvent = "mouseup";
    console.log("mouseup");
}

function myMouseleave() {
    mouseEvent = "mouseleave";
    console.log("mouseleave");
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}