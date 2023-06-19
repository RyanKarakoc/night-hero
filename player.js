export class Player {
  constructor(game) {
    this.game = game;
    this.width = 240;
    this.height = 240;
    this.x = 0;
    this.y = this.game.height - this.height;
    this.image = document.getElementById("player");
    this.frameX = 0;
    this.frameY = 0;
  }
  update() {}
  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    // context.fillRect(this.x, this.y, this.width, this.height);
  }
}
