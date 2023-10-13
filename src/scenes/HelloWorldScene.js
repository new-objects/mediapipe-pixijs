import * as PIXI from 'pixi.js';

export default class HelloWorldScene {
  constructor(app) {
    this.app = app;
    this.sprite = null;
  }

  setup() {
    this.sprite = PIXI.Sprite.from('assets/crab-small.png');
    this.sprite.anchor.set(0.5);
    this.sprite.x = this.app.screen.width / 2;
    this.sprite.y = this.app.screen.height / 2;
    this.app.stage.addChild(this.sprite);
  }

  update(delta) {
    // Add your update logic here
    this.sprite.rotation += 0.01 * delta;
  }
}
