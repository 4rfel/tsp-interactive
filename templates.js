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
    for (let v of templates[t]) {
        vs.push(new Vertex(v[0], v[1], v[2]));
    }
    return vs;
}
