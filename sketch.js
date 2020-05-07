var path;
var size;
var vs;
function setup() {
    createCanvas(800, 400);
    let arg = location.search.substr(1);
    if (arg) {
        vs = useTemplate(Number(arg));
    } else {
        vs = useTemplate(-1);
    }
    path = new Path(vs.length);
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
            updated();
            break;
        }
    }
}

function draw() {}

function updated() {
    background(0);

    path.draw();
    const d = (Math.round(path.calcDist() * 100) / 100).toFixed(2);
    textSize(22);
    fill(255);
    strokeWeight(0);
    text("Distância: " + str(d), 10, 30);

    for (let vertex of vs) vertex.update();
}
