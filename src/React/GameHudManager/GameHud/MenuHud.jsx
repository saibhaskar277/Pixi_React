import EventBus from "../../../HelperClasses/EventBus";
import "../../../React/GameHudManager/GameHud/hud.css";

const MENU_ITEMS = [
  { index: "01", label: "Play",     action: () => EventBus.emit("CHANGE_SCENE", "GAMEPLAY") },
  { index: "02", label: "Continue", action: () => EventBus.emit("CHANGE_SCENE", "GAMEPLAY") },
  { index: "03", label: "Options",  action: () => EventBus.emit("OPEN_OPTIONS") },
  { index: "04", label: "Quit",     action: () => EventBus.emit("QUIT_GAME") },
];

export default function MenuHud() {
  return (
    <div className="menu-hud">
      <div className="menu-panel">
        {/* Title */}
        <h1 className="menu-game-title">
          PIXI<br /><span>REACT</span>
        </h1>
        <p className="menu-tagline">v1.0.0 &nbsp;·&nbsp; A NEW ADVENTURE AWAITS</p>

        <div className="menu-divider" />

        {/* Nav buttons */}
        <nav className="menu-nav">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.index}
              className="menu-btn"
              onClick={item.action}
            >
              <span className="menu-btn-index">{item.index}</span>
              <span className="menu-btn-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <p className="menu-version">© 2025 &nbsp;·&nbsp; BUILD 1.0.0-alpha</p>
      </div>
    </div>
  );
}