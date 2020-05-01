vs = [];
let ord = 0;

function setup() {
    createCanvas(400, 400);
    p1 = new Vertex(50, 150, 20);
    p2 = new Vertex(95, 249, 20);
    p3 = new Vertex(360, 112, 20);
    p4 = new Vertex(153, 40, 20);
    p5 = new Vertex(150, 200, 20);


    vs.push(p1);
    vs.push(p2);
    vs.push(p3);
    vs.push(p4);
    vs.push(p5);

}

function calcDist(path){
    let d = 0;
    for (i = 1; i < path.length; i++) {
        let dx = path[i].x - path[i-1].x;
        let dy = path[i].y - path[i-1].y;
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
    for (i = 0; i < vs.length; i++) {
        vs[i].testClick(mouseX, mouseY);
    }
}

function draw() {
    background(0);

    path = []

    for (i = 0; i < vs.length; i++) {
        ord = vs[i].update(ord);
        if (vs[i].ord != null) path.push(vs[i]);
    }

    vs.sort(function(a, b) {
        if(a.ord < b.ord) return -1;
        if(a.ord > b.ord) return 1;
        return 0;});

    for (i = 1; i < path.length; i++) {
        let x1 = path[i].x;
        let y1 = path[i].y;

        let x2 = path[i-1].x;
        let y2 = path[i-1].y;
        color(0,255,255);
        strokeWeight(3);
        stroke(125);
        line(x1, y1, x2, y2);
    }
    let d = calcDist(path);
    textSize(22);
    fill(255);
    text("dist: " + str(d), 10, 30);
}