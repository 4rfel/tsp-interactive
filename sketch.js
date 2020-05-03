var path = new Path();
var size;
function setup() {
    createCanvas(800, 400);
    var vs = useTemplate(0);
    size = vs.length;
    updated();
}

function doubleClicked() {
    path.clear();
    updated();
}

function mouseClicked() {
    for (let vertex of vs) {
        if (vertex.testClick(mouseX, mouseY)) {
            path.click(vertex);
            break;
        }
    }
    updated();
}

function draw() {}

function updated() {
    background(0);

    path.draw(size);
    const d = (Math.round(path.calcDist() * 100) / 100).toFixed(2);
    textSize(22);
    fill(255);
    text("Dist: " + str(d), 10, 30);

    for (let vertex of vs) vertex.update();

}
