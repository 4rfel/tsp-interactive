const MAX_HEIGHT = 400 - 100;
const MAX_WIDTH = 800 - 40;

const templates = [
    [
        [50, 150],
        [589, 149],
        [360, 112],
        [153, 50],
        [150, 200],
        [450, 80]
    ],
    [
        [50, 150],
        [360, 112],
        [153, 50],
        [150, 200],
    ],
];

function useTemplate(t) {
    vs = [];
    if (t == -1) {
        let i = 0;
        while (i < 20) {
            let add = true;

            const x = Math.random() * MAX_WIDTH + 20;
            const y = Math.random() * MAX_HEIGHT + 50;

            for (let v of vs) {
                const dx = x - v.x;
                const dy = y - v.y;
                const d2 = dx * dx + dy * dy;
                if (d2 < 2 * v.r * v.r) {
                    add = false;
                    break;
                }
            }
            if (!add) continue;

            vs.push(new Vertex(x, y));
            i++;
        }
    } else {
        for (let v of templates[t]) vs.push(new Vertex(v[0], v[1], v[2]));
    }
    return vs;
}
