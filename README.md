# Randu — Personal Portfolio

Personal portfolio website untuk menampilkan identitas, pengalaman, achievement, project, technical skills, dan contact information sebagai Software Engineering Student.

Website menggunakan konsep visual **Motorsport × Digital Engineering**, terinspirasi dari telemetry system, race control, pit wall, racing line, technical HUD, dan high-performance engineering.

---

## 1. Project Overview

Portfolio ini dibuat sebagai personal showcase untuk memperlihatkan kemampuan dalam:

* UI/UX Design
* Frontend Development
* Software Engineering
* Interaction Design
* Motion Design
* Responsive Web Development

Konsep utama:

> High-performance portfolio — Motorsport × Digital Engineering.

Visual website menggunakan dark interface dengan accent orange, technical grid, telemetry-inspired elements, cinematic imagery, scroll animation, dan micro-interactions.

---

## 2. Technology Stack

### Core

* Next.js
* React
* TypeScript
* Tailwind CSS

### Animation & Interaction

* Motion
* GSAP
* Lenis

### Icons

* Lucide React

### Font

* Inter
* Space Grotesk
* Monospace UI / technical typography

### Deployment

Website dapat di-deploy menggunakan platform seperti Vercel.

---

## 3. Project Structure

```text
app/
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── layout/
│   ├── navbar.tsx
│   ├── preloader.tsx
│   ├── smoothScroll.tsx
│   └── footer.tsx
│
└── sections/
    ├── hero/
    │   ├── hero.tsx
    │   ├── heroBackground.tsx
    │   ├── heroCar.tsx
    │   ├── heroRacingLine.tsx
    │   ├── heroGrid.tsx
    │   ├── heroOrb.tsx
    │   └── heroTelemetry.tsx
    │
    ├── about/
    │   ├── about.tsx
    │   ├── aboutImage.tsx
    │   └── aboutStats.tsx
    │
    ├── achievements/
    │   ├── achievements.tsx
    │   ├── achievementCard.tsx
    │   ├── achievementModal.tsx
    │   └── achievementTrack.tsx
    │
    ├── projects/
    │   ├── projects.tsx
    │   ├── projectCard.tsx
    │   └── projectModal.tsx
    │
    ├── skills/
    │   ├── skills.tsx
    │   ├── skillBar.tsx
    │   └── skillTelemetry.tsx
    │
    └── contact/
        └── contact.tsx

lib/
├── achievements.ts
├── projects.ts
└── skills.ts

public/
├── images/
│   ├── pf.jpg
│   ├── hero/
│   │   └── hero-car.webp
│   ├── certificates/
│   │   ├── certificate-01.jpg
│   │   ├── certificate-02.jpg
│   │   └── ...
│   └── projects/
│       ├── revion.png
│       ├── foodrescue.png
│       ├── cashbhak.png
│       ├── starmate.png
│       └── notranlibrary.png
│
└── noise.svg
```

---

# 4. Website Sections

## 01 — Hero

Hero merupakan landing screen utama website.

Konsep:

**Starting Grid / Driver Introduction**

Hero menggunakan:

* Cinematic racing car image
* Dark background
* Orange accent
* Racing line
* Technical grid
* Telemetry information
* Orb/HUD elements
* Mouse parallax
* Scroll-based animation
* Cinematic background movement

Headline utama:

```text
Software
Engineering
Student.
```

Hero juga menyediakan CTA menuju bagian About.

### Interaction

Saat halaman dibuka:

* Hero content muncul dengan animation
* Racing line dianimasikan
* Car image memiliki parallax terhadap mouse
* Background bergerak mengikuti scroll

Saat user melakukan scroll:

* Hero content bergerak ke atas
* Content mengalami fade
* Background melakukan zoom/parallax
* Racing line menghilang secara bertahap

---

# 5. About Me

## 02 — Driver Profile

About menggunakan konsep:

**Driver Profile / Engineering Telemetry**

Bagian ini memperkenalkan profil dan background sebagai software engineering student.

Elemen utama:

* Profile image
* Driver ID
* Active profile status
* Personal description
* Statistics
* CTA

Profile image menggunakan:

```text
/public/images/pf.jpg
```

Visual image diberikan treatment:

* Grayscale
* Scanline
* Technical overlay
* HUD labeling

Statistics ditampilkan dalam format telemetry:

```text
17
Years old

03+
Years learning

09
Certificates

10+
Projects
```

Angka tersebut dapat diperbarui melalui component `aboutStats.tsx`.

---

# 6. Achievements

## 03 — Championship Record

Achievements menggunakan konsep:

**Championship Record / Race History**

Bagian ini digunakan untuk menampilkan sertifikat dan pencapaian.

Data achievement dipisahkan ke:

```text
lib/achievements.ts
```

Setiap achievement memiliki:

```ts
interface Achievement {
  id: number;
  title: string;
  issuer: string;
  year: string;
  category: string;
  image: string;
  description: string;
}
```

### Features

