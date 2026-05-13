import { useEffect, useRef } from "react";
import { PixiGame } from "./Core/PixiGame";
import HudManager from "./React/GameHudManager/HudManager";
import "./app.css";
export default function App() {
  const gameRef = useRef(null);

  useEffect(() => {
    new PixiGame(gameRef.current);
  }, []);

  return (
    <div className="app">
      <div className="game-root">
        <div ref={gameRef} id="pixi-container" />

        <HudManager />
      </div>
    </div>
  );
}
