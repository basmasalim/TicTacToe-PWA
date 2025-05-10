# ♟️ Tic Tac Toe — Angular 19 + Signals + PWA

A fun, interactive **Tic Tac Toe** game built with **Angular 19**, leveraging **Signals** for reactivity and **PWA (Progressive Web App)** features for offline access and installability.

### 🔗 Live Demo  
▶️ [Play Now on Vercel](https://tic-tac-toe-pwa-tau.vercel.app/)

---

## 🚀 Features

- ✅ Built with **Angular 19**
- 🔁 Reactive state using **Angular Signals**
- 📱 Fully functional **PWA**: installable, offline-capable
- 🎮 Simple and clean game logic
- 🎨 Modern responsive UI
- 🌗 Light-weight and mobile friendly

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/264a3351-3c15-4d74-a986-052744b88989)


---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| [Angular 19](https://angular.io/) | Frontend framework |
| [Angular Signals](https://angular.dev/guide/signals) | Reactive state management |
| [@angular/pwa](https://angular.io/guide/service-worker-intro) | PWA integration |
| SCSS | Custom styles and responsive layout |
| Vercel | Deployment |

---

## 📦 Installation & Run Locally

1. **Clone the repo**

```bash
git clone https://github.com/basmasalim/TicTacToe-PWA.git
cd TicTacToe-PWA
````

2. **Install dependencies**

```bash
npm install
```

3. **Run locally**

```bash
ng serve
```

4. **Build for production (with PWA)**

```bash
ng build --configuration=production
```

Then serve the `dist/` folder using any static server (e.g., `http-server` or Vercel).


## 📲 PWA Support

* Works offline after first load
* Can be installed to homescreen on mobile and desktop
* Uses Angular's Service Worker

> To test PWA features locally, run a production build and serve it using a static server (not `ng serve`).

---

## 📁 Project Structure

```
src/
  ├── app/
  │   ├── app.component.ts
  │   ├── game-logic/
  │   └── square/ (Component)
  ├── assets/
  ├── manifest.webmanifest
  ├── ngsw-config.json
```

---

## 🙌 Credits

Created with ❤️ by [Basma Salim](https://github.com/basmasalim)
