var path;
var size;
var vs;
var template;
function setup() {
    cnv = createCanvas(800, 400);
    cnv.parent("canvas");

    let arg = location.search.substr(1);
    if (arg) {
        vs = useTemplate(Number(arg));
        template = 1;
    } else {
        vs = useTemplate(-1);
        template = -1;
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

    path.draw(template);
    const d = (Math.round(path.calcDist(template) * 100) / 100).toFixed(2);
    textSize(22);
    fill(255);
    strokeWeight(0);
    text("Distância: " + str(d), 10, 30);

    for (let vertex of vs) vertex.update();
}
