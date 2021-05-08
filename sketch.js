var sec, min, hr;
var secondAngle, hourAngle, minuteAngle;





function setup() {
    createCanvas(displayWidth - 50, displayHeight - 50);
    angleMode(degrees)
}

function draw() {
    background("magenta");
    // drawSprites();

    translate(200, 200);
    rotate(-90)

    hr = hour();
    sec = second();
    min = minute();

    secondAngle = map(sec, 0, 60, 0, 360);
    hourAngle = map(hr, 0, 12, 0, 360);
    minuteAngle = map(min, 0, 60, 0, 360);

    push()
    rotate(minuteAngle)
    strokeWeight(7);
    stroke(255, 0, 0);
    line(0, 0, 100, 0);
    pop()

    push()
    rotate(hourAngle)
    strokeWeight(7);
    stroke(0, 255, 0);
    line(0, 0, 80, 0);
    pop()

    push()
    rotate(secondAngle)
    strokeWeight(7);
    stroke(0, 0, 255);
    line(0, 0, 120, 0);
    pop()

    noFill()
    strokeWeight(3)
    stroke(0, 0, 255);
    arc(0, 0, 300, 300, 0, secondAngle);


    stroke(0, 255, 0);
    arc(0, 0, 260, 260, 0, hourAngle);

    stroke(255, 0, 0);
    arc(0, 0, 280, 280, 0, minuteAngle);
}