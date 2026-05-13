import { Text } from "pixi.js";
import { Scene } from "../Scene";
import EventBus from "../../../HelperClasses/EventBus";
import { SceneName } from "../../../GameConfigs/GameConfig";
import { GameEvents } from "../../../GameConfigs/GameEvents";

export class BootScene extends Scene {
  initialize(): void {
    const txt = new Text({
      text: "BOOT SCENE",
      style: {
        fill: "white",
        fontSize: 64,
      },
    });

    txt.anchor.set(0.5);

    txt.x = 960;
    txt.y = 540;

    this.addChild(txt);

    setTimeout(() => {
      EventBus.emit(GameEvents.CHANGE_SCENE, SceneName.MENU);
    }, 2000);
  }
}
