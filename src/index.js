import * as PIXI from 'pixi.js';
import HelloWorldScene from './scenes/HelloWorldScene';

const app = new PIXI.Application({
  width: 800, // Width of the canvas
  height: 600, // Height of the canvas
  backgroundColor: 0x1099bb, // Background color
});

// Add the canvas to the HTML document
document.body.appendChild(app.view);

const helloWorldScene = new HelloWorldScene(app);
helloWorldScene.setup();

app.ticker.add(delta => {
  helloWorldScene.update(delta);
});
