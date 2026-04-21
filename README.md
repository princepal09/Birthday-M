# 🎂 Birthday Surprise App 💖

A romantic, cinematic birthday web experience built with React + Vite.
Designed to create an emotional journey with messages, music, and a special video surprise 🎬✨

---

## ✨ Features

* 💖 Beautiful romantic UI (pink/purple theme)
* 🎶 Background music with fade-in & fade-out
* 🎬 Surprise video section
* 📱 Fully responsive (mobile-first)
* ⚡ Fast performance with Vite
* 🧩 Clean component-based architecture
* 🎯 Minimal animations (no overuse of Framer Motion)

---

## 🧱 Tech Stack

* ⚛️ React
* ⚡ Vite
* 🎨 Tailwind CSS
* 🎞️ Framer Motion (minimal usage)
* 🧭 React Router

---

## 📁 Project Structure

```
src/
│
├── components/
│   └── common/
│       └── BackgroundMusic.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── ExperiencePage.jsx
│   └── Surprise.jsx
│
├── context/
│   └── AppContext.jsx
│
public/
├── videos/
├── music/
└── images/
```

---

## 🎥 Assets Usage

Large files like videos, music, and images are stored inside the `public/` folder:

```
public/videos/vid.mp4
public/music/music.mp3
public/images/
```

Usage example:

```jsx
<video controls>
  <source src="/videos/vid.mp4" type="video/mp4" />
</video>
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

---

## ⚠️ Notes

* Large media files should NOT be stored inside `src/`
* Use the `public/` folder for videos, music, and images
* Keep video size optimized (<20MB recommended)

---

## ❤️ Made With Love

This project was built to create a special moment —
because some people deserve more than just a "Happy Birthday" 🎂✨

---
