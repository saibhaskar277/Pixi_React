# Pixi + React Game Template

A scalable game architecture template using:

- PixiJS for rendering/gameplay
- React for HUD/UI
- TypeScript
- Scene-based architecture
- Event-driven communication
- System-based game logic

---

# Features

- Scene Manager
- Event Bus
- Independent Scene Systems
- React HUD per Scene
- Fixed Resolution Architecture
- Scalable Project Structure
- Pixi + React Separation
- TypeScript Ready
- Vite Ready

---

# Tech Stack

- React
- PixiJS
- TypeScript
- Vite

---

# Project Structure

```txt
src
│
├── Core
│   ├── PixiGame.ts
│   │
│   ├── SceneManagment
│   │   ├── Scene.ts
│   │   ├── SceneManager.ts
│   │   └── GameScenes
│   │       ├── BootScene.ts
│   │       ├── MenuScene.ts
│   │       └── GameplayScene.ts
│   │
│   └── Systems
│       ├── System.ts
│       └── SystemController.ts
│
├── GameConfigs
│   ├── GameConfig.ts
│   └── GameEvents.ts
│
├── HelperClasses
│   └── EventBus.ts
│
├── React
│   └── GameHudManager
│       ├── HudManager.jsx
│       └── GameHud
│           ├── BootHud.jsx
│           ├── MenuHud.jsx
│           └── GameHud.jsx
│
├── App.jsx
└── main.jsx