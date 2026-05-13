import { System } from "./GameSystems/System";

export class SystemController {
  private systems: System[] = [];

  add(system: System) {
    this.systems.push(system);

    system.start?.();
  }

  update(delta: number) {
    for (const system of this.systems) {
      system.update?.(delta);
    }
  }

  destroy() {
    for (const system of this.systems) {
      system.destroy?.();
    }

    this.systems = [];
  }
}