* Achievement cards
* Certificate preview
* Timeline / racing track
* Category
* Year
* Certificate modal
* Responsive layout

Desktop menggunakan grid beberapa kolom dan visual track.

Mobile menggunakan layout satu kolom agar certificate tetap mudah dibaca.

---

# 7. Projects

## 04 — Engineering Workbench

Projects menggunakan konsep:

**Engineering Workbench / Pit Garage**

Bagian ini menampilkan project yang pernah dibuat.

Data project disimpan di:

```text
lib/projects.ts
```

Interface:

```ts
interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  year: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github?: string;
  design?: string;
}
```

### Project yang ditampilkan

* Fixlane
* Food Rescue
* Cashbhak
* Starmate
* Library Management System

### Features

* Featured project
* Project cards
* Technology tags
* Project metadata
* Hover interaction
* Project detail modal
* External links
* Responsive grid

Project pertama diberikan ukuran lebih besar sebagai featured project.

---

# 8. Skills

## 05 — System Telemetry

Skills menggunakan konsep:

**System Telemetry / Driver Performance**

Section ini menampilkan kemampuan teknis dalam bentuk performance telemetry.

Kategori:

* Frontend
* Design
* Backend
* Mobile

Data skill disimpan di:

```text
lib/skills.ts
```

Interface:

```ts
interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Design" | "Backend" | "Mobile";
  status: "Primary" | "Learning" | "Exploring";
}
```

### Skill utama

```text
HTML / CSS
JavaScript
React
Next.js
TypeScript
Figma / UI/UX
Golang
SQL / MySQL
Flutter
Python
```

### Features

* Animated skill bars
* Percentage level
* Skill categories
* Category filtering
* Telemetry visualization
* Primary / Learning / Exploring status
* Responsive horizontal filter pada mobile

---

# 9. Contact

## 06 — Pit Wall / Radio Control

Contact menggunakan konsep:

**Pit Wall / Radio Control**

Tujuannya membuat contact section terasa seperti communication console daripada contact form biasa.

Features:

* Name input
* Email input
* Subject input
* Message textarea
* Transmission button
* Channel status
* Social links
* Email shortcut
* Submission state

Saat form berhasil disubmit, interface berubah menjadi:

```text
TRANSMISSION RECEIVED

Message locked in.
```

Saat ini submission masih berupa frontend simulation.

Form dapat dihubungkan ke service seperti:

* Formspree
* Web3Forms
* EmailJS

tanpa perlu membuat backend sendiri.

---

# 10. Footer

Footer menggunakan konsep:

**Race Control / System Footer**

Footer berfungsi sebagai finishing section setelah Contact.

Elemen:

* Portfolio logo
* Short description
* Navigation
* Social links
* System status
* Technology information
* Copyright
* Back to grid button

System information:

```text
Available for work
Build / Next.js
Engine / TypeScript
All systems operational
```

Footer menggunakan visual yang lebih minimal agar Contact tetap menjadi visual climax dari halaman.

---

# 11. Navigation

Navbar menyediakan navigasi ke seluruh section:

```text
About
Achievements
Projects
Skills
Contact
```

Logo:

```text
R.
```

Navbar juga memiliki availability indicator.

Pada mobile:

* Navigation berubah menjadi menu
* Menu menggunakan fullscreen/dropdown interface
* Touch target diperbesar
* Hover interaction tidak menjadi dependency utama

---

# 12. Preloader

Website menggunakan custom preloader sebelum halaman utama ditampilkan.

Informasi:

```text
Portfolio System
Randu
Initializing interface
2026
```

Progress ditampilkan dalam bentuk percentage.

Preloader memberikan kesan seperti sistem sedang melakukan boot sequence sebelum masuk ke portfolio.

---

# 13. Smooth Scrolling

Website menggunakan Lenis untuk memberikan scrolling yang lebih smooth.

Konfigurasi menggunakan:

```text
lerp
duration
smoothWheel
syncTouch
```

Smooth scrolling dibuat tetap compatible dengan scroll-based animation yang menggunakan Motion.

---

# 14. Visual Design System

## Colors

```text
Background
#050505

Surface
#0A0A0A

Secondary Surface
#111111

Primary Text
#F5F5F5

Muted Text
#A1A1AA

Accent
#FF4D00

Accent Light
#FF6A2A
```

## Typography

### Display

```text
Space Grotesk
```

Digunakan untuk:

* Hero heading
* Section heading
* Large numbers
* Display text

### Body

```text
Inter
```

Digunakan untuk:

* Paragraph
* Description
* UI text

### Technical

```text
Monospace
```

Digunakan untuk:

* Labels
* Section numbers
* Telemetry
* Status
* Metadata
* Technical information

---

# 15. Animation System

Animation digunakan sebagai bagian dari visual identity, bukan hanya decoration.

Jenis animation:

### Entrance Animation

Element muncul menggunakan:

* Fade
* Translate
* Scale

### Scroll Animation

Menggunakan:

```text
useScroll()
useTransform()
```

Digunakan untuk:

* Hero parallax
* Background movement
* Content fade
* Racing line transition

