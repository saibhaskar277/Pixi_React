export abstract class System {
  start?(): void;

  update?(delta: number): void;

  destroy?(): void;
}
