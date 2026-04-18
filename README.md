# Mohamed Alsagheer — Portfolio

A personal portfolio website built with **React 19**, **TypeScript**, and **Vite**. Features a polished GUI experience alongside a fully functional **Developer Mode CLI terminal** — two ways to explore the same content.

---

## ✨ Features

- **Dual-mode experience** — Switch between the visual GUI and a full CLI terminal (Developer Mode)
- **Interactive terminal** — Supports commands like `sudo about`, `sudo skills`, `sudo projects`, `sudo experience`, `sudo contact`, `sudo download-cv`, and more
- **Smooth animations** — Page transitions and scroll-triggered animations powered by Framer Motion
- **Responsive design** — Fully optimized for mobile, tablet, and desktop
- **Smart navbar** — Auto-hides on scroll, reappears on scroll-up, stays visible when the mobile menu is open
- **Glassmorphism UI** — Premium glass-card components with hover glow effects
- **Dark theme** — Custom CSS design system with CSS variables for consistent theming
- **CV download** — Direct resume download from both GUI and CLI

---

## 🗂️ Sections

| Section | Description |
|---|---|
| **Hero** | Intro with name, title, availability badge, and CTA buttons |
| **About** | Personal background and overview |
| **Skills** | Frontend, Backend, and Tools & Infrastructure technology cards |
| **Projects** | Featured projects with live links and GitHub repos |
| **Experience** | Professional timeline |
| **Contact** | Contact form and social links |

---

## 🚀 Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS v4, Vanilla CSS, CSS Variables |
| **Animations** | Framer Motion |
| **Icons** | React Icons (Simple Icons, Feather Icons) |
| **Terminal** | Custom CLI built with React hooks |

---

## 🖥️ Developer Mode (CLI)

The portfolio includes a custom terminal emulator accessible via the **"Developer Mode"** button in the navbar.

```
guest@mohamed:~$ sudo help
```

Available commands (require `sudo`):

| Command | Alias | Description |
|---|---|---|
| `sudo about` | `sudo a` | Personal background |
| `sudo skills` | `sudo s` | Tech stack overview |
| `sudo projects` | `sudo p` | Featured projects |
| `sudo experience` | `sudo e` | Work experience |
| `sudo contact` | `sudo c` | Contact information |
| `sudo download-cv` | `sudo cv` | Downloads the CV as PDF |
| `clear` | `cls` | Clears the terminal |
| `quit` | `q` | Returns to GUI mode |

> Commands without `sudo` will return a **Permission denied** error by design.

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimatedSection.tsx   # Scroll-triggered fade-in wrapper
│   ├── Footer.tsx
│   ├── GlassCard.tsx         # Reusable glassmorphism card
│   ├── Navbar.tsx            # Responsive navbar with Developer Mode button
│   ├── SectionHeading.tsx
│   └── Terminal.tsx          # Full CLI terminal emulator
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
├── utils/
│   └── cliData.ts            # CLI command responses
├── App.tsx                   # GUI / CLI mode switcher
├── index.css                 # Global design system & CSS variables
└── main.tsx
```

---

## 📬 Contact

**Mohamed Alsagheer** · Software Engineer  
[GitHub](https://github.com/Mo-Alsagheer) · Available for Work
