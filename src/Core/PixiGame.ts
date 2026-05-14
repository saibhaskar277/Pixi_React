import { Application } from "pixi.js";
import { GameConfig, SceneName } from "../GameConfigs/GameConfig";
import { SceneManager } from "./SceneManagment/SceneManager";
import { BootScene } from "./SceneManagment/GameScenes/BootScene";
import { MenuScene } from "./SceneManagment/GameScenes/MenuScene";
import { GameplayScene } from "./SceneManagment/GameScenes/GamePlayScene";
import { EventBus } from "../HelperClasses/EventBus";
import { GameEvents } from "../GameConfigs/GameEvents";

export class PixiGame {
  public app: Application;

  public sceneManager!: SceneManager;

  constructor(parent: HTMLElement) {
    this.app = new Application();

    this.initialize(parent);
  }

  async initialize(parent: HTMLElement) {
    await this.app.init({
      width: GameConfig.resolution.width,

      height: GameConfig.resolution.height,

      background: GameConfig.rendering.backgroundColor,

      antialias: GameConfig.rendering.antialias,
    });

    parent.appendChild(this.app.canvas);

    this.sceneManager = new SceneManager(this.app.stage);

    this.registerEvents();

    this.sceneManager.changeScene(
      new BootScene(SceneName.BOOT),
      SceneName.BOOT,
    );

    this.app.ticker.add((ticker) => {
      this.sceneManager.update(ticker.deltaTime);
    });
  }

  private registerEvents() {
    EventBus.on(GameEvents.CHANGE_SCENE, (sceneName: SceneName) => {
      switch (sceneName) {
        case SceneName.BOOT:
          this.sceneManager.changeScene(
            new BootScene(SceneName.BOOT),
            sceneName,
          );

          break;

        case SceneName.MENU:
          this.sceneManager.changeScene(
            new MenuScene(SceneName.MENU),
            sceneName,
          );

          break;

        case SceneName.GAMEPLAY:
          this.sceneManager.changeScene(
            new GameplayScene(SceneName.GAMEPLAY),
            sceneName,
          );

          break;
      }
    });
  }
}
