import { useState, useEffect, useRef } from "react";
import EventBus from "../../../HelperClasses/EventBus";
import "../../../React/GameHudManager/GameHud/hud.css";

function getHealthColor(hp) {
  if (hp > 60) return "linear-gradient(90deg, rgba(57,255,20,0.7), #39ff14)";
  if (hp > 30) return "linear-gradient(90deg, rgba(255,180,0,0.7), #ffb400)";
  return "linear-gradient(90deg, rgba(255,58,58,0.7), #ff3a3a)";
}

function getHealthGlow(hp) {
  if (hp > 60) return "0 0 10px #39ff14, 0 0 22px rgba(57,255,20,0.4)";
  if (hp > 30) return "0 0 10px #ffb400, 0 0 22px rgba(255,180,0,0.4)";
  return "0 0 10px #ff3a3a, 0 0 22px rgba(255,58,58,0.5)";
}

export default function GameHud() {
  const [health,   setHealth]   = useState(100);
  const [score,    setScore]    = useState(0);
  const [energy,   setEnergy]   = useState(100);
  const [level,    setLevel]    = useState(1);
  const [waveTxt,  setWaveTxt]  = useState("");
  const [scoreKey, setScoreKey] = useState(0);
  const waveTimer = useRef(null);

  useEffect(() => {
    const onHealth = (v) => setHealth(Math.max(0, Math.min(100, v)));
    const onScore  = (v) => { setScore(v); setScoreKey((k) => k + 1); };
    const onEnergy = (v) => setEnergy(Math.max(0, Math.min(100, v)));
    const onLevel  = (v) => {
      setLevel(v);
      setWaveTxt(`— WAVE ${v} —`);
      clearTimeout(waveTimer.current);
      waveTimer.current = setTimeout(() => setWaveTxt(""), 2500);
    };

    EventBus.on("UPDATE_HEALTH", onHealth);
    EventBus.on("UPDATE_SCORE",  onScore);
    EventBus.on("UPDATE_ENERGY", onEnergy);
    EventBus.on("UPDATE_LEVEL",  onLevel);

    return () => {
      EventBus.off("UPDATE_HEALTH", onHealth);
      EventBus.off("UPDATE_SCORE",  onScore);
      EventBus.off("UPDATE_ENERGY", onEnergy);
      EventBus.off("UPDATE_LEVEL",  onLevel);
      clearTimeout(waveTimer.current);
    };
  }, []);

  const isCritical = health <= 30;

  return (
    <div className="game-hud">
      {/* Corner brackets */}
      <div className="hud-corner hud-corner--tl" />
      <div className="hud-corner hud-corner--tr" />
      <div className="hud-corner hud-corner--bl" />
      <div className="hud-corner hud-corner--br" />

      {/* Top-left: Health */}
      <div className="hud-health-block">
        <div className="hud-health-header">
          <span className="hud-health-icon">♥</span>
          <span className="hud-health-label">Health</span>
        </div>
        <div className={`hud-health-value ${isCritical ? "critical" : ""}`}>
          {health}<small style={{ fontSize: "0.55em", opacity: 0.5 }}> / 100</small>
        </div>
        <div className="hud-health-track">
          <div
            className="hud-health-fill"
            style={{
              width: `${health}%`,
              background: getHealthColor(health),
              boxShadow: getHealthGlow(health),
            }}
          />
        </div>
      </div>

      {/* Top-center: wave alert */}
      <div className={`hud-wave-alert ${waveTxt ? "visible" : ""}`}>
        {waveTxt}
      </div>

      {/* Top-right: Score */}
      <div className="hud-score-block">
        <div className="hud-score-label">Score</div>
        <div key={scoreKey} className="hud-score-value pop">
          {String(score).padStart(7, "0")}
        </div>
      </div>

      {/* Bottom-left: Energy */}
      <div className="hud-energy-block">
        <div className="hud-energy-label">Energy</div>
        <div className="hud-energy-track">
          <div className="hud-energy-fill" style={{ width: `${energy}%` }} />
        </div>
      </div>

      {/* Bottom-right: Level */}
      <div className="hud-level-block">
        <div className="hud-level-label">Wave</div>
        <div className="hud-level-value">0{level}</div>
      </div>
    </div>
  );
}