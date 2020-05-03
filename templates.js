const MAX_HEIGHT = 400 - 120;
const MAX_WIDTH = 800 - 20;

const templates = [
    [
        [50, 150],
        [95, 249],
        [360, 112],
        [153, 40],
        [150, 200]
    ]
];


function useTemplate(t) {
    vs = [];
    if (t == -1) {
        for (i = 0; i < 20; i++)
            vs.push(new Vertex(Math.random()*MAX_WIDTH + 100, Math.random()*MAX_HEIGHT));
    } else {
        for (let v of templates[t])
            vs.push(new Vertex(v[0], v[1], v[2]));
    }
    return vs;
}
