class Vertex {
    constructor(x, y, r = 20) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.selected = false;
        this.color = color(255);
    }

    testClick(mx, my) {
        const dx = mx - this.x;
        const dy = my - this.y;
        const d2 = dx * dx + dy * dy;
        return d2 < this.r * this.r;
    }

    draw() {
        fill(this.color);
        noStroke();
        circle(this.x, this.y, this.r);
    }

    select() {
        this.selected = true;
        this.color = color(255, 0, 0);
    }

    unselect() {
        this.selected = false;
        this.color = color(255);
    }

    update() {
        this.draw();
    }
}
