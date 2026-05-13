# Pixi React Game Template

A scalable PixiJS + React game architecture template using:

- PixiJS for rendering and gameplay
- React for HUD/UI
- TypeScript
- Scene-based architecture
- Event-driven communication
- Capacitor Android support
- Vite build system

---

# Features

- PixiJS Scene System
- React HUD System
- Event Bus Architecture
- Scene Manager
- System Controller per Scene
- Fixed Resolution Game Setup
- Scalable Folder Structure
- Vite + TypeScript
- Android Build Support via Capacitor

---

# Tech Stack

- React
- PixiJS
- TypeScript
- Vite
- Capacitor

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
│       │
│       └── GameHud
│           ├── BootHud.jsx
│           ├── MenuHud.jsx
│           └── GameHud.jsx
│
├── App.jsx
└── main.jsx
