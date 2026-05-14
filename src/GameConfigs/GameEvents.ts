import { SceneName } from "./GameConfig";

export enum GameEvents {
  CHANGE_SCENE = "CHANGE_SCENE",
  SCENE_CHANGED = "SCENE_CHANGED",
  PLAY_SOUND = "PLAY_SOUND",
  PLAYER_DAMAGED = "PLAYER_DAMAGED",
  GAME_OVER = "GAME_OVER",
}

export type GameEventMap = {
  [GameEvents.CHANGE_SCENE]: SceneName;
  [GameEvents.SCENE_CHANGED]: SceneName;
  [GameEvents.PLAY_SOUND]: {
    key: string;
    volume?: number;
  };

  [GameEvents.PLAYER_DAMAGED]: {
    amount: number;
  };

  [GameEvents.GAME_OVER]: void;
};
