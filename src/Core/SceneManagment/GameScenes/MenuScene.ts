import { Graphics, Text } from "pixi.js";
import { Scene } from "../Scene";

export class MenuScene extends Scene {
  initialize(): void {
    // Background
    const bg = new Graphics();

    bg.rect(0, 0, 800, 600);

    bg.fill(0x1a1a1a);

    this.addChild(bg);

    // Title
    const title = new Text({
      text: "MENU SCENE",
      style: {
        fill: "#ffffff",
        fontSize: 48,
        fontWeight: "bold",
      },
    });

    title.anchor.set(0.5);

    title.x = 600;
    title.y = 150;

    this.addChild(title);
  }
}
