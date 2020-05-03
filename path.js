class Path {
    path = [];
    distance = 0;

    clear() {
        for (let vertex of this.path) vertex.unselect();
        this.path = [];
        this.distance = 0;
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
        let last = this.path[this.path.length - 1];

        if (last) {
            // This is the first push
            const dx = vertex.x - last.x;
            const dy = vertex.y - last.y;
            this.distance += Math.sqrt(dx * dx + dy * dy);
        }

        this.path.push(vertex);
    }

    pop() {
        const vertex = this.path.pop();

        let last = this.path[this.path.length - 1];
        if (last) {
            const dx = vertex.x - last.x;
            const dy = vertex.y - last.y;
            this.distance -= Math.sqrt(dx * dx + dy * dy);
        }

        vertex.unselect();
        return vertex;
    }

    calcDist() {
        return this.distance;
        /*
        let d = 0;
        for (let i = 1; i < this.path.length; i++) {
            const dx = this.path[i].x - this.path[i - 1].x;
            const dy = this.path[i].y - this.path[i - 1].y;
            d += dx * dx + dy * dy;
        }
        return d;
        */
    }

    draw(max_size) {
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
        if(len == max_size){
            const x1 = this.path[0].x;
            const y1 = this.path[0].y;

            const x2 = this.path[len - 1].x;
            const y2 = this.path[len - 1].y;
            line(x1, y1, x2, y2);
        }
    }
}