### Hover Interaction

Digunakan pada:

* Buttons
* Project cards
* Links
* Social links
* Navigation elements

### Micro Interaction

Contohnya:

* Arrow movement
* Status pulse
* Racing line movement
* Button transition
* Image scale

---

# 16. Responsive Design

Website tidak menggunakan pendekatan desktop yang hanya dikecilkan.

Setiap section memiliki responsive behavior sendiri.

Target viewport:

```text
1920px
1440px
1280px
1024px
834px
768px
430px
414px
390px
375px
360px
```

### Desktop

Fokus pada:

* Large typography
* Multi-column layout
* Cinematic composition
* Parallax
* Hover interaction

### Tablet

Layout dikurangi menjadi beberapa kolom dan spacing disesuaikan.

### Mobile

Mobile menggunakan:

* Single-column layout
* Touch-friendly controls
* Horizontal filter
* Reduced visual complexity
* Smaller typography
* Reorganized content
* No dependency on hover
* Reduced animation intensity

Website juga menggunakan:

```css
prefers-reduced-motion
```

untuk user yang mengurangi motion pada perangkat mereka.

---

# 17. Performance Considerations

Beberapa optimasi yang digunakan:

* Next.js Image
* Image priority untuk hero image
* CSS-based background effects
* Component separation
* Motion hanya digunakan pada interaction tertentu
* Responsive image sizing
* Reduced motion support
* Tidak menggunakan backend/database untuk portfolio
* Data statis disimpan di folder `lib`

---

# 18. Content Management

Portfolio tidak menggunakan CMS.

Content utama dikelola langsung melalui TypeScript.

### Achievements

```text
lib/achievements.ts
```

### Projects

```text
lib/projects.ts
```

### Skills

```text
lib/skills.ts
```

Dengan pendekatan ini, perubahan content dapat dilakukan tanpa database.

---

# 19. Image Assets

Hero:

```text
public/images/hero/hero-car.webp
```

Profile:

```text
public/images/pf.jpg
```

Certificates:

```text
public/images/certificates/
```

Projects:

```text
public/images/projects/
```

Noise texture:

```text
public/noise.svg
```

---

# 20. Running the Project

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Website dapat dibuka melalui:

```text
http://localhost:3000
```

Production build:

```bash
npm run build
```

Run production:

```bash
npm start
```

---

# 21. Future Improvements

Beberapa improvement yang dapat dilakukan setelah versi utama selesai:

* Connect contact form ke Formspree/Web3Forms/EmailJS
* Menambahkan real project demo links
* Mengganti placeholder achievement data dengan data asli
* Mengganti social media links dengan profile asli
* Menambahkan custom cursor untuk desktop
* Menambahkan page transition
* Menambahkan project case study pages
* Menambahkan SEO metadata
* Menambahkan Open Graph image
* Menambahkan sitemap
* Menambahkan analytics
* Optimasi image size dan WebP/AVIF
* Menambahkan accessibility audit
* Menambahkan keyboard navigation
* Menambahkan custom 404 page

---

# 22. Design Philosophy

Portfolio ini tidak dirancang sebagai website portfolio konvensional.

Tujuan utamanya adalah menjadikan website itu sendiri sebagai salah satu karya yang menunjukkan kemampuan technical dan visual.

Motorsport digunakan sebagai visual language:

```text
Hero
→ Starting Grid

About
→ Driver Profile

Achievements
→ Championship Record

Projects
→ Engineering Workbench

Skills
→ System Telemetry

Contact
→ Pit Wall / Radio Control

Footer
→ Race Control
```

Dengan pendekatan tersebut, setiap section memiliki fungsi dan identitas visual yang berbeda tetapi tetap berada dalam satu design system.

---

# 23. Final Experience

Flow keseluruhan website:

```text
PRELOADER
    ↓
STARTING GRID
    ↓
DRIVER PROFILE
    ↓
CHAMPIONSHIP RECORD
    ↓
ENGINEERING WORKBENCH
    ↓
SYSTEM TELEMETRY
    ↓
PIT WALL
    ↓
RACE CONTROL
```

Website dirancang untuk memberikan kesan:

**Fast. Technical. Precise. Experimental.**

Portfolio bukan hanya tempat untuk menunjukkan project, tetapi juga menjadi demonstrasi langsung dari kemampuan:

```text
Design
+
Frontend
+
Motion
+
Interaction
+
Engineering
```

---

## Project Status

```text
[✓] Project setup
[✓] Design system
[✓] Navbar
[✓] Preloader
[✓] Hero
[✓] About
[✓] Achievements
[✓] Projects
[✓] Skills
[✓] Contact
[✓] Footer
[✓] Responsive layout
[✓] Smooth scrolling
[✓] Scroll animations
[✓] Motion system

[ ] Contact service integration
[ ] Final content replacement
[ ] SEO optimization
[ ] Performance audit
[ ] Accessibility audit
[ ] Production deployment
```

**Current status: Portfolio UI/UX implementation complete.**
