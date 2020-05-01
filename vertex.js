class Vertex{
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.selected = false;
    this.color = color(255);
    this.ord = null;
  }
  
  testClick(mx, my){
    let dx = mx - this.x;
    let dy = my - this.y;
    const d2 = dx * dx + dy * dy;
    if (d2 < this.r * this.r) this.selected = true;
  }
  
  draw(){
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.r);    
  }
  
  update(ord){
    if (this.selected) {
      this.color = color(255, 0, 0);
      if (ord != null) {
        this.ord = ord;
        ord++;
      }
    }
    else this.color = color(255);
    this.draw();
    return ord;
  }

}