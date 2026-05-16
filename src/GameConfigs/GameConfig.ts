export enum SceneName {
  BOOT = "BOOT",
  MENU = "MENU",
  GAMEPLAY = "GAMEPLAY",
}

export const GameConfig = {
  resolution: {
    width: 800,
    height: 600,
  },

  scaling: {
    minWidth: 800,
    minHeight: 600,

    maxWidth: 1920,
    maxHeight: 1080,

    fitToScreen: true,
  },

  rendering: {
    backgroundColor: "#000000",

    antialias: true,

    roundPixels: false,
  },
};
