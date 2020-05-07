class Path {
    path = [];

    constructor(maxSize) {
        this.maxSize = maxSize;
    }

    clear() {
        for (let vertex of this.path) vertex.unselect();
        this.path = [];
    }

    click(vertex) {
        const path_last = this.path.length - 1;
        const path_idx = this.path.indexOf(vertex);
        if (path_idx == -1) {
            this.push(vertex);
        } else if (path_idx == path_last) {
            this.pop();
        }
    }

    push(vertex) {
        vertex.select();
        this.path.push(vertex);
    }

    pop() {
        const vertex = this.path.pop();
        vertex.unselect();
        return vertex;
    }

    calcDist() {
        let d = 0;
        let i;
        const path_len = this.path.length;
        for (i = 1; i < path_len; i++) {
            const dx = this.path[i].x - this.path[i - 1].x;
            const dy = this.path[i].y - this.path[i - 1].y;
            d += Math.sqrt(dx * dx + dy * dy);
        }

        if (path_len == this.maxSize) {
            i--;
            const dx = this.path[i].x - this.path[0].x;
            const dy = this.path[i].y - this.path[0].y;
            d += Math.sqrt(dx * dx + dy * dy);
        }

        return d;
    }

    draw() {
        const len = this.path.length;
        for (let i = 1; i < len; i++) {
            color(0, 255, 255);
            strokeWeight(3);
            stroke(125);

            const x1 = this.path[i].x;
            const y1 = this.path[i].y;

            const x2 = this.path[i - 1].x;
            const y2 = this.path[i - 1].y;
            line(x1, y1, x2, y2);
        }
        if (len == this.maxSize) {
            const x1 = this.path[0].x;
            const y1 = this.path[0].y;

            const x2 = this.path[len - 1].x;
            const y2 = this.path[len - 1].y;
            line(x1, y1, x2, y2);
        }
    }
}
