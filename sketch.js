var path = [];

function setup() {
    createCanvas(800, 400);
    var vs = useTemplate(0);
}

function calcDist(path) {
    let d = 0;
    for (i = 1; i < path.length; i++) {
        let dx = path[i].x - path[i - 1].x;
        let dy = path[i].y - path[i - 1].y;
        d += dx * dx + dy * dy;
    }
    return d;
}

function doubleClicked() {
    for (i = 0; i < vs.length; i++) {
        vs[i].ord = null;
        vs[i].selected = false;
    }
}

function mouseClicked() {
    const path_last = path.length - 1;
    for (let vertex of vs) {
        if (vertex.testClick(mouseX, mouseY)) {
            const path_idx = path.indexOf(vertex);
            if (path_idx == -1) {
                vertex.select();
                path.push(vertex);
            } else if (path_idx == path_last) {
                vertex.unselect();
                path.pop();
            }
        }
    }
}

function draw() {
    background(0);

    for (let vertex of vs) vertex.update();

    for (i = 1; i < path.length; i++) {
        color(0, 255, 255);
        strokeWeight(3);
        stroke(125);

        const x1 = path[i].x;
        const y1 = path[i].y;

        const x2 = path[i - 1].x;
        const y2 = path[i - 1].y;
        line(x1, y1, x2, y2);
    }
    const d = calcDist(path);
    textSize(22);
    fill(255);
    text("dist: " + str(d), 10, 30);
}
