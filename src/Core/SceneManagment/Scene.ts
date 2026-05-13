import { Container } from "pixi.js";
import { SystemController } from "../Systems/SystemController";

export abstract class Scene extends Container {
  public systems: SystemController;

  public gameSceneName: string;

  constructor(sceneName: string) {
    super();

    this.gameSceneName = sceneName;

    this.systems = new SystemController();
  }

  abstract initialize(): void;

  update(delta: number) {
    this.systems.update(delta);
  }

  destroyScene() {
    this.systems.destroy();

    this.destroy({
      children: true,
    });
  }
}
