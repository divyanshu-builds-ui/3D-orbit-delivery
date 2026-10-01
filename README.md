# 🪐 3D Orbit Delivery Hero

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=for-the-badge&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Instagram](https://img.shields.io/badge/Creator-@divyanshu.builds-E4405F?style=for-the-badge&logo=instagram&logoColor=white)

**An editorial, interactive 3D planetary landing page built with React, Three.js, React Three Fiber (R3F), and Web Audio API.**

*Small parcels. Big possibilities. Delivered with care.*

[Explore Live Demo](#-getting-started) • [Report Bug](https://github.com/divyanshu-builds-ui/3D-orbit-delivery/issues) • [Request Feature](https://github.com/divyanshu-builds-ui/3D-orbit-delivery/issues)

</div>

---

## ✨ Features

- 🌍 **Interactive 3D Planet**: Smooth inertia-based drag rotation, natural orbital velocity, pitch tilt, and touch gestures.
- 🏃 **Procedural 3D Courier**: Skinned mesh runner character (*Orion*) with dynamic gait kinematics, bag suspension physics, and friendly greeting wave when paused.
- 👟 **Real-Time Synced Footsteps Audio**: Synthesized Web Audio API footsteps with alternating left/right contact pitch variation, perfectly synchronized to runner stride frequency.
- ⚡ **Warp Speed (2.4x Boost)**: 1-click sprint acceleration multiplying planetary momentum, runner stride rate, and footstep audio cadence.
- 🎨 **Celestial Dark & Daylight Themes**: Instant theme toggle with curated typography, atmospheric cloud banks, and ambient lighting transitions.
- 📱 **Mobile & Desktop Responsive**: Clean flex header on desktop with a glassmorphic dropdown drawer for mobile viewers.
- 🚀 **100% Vercel & Production Ready**: Pre-configured `vercel.json` with SPA rewrites, local GLTF asset caching, and zero external CDN CORS bottlenecks.

---

## 🛠️ Tech Stack

- **Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **3D Graphics Engine**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/)
- **3D Compression**: Google DRACO Loader (`.glb` models)
- **Audio**: Web Audio API (zero external sound file dependencies, procedural synthesis)
- **Styling**: Vanilla CSS tokens & utility modules (fast 60fps renders)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
3D-orbit-delivery/
├── components/
│   └── ui/
│       ├── orbit-delivery-hero.tsx   # Self-contained 3D hero component with physics & audio
│       └── demo.tsx                  # Showcase demo wrapper
├── public/
│   ├── models/
│   │   ├── courier.glb               # 3D courier mesh with run & idle animations
│   │   └── whimsical-world.glb       # Low-poly stylized planetary globe
│   └── surface.json                  # Planetary topography & coordinate definitions
├── src/
│   ├── App.tsx                       # Main application shell
│   ├── main.tsx                      # DOM entrypoint
│   └── index.css                     # Base font tokens and resets
├── vercel.json                       # Optimized caching headers and SPA routing
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm`, `pnpm`, or `yarn`

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/divyanshu-builds-ui/3D-orbit-delivery.git

# Navigate into the project folder
cd 3D-orbit-delivery

# Install dependencies
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Build for Production

```bash
npm run build
```

This generates an optimized, minified production bundle in the `dist/` directory in ~2 seconds.

---

## 🌐 Deploy to Vercel in 1-Click

1. Fork or push this repository to your GitHub account.
2. Go to [vercel.com/new](https://vercel.com/new) and import `3D-orbit-delivery`.
3. Vercel automatically detects **Vite** and runs `npm run build`.
4. Click **Deploy** — your live 3D web experience is online in under a minute!

---

## 👨‍💻 Creator & Credits

Crafted with care by **Divyanshu**

- 📸 **Instagram**: [@divyanshu.builds](https://instagram.com/divyanshu.builds)
- 🐙 **GitHub**: [@divyanshu-builds-ui](https://github.com/divyanshu-builds-ui)

If you like this project, please consider giving it a ⭐ on GitHub!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use and adapt for personal and commercial projects.
