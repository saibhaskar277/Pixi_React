import { Container } from "pixi.js";
import { Scene } from "./Scene";
import { EventBus } from "../../HelperClasses/EventBus";
import { GameEvents } from "../../GameConfigs/GameEvents";
import { SceneName } from "../../GameConfigs/GameConfig";
export class SceneManager {
  private currentScene?: Scene;

  constructor(private stage: Container) {}

  changeScene(scene: Scene, sceneName: SceneName) {
    if (this.currentScene) {
      this.stage.removeChild(this.currentScene);

      this.currentScene.destroyScene();
    }

    this.currentScene = scene;

    this.stage.addChild(scene);

    scene.initialize();

    EventBus.emit(GameEvents.SCENE_CHANGED, sceneName as SceneName);
  }

  update(delta: number) {
    this.currentScene?.update(delta);
  }
}
