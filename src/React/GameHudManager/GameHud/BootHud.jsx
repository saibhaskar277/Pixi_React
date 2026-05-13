import { useState, useEffect, useRef } from "react";
import "../../../React/GameHudManager/GameHud/hud.css";

export default function BootHud() {
  const [pct, setPct] = useState(0);
  const rafRef = useRef(null);

  // Animate the percentage counter to match the CSS bar fill (1.7s duration, 0.5s delay)
  useEffect(() => {
    let start = null;
    const DELAY = 500;   // matches animation-delay on .boot-bar-fill
    const DURATION = 1700; // matches barFill animation duration

    const tick = (timestamp) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start - DELAY;

      if (elapsed < 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min(elapsed / DURATION, 1);
      // ease: cubic-bezier(0.4, 0, 0.2, 1) approximation
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      setPct(Math.floor(eased * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }else {
        EventBus.emit("CHANGE_SCENE", "MENU");
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="boot-hud">
      {/* Corner brackets */}
      <div className="boot-corner boot-corner--tl" />
      <div className="boot-corner boot-corner--tr" />
      <div className="boot-corner boot-corner--bl" />
      <div className="boot-corner boot-corner--br" />

      {/* Title */}
      <h1 className="boot-title">PIXI REACT</h1>

      <p className="boot-subtitle">
        INITIALIZING SYSTEMS<span className="cursor" />
      </p>

      {/* Loading bar */}
      <div className="boot-bar-wrapper">
        <div className="boot-bar-label">
          <span>LOADING ASSETS</span>
          <span>{pct}%</span>
        </div>
        <div className="boot-bar-track">
          <div className="boot-bar-fill" />
        </div>
        <div className="boot-progress-pct">{pct === 100 ? "READY" : "PLEASE WAIT..."}</div>
      </div>
    </div>
  );
}