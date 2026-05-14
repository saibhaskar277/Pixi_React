import { useEffect, useState } from "react";
import { EventBus } from "../../HelperClasses/EventBus";
import BootHud from "./GameHud/BootHud";
import MenuHud from "./GameHud/MenuHud";
import GameHud from "./GameHud/GameHud";
import { GameConfig, SceneName } from "../../GameConfigs/GameConfig";
import { GameEvents } from "../../GameConfigs/GameEvents";

export default function HudManager() {
  const [scene, setScene] = useState(SceneName.BOOT); // Start with the first scene (BOOT)

  useEffect(() => {
    const callback = (sceneName) => setScene(sceneName);
    EventBus.on(GameEvents.SCENE_CHANGED, callback);
    return () => EventBus.off(GameEvents.SCENE_CHANGED, callback);
  }, []);

  return (
    <>
      {scene === SceneName.BOOT && <BootHud />}
      {scene === SceneName.MENU && <MenuHud />}
      {scene === SceneName.GAMEPLAY && <GameHud />}
    </>
  );
}
