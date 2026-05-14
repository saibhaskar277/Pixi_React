import { Graphics, Text } from "pixi.js";
import { Scene } from "../Scene";
import { EventBus } from "../../../HelperClasses/EventBus";
import { SceneName } from "../../../GameConfigs/GameConfig";
import { GameEvents } from "../../../GameConfigs/GameEvents";

export class GameplayScene extends Scene {
  initialize(): void {
    // Background
    const bg = new Graphics();

    bg.rect(0, 0, 800, 600);

    bg.fill(0x102030);

    this.addChild(bg);

    // Gameplay Text
    const gameplayText = new Text({
      text: "GAMEPLAY SCENE",
      style: {
        fill: "#ffffff",
        fontSize: 42,
        fontWeight: "bold",
      },
    });

    gameplayText.anchor.set(0.5);

    gameplayText.x = 400;
    gameplayText.y = 120;

    this.addChild(gameplayText);

    // Example Player Box
    const player = new Graphics();

    player.circle(0, 0, 40);

    player.fill(0xffcc00);

    player.x = 400;
    player.y = 320;

    this.addChild(player);

    // Back Button
    const backButton = new Graphics();

    backButton.roundRect(0, 0, 180, 60, 12);

    backButton.fill(0xaa3333);

    backButton.x = 100;
    backButton.y = 20;

    backButton.eventMode = "static";

    backButton.cursor = "pointer";

    backButton.on("pointerdown", () => {
      EventBus.emit(GameEvents.CHANGE_SCENE, SceneName.MENU);
    });

    this.addChild(backButton);

    // Back Text
    const backText = new Text({
      text: "BACK",
      style: {
        fill: "#ffffff",
        fontSize: 28,
        fontWeight: "bold",
      },
    });

    backText.anchor.set(0.5);

    backText.x = backButton.x + 90;
    backText.y = backButton.y + 30;

    this.addChild(backText);
  }
}
