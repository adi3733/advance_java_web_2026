# ☕ Advanced Java Code Vault

<div align="center">

![Java Logo](https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png)

**Your Ultimate Java Practicals Collection with Modern UI/UX**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PWA Enabled](https://img.shields.io/badge/PWA-Enabled-success)](manifest.json)
[![Offline First](https://img.shields.io/badge/Offline-First-orange)](service-worker.js)

[Live Demo](https://your-deployed-url.vercel.app) • [Report Bug](https://github.com/yourusername/java-vault/issues) • [Request Feature](https://github.com/yourusername/java-vault/issues)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [UI/UX Design Patterns](#-uiux-design-patterns)
- [Tech Stack](#-tech-stack)
- [Architecture & Data Flow](#-architecture--data-flow)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [PWA Features](#-pwa-features)
- [Performance Optimization](#-performance-optimization)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Advanced Java Code Vault** is a modern, Progressive Web App (PWA) designed for engineering students to access Java practical programs with an intuitive, glassmorphism-inspired interface. The application provides offline-first functionality, instant search, and one-click code copying, making it the perfect companion for Java programming labs and exams.

### 🎓 Target Audience
- Engineering students learning Advanced Java
- Java developers seeking practical examples
- Educators looking for teaching resources

---

## ✨ Features

### 🎨 **User Interface**

#### Glassmorphism Design System
- **Frosted Glass Effects**: Backdrop blur with semi-transparent backgrounds
- **Layered Depth**: Multi-level card hierarchy with elevation shadows
- **Smooth Transitions**: 300ms ease animations for all interactive elements
- **Gradient Overlays**: Dynamic linear gradients with animated shifts
- **Neumorphic Elements**: Soft UI components with subtle shadows

#### Visual Feedback
- **Hover States**: Scale transforms (translateY -8px) on experiment cards
- **Active States**: Immediate visual response to user interactions
- **Loading States**: Animated spinner with context-aware messages
- **Success States**: Green gradient feedback for copy operations
- **Empty States**: Contextual "no results" messaging with iconography

#### Responsive Grid Layout
- **Desktop** (>1024px): 2x2 adaptive grid (auto-fit minmax)
- **Tablet** (768-1024px): 2-column flexible layout
- **Mobile** (<768px): Single column stacked view
- **Fluid Typography**: Clamp-based font scaling for all viewports

### 🔍 **Search & Discovery**

#### Real-Time Search Engine
- **Instant Filtering**: Debounced input with live results
- **Multi-Field Search**: Title, description, tags, and filenames
- **Case-Insensitive Matching**: Normalized lowercase comparison
- **Results Counter**: Dynamic count display (e.g., "5 experiments available")
- **Clear Button**: One-click search reset with focus management

#### Keyboard Shortcuts
- `Ctrl/Cmd + K`: Focus search input
- `Escape`: Clear search or close modal
- `Ctrl/Cmd + C`: Copy code when modal is open

### 💾 **Code Management**

#### Multi-Tab Code Viewer
- **Tab Navigation**: Switch between multiple files per experiment
- **Active State Indicators**: Highlighted current file tab
- **File Icon Prefixes**: Visual file type identification
- **Lazy Loading**: On-demand file content fetching

#### Syntax Highlighting
- **Prism.js Integration**: Tomorrow Night theme
- **Java Language Support**: Full keyword, string, and comment recognition
- **Line Numbers**: Optional display for code reference
- **Auto-Indentation**: Preserved whitespace formatting

#### One-Click Copy
- **Clipboard API**: Modern async clipboard access
- **Fallback Support**: execCommand for legacy browsers
- **Visual Confirmation**: 2-second success animation
- **Button State Change**: Icon and text transformation on success

### 📚 **Document Management**

#### PDF Manual Viewer
- **Split-Pane Interface**: List + preview layout
- **Inline PDF Rendering**: Native browser PDF viewer
- **Download Functionality**: Direct file download with custom naming
- **Active Selection Highlight**: Visual indicator for selected manual
- **12 PDF Manuals**: Complete experiment documentation

#### Output File System
- **Dual Format Support**: PDF and DOCX files
- **DOCX Preview**: Real-time HTML conversion using Mammoth.js
- **Error Handling**: Graceful fallback with download option
- **Loading States**: Spinner during DOCX conversion
- **9 Output Files**: Experiment results and code samples

### 🔔 **Progressive Web App (PWA)**

#### Installation
- **Add to Home Screen**: Browser-initiated install prompt
- **Standalone Mode**: Full-screen app experience
- **App Icons**: 72x72 to 512x512 PNG icons
- **Splash Screens**: Custom loading screens for mobile

#### Offline Capabilities
- **Cache-First Strategy**: Instant load from cached assets
- **Runtime Caching**: Dynamic content fallback
- **Background Sync**: Update notifications when online
- **Offline Fallback**: Graceful degradation with messaging

#### Auto-Update Mechanism
- **Version Detection**: Service worker update checking
- **Update Banner**: Non-intrusive notification
- **One-Click Update**: Reload button with version swap
- **Dismiss Option**: User-controlled update timing

---

## 🎨 UI/UX Design Patterns

### Design System

#### Color Palette
```css
--bg-primary: #0a0e27        /* Deep navy background */
--bg-secondary: #16213e      /* Dark blue accent */
--accent-primary: #4361ee    /* Vibrant blue */
--accent-secondary: #7209b7  /* Purple gradient stop */
--accent-glow: #f72585       /* Pink highlight */
--text-primary: #ffffff      /* Pure white */
--text-secondary: #b8c1ec    /* Soft blue-gray */
--success: #06ffa5           /* Neon green */
--warning: #ffbe0b           /* Amber warning */
```

#### Spacing System
- **xs**: 0.5rem (8px) - Tight spacing
- **sm**: 1rem (16px) - Standard gap
- **md**: 1.5rem (24px) - Section padding
- **lg**: 2rem (32px) - Component spacing
- **xl**: 3rem (48px) - Large separation

#### Border Radius
- **sm**: 8px - Input fields, buttons
- **md**: 16px - Cards, modals
- **lg**: 24px - Hero sections

### Animation System

#### Entrance Animations
```javascript
fadeIn: opacity 0→1 (300ms)
slideDown: translateY -30px→0 (600ms)
fadeInUp: opacity 0→1 + translateY 30px→0 (600ms)
scaleIn: scale 0.9→1 (300ms)
```

#### Interactive Animations
```javascript
Hover: translateY 0→-8px + shadow expansion
Active: scale 0.95 (press effect)
Ripple: radial expansion from click point
Bounce: periodic translateY keyframe (logo)
```

#### Staggered Loading
Cards animate with incremental delays (100ms * index) for waterfall effect.

### Accessibility Features

- **Semantic HTML5**: Proper heading hierarchy, landmarks
- **ARIA Labels**: Screen reader descriptions for icon buttons
- **Keyboard Navigation**: Full tab-index flow
- **Focus Indicators**: Visible outline on focus
- **Color Contrast**: WCAG AA compliant (4.5:1 minimum)
- **Responsive Font Sizes**: rem-based scaling

---

## 🛠 Tech Stack

### Frontend
- **HTML5**: Semantic markup, custom data attributes
- **CSS3**: Grid, Flexbox, CSS Variables, Animations
- **JavaScript ES6+**: Async/await, modules, destructuring

### Libraries & Frameworks
- **Prism.js v1.29.0**: Syntax highlighting
  - Core library
  - Java language component
  - Toolbar plugin
  - Normalize whitespace plugin
- **Mammoth.js v1.6.0**: DOCX to HTML conversion

### PWA Infrastructure
- **Service Worker API**: Offline caching and update management
- **Cache API**: Multi-strategy caching (Cache First, Network First)
- **Web App Manifest**: Installation metadata
- **Fetch API**: Resource requests with fallback handling

### Development Tools
- **VS Code**: Primary IDE
- **Git**: Version control
- **Vercel**: Deployment platform (optional)
- **Python/Node.js**: Local development servers

---

## 🏗 Architecture & Data Flow

### Application Architecture

```
┌─────────────────────────────────────────────────────┐
│                   User Interface                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │  Header  │  │  Search  │  │  Manuals Button   │  │
│  └──────────┘  └──────────┘  └──────────────────┘  │
│  ┌───────────────────────────────────────────────┐  │
│  │          Experiments Grid (Cards)              │  │
│  └───────────────────────────────────────────────┘  │
│  ┌──────────────┐  ┌─────────────────────────────┐ │
│  │ Warning Banner│  │  Footer                    │  │
│  └──────────────┘  └─────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────┐
│              Application State Layer                 │
│  ┌─────────────────────────────────────────────┐    │
│  │  experiments[] (Array of 8 experiments)     │    │
│  │  currentExperiment (Selected experiment)    │    │
│  │  currentFileIndex (Active tab)              │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────┐
│              Data Access Layer                       │
│  ┌──────────────┐  ┌──────────────┐                │
│  │  Fetch API   │  │  Cache API   │                │
│  └──────────────┘  └──────────────┘                │
└─────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────┐
│              Service Worker Layer                    │
│  ┌─────────────────────────────────────────────┐    │
│  │  Cache First: Static assets (CSS, JS)      │    │
│  │  Network First: HTML files                 │    │
│  │  Stale While Revalidate: CDN resources     │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────┐
│              Resource Storage                        │
│  ┌──────────┐  ┌──────────┐  ┌─────────────────┐   │
│  │ Experiments│  │ Manuals │  │  Output Files   │   │
│  │  (8 TXT)  │  │(12 PDFs)│  │ (8 PDFs+1 DOCX) │   │
│  └──────────┘  └──────────┘  └─────────────────┘   │
└─────────────────────────────────────────────────────┘
```

### Data Flow Diagrams

#### 1. Search Flow
```
User Input (search field)
    ↓
handleSearch() function
    ↓
Filter experiments array
    ↓
Update resultsCount
    ↓
renderExperiments(filtered)
    ↓
DOM manipulation (cards)
    ↓
Visual update (with animations)
```

#### 2. Code Viewing Flow
```
User clicks "View Code"
    ↓
openExperiment(experiment)
    ↓
Set currentExperiment state
    ↓
renderFileTabs(files)
    ↓
loadFile(firstFile)
    ↓
fetch(filePath)
    ↓
Service Worker intercepts
    ↓
├─ Cache Hit? → Return from cache
└─ Cache Miss → Network request
    ↓
Clean markdown syntax (```)
    ↓
Set codeContent.textContent
    ↓
Prism.highlightElement()
    ↓
Show modal with animation
```

#### 3. PWA Install & Update Flow
```
Page Load
    ↓
navigator.serviceWorker.register()
    ↓
Service Worker Lifecycle
    ↓
├─ Install: cache.addAll(assets)
├─ Activate: cleanup old caches
└─ Fetch: intercept requests
    ↓
Update Available?
    ↓
Show updateNotification banner
    ↓
User clicks "Update Now"
    ↓
window.location.reload()
    ↓
New SW takes control
```

#### 4. File Download Flow
```
User clicks download button
    ↓
Create <a> element
    ↓
Set href = filePath
Set download = filename
    ↓
Append to DOM
    ↓
Programmatic click()
    ↓
Remove from DOM
    ↓
Show success feedback (2 seconds)
    ↓
Reset button state
```

### Component Hierarchy

```
App Root
├── Header Component
│   ├── Logo Section
│   │   ├── Logo Icon (animated)
│   │   └── Title Group
│   ├── Search Component
│   │   ├── Search Input
│   │   ├── Clear Button
│   │   └── Results Counter
│   └── Manuals Button
├── Experiments Grid Container
│   └── Experiment Cards (x8)
│       ├── Card Header (icon + title)
│       ├── Description Text
│       └── Card Footer (file count + CTA)
├── Warning Banner
│   ├── Warning Icon
│   ├── Warning Text
│   └── Outputs Button
├── Footer Component
├── Modals (Overlays)
│   ├── Code Viewer Modal
│   │   ├── Modal Header
│   │   ├── File Tabs (if multiple)
│   │   ├── Code Container
│   │   │   ├── Code Header (filename + copy)
│   │   │   └── Syntax Highlighted Code
│   │   └── Copy Feedback Banner
│   ├── Manuals Modal
│   │   ├── Manuals List (12 items)
│   │   └── PDF Preview Panel
│   └── Outputs Modal
│       ├── Outputs List (9 items)
│       └── Preview Panel (PDF/DOCX)
└── Background Layers
    ├── Animated Gradient Background
    ├── Update Notification Banner
    └── Loading Spinner Overlay
```

### State Management

#### Global State Variables
```javascript
currentExperiment: Object | null  // Selected experiment data
currentFileIndex: number          // Active file tab (0-based)
allExperiments: Array             // Copy of experiments for filtering
currentManualPath: string         // PDF preview path
currentOutputPath: string         // Output file path
currentOutputType: string         // 'PDF' or 'DOCX'
deferredPrompt: Event | null      // PWA install prompt
```

#### Event Handlers
- `handleSearch()`: Search input processing
- `openExperiment(exp)`: Modal trigger
- `switchFile(index)`: Tab switching
- `loadFile(file)`: Content fetching
- `copyCode()`: Clipboard operation
- `closeModal()`: Modal dismissal
- `showPreview(item)`: Preview rendering

---

## 🚀 Installation

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Local web server (Python, Node.js, PHP, or VS Code Live Server)
- Git (for cloning repository)

### Quick Start

#### Option 1: Clone Repository
```bash
git clone https://github.com/yourusername/java-vault.git
cd java-vault
```

#### Option 2: Download ZIP
Download from GitHub → Extract to desired folder

### Running Locally

#### Python HTTP Server
```bash
# Navigate to project
cd "path/to/java-vault"

# Python 3
python -m http.server 8000

# Open browser
http://localhost:8000
```

#### Node.js HTTP Server
```bash
# Install globally (one-time)
npm install -g http-server

# Start server
http-server -p 8000
```

#### VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Production Deployment

#### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

#### Deploy to GitHub Pages
```bash
# Push to GitHub
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

# Enable Pages in repository settings
# Set source to main branch / root
```

---

## 📁 Project Structure

```
d:\Java Web\
│
├── index.html              # Main HTML file (270 lines)
├── style.css              # Complete stylesheet (1927 lines)
├── script.js              # Application logic (916 lines)
├── manifest.json          # PWA manifest (105 lines)
├── service-worker.js      # Service worker (346 lines)
├── vercel.json            # Vercel deployment config
│
├── assets/
│   ├── experiments/       # Java code files
│   │   ├── Exp1/
│   │   │   └── Exp1.txt   # KeyEventDemo.java
│   │   ├── Exp2/
│   │   │   └── Exp2.txt   # MouseListenerExample.java
│   │   ├── Exp3/
│   │   │   └── Exp3.txt   # ReportCard.java
│   │   ├── Exp4A/
│   │   │   └── Exp4A.txt  # databaseClass.java
│   │   ├── Exp4B/
│   │   │   ├── Connection_java_file.txt
│   │   │   └── GFG_java_file.txt
│   │   ├── Exp5A/
│   │   │   └── Exp5A.txt  # StringPalindrome.java
│   │   ├── Exp5B/
│   │   │   └── Exp5B.txt  # NumberPalindrome.java
│   │   ├── Exp6/
│   │   │   └── InetDemo_java.txt
│   │   ├── Exp7/
│   │   │   └── Exp7.txt   # databaseApplication.java
│   │   └── Exp8/          # RMI (4 files)
│   │       ├── 1.Defining the Remote Interface/
│   │       │   └── Hello_java.txt
│   │       ├── 2.Developing the Implementation Class/
│   │       │   └── ImplExample_java.txt
│   │       ├── 3.Developing the Server Program/
│   │       │   └── Server_java.txt
│   │       └── 4.Developing the Client Program/
│   │           └── Client_java.txt
│   │
│   ├── icons/             # PWA app icons
│   │   ├── icon-72.png    # Multiple sizes (72-512px)
│   │   ├── icon-96.png
│   │   ├── icon-128.png
│   │   ├── icon-144.png
│   │   ├── icon-152.png
│   │   ├── icon-192.png
│   │   ├── icon-384.png
│   │   └── icon-512.png
│   │
│   └── PR_MANUAL/
│       ├── PR_MANUAL/     # Experiment manuals (12 PDFs)
│       │   ├── Experiment No 1.pdf
│       │   ├── Experiment No 2.pdf
│       │   ├── Experiment No 3.pdf
│       │   ├── Experiment No 4.pdf
│       │   ├── Experiment No 5.pdf
│       │   ├── Experiment no 6.pdf
│       │   ├── Experiment No 7.pdf
│       │   ├── Experiment No 8.pdf
│       │   ├── Experiment No 9.pdf
│       │   ├── Experiment No 10.pdf
│       │   ├── title pages_adv java.pdf
│       │   └── ALL practicals for exam.pdf
│       │
│       └── Output/        # Output files (9 files)
│           ├── Java_1.pdf
│           ├── Java_2.pdf
│           ├── Java_3.pdf
│           ├── Java_4.pdf
│           ├── Java_5.pdf
│           ├── Java_6.pdf
│           ├── Java_7.pdf
│           ├── Java_8.pdf
│           └── JAVA_9_CODE.docx
│
├── DEPLOYMENT.md          # Deployment instructions
├── PROJECT_SUMMARY.md     # Development summary
├── QUICK_REFERENCE.txt    # Quick notes
├── README.md              # This file (comprehensive docs)
└── Adi.txt                # Additional notes
```

---

## 🔐 PWA Features

### Service Worker Caching Strategies

#### 1. Cache First (Static Assets)
**Used for**: CSS, JavaScript, images, fonts
```javascript
// Check cache → Return if exists → Fetch and cache if missing
Strategy: Instant load from cache, update in background
```

#### 2. Network First (HTML)
**Used for**: index.html, dynamic pages
```javascript
// Try network → Cache response → Fallback to cache if offline
Strategy: Always fresh content when online
```

#### 3. Stale While Revalidate (CDN)
**Used for**: Prism.js, Mammoth.js (external libraries)
```javascript
// Return cache immediately → Fetch update in background
Strategy: Instant response + auto-update
```

#### 4. Network with Cache Fallback
**Used for**: Experiment files, PDFs, DOCX
```javascript
// Try network → If fail, use cache → Show offline message
Strategy: Prefer fresh, graceful degradation
```

### Offline Capabilities

#### Cached Resources
- **Core App Shell**: HTML, CSS, JavaScript (540 KB total)
- **Experiment Files**: 8 experiments, 15 text files
- **PDF Manuals**: 12 documents (lazy cached on first view)
- **Output Files**: 9 files (lazy cached)
- **External Libraries**: Prism.js, Mammoth.js (300 KB)

#### Offline User Experience
1. **Full Navigation**: All cards and search functional
2. **Code Viewing**: Pre-cached experiments load instantly
3. **Manuals**: Previously viewed PDFs available
4. **Graceful Degradation**: Uncached resources show friendly error
5. **Update Banner**: Notification when back online with updates

### Installation Prompt

```javascript
// Browser triggers install prompt when criteria met:
✓ Served over HTTPS
✓ Has valid manifest.json
✓ Has registered service worker
✓ User has engaged with site (PWA score criteria)

// App captures prompt:
beforeinstallprompt event → Store for later use
```

---

## ⚡ Performance Optimization

### Load Time Optimization

#### Critical Rendering Path
1. **HTML Parsing**: 270 lines, minimal blocking
2. **CSS Loading**: Single stylesheet (44 KB gzipped)
3. **JavaScript Defer**: Non-blocking async scripts
4. **Web Fonts**: System font stack (no external fonts)

#### Resource Priorities
```
High Priority:
  - style.css (render-blocking, but critical)
  - index.html (main document)

Medium Priority:
  - script.js (deferred, interactive)
  - manifest.json (PWA metadata)

Low Priority:
  - Prism.js (syntax highlighting, progressive enhancement)
  - Mammoth.js (DOCX preview, lazy loaded)
```

#### Lazy Loading Strategy
- **Images**: Loading="lazy" for off-screen images
- **Code Files**: Fetch on modal open (not page load)
- **PDFs**: Load on preview selection
- **DOCX Conversion**: On-demand with Mammoth.js

### Runtime Performance

#### DOM Manipulation
- **Virtual DOM Pattern**: Build HTML strings, single innerHTML
- **Event Delegation**: Minimize event listeners
- **Debounced Search**: 200ms delay on input
- **Request Animation Frame**: Smooth 60fps animations

#### Memory Management
- **Cache Cleanup**: Old service worker caches deleted on activate
- **Modal Cleanup**: Clear state on close
- **Image Cleanup**: Remove unused blob URLs

### Bundle Size
| Resource | Size | Optimized |
|----------|------|-----------|
| HTML | 9 KB | Minified |
| CSS | 44 KB | Gzipped |
| JavaScript | 28 KB | Gzipped |
| Total Critical | 81 KB | ✓ |
| Prism.js | 22 KB | CDN Cached |
| Mammoth.js | 278 KB | Lazy Loaded |

### Lighthouse Scores (Target)
- **Performance**: 95+ (optimized loading)
- **Accessibility**: 100 (WCAG AA compliant)
- **Best Practices**: 100 (HTTPS, service worker)
- **SEO**: 100 (semantic HTML, meta tags)
- **PWA**: 100 (installable, offline ready)

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/java-vault.git
   cd java-vault
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow existing code style
   - Comment complex logic
   - Test on multiple browsers

3. **Commit Guidelines**
   ```bash
   git commit -m "feat: add new experiment"
   git commit -m "fix: resolve modal close issue"
   git commit -m "docs: update README installation steps"
   ```

4. **Submit Pull Request**
   - Describe changes clearly
   - Reference related issues
   - Include screenshots for UI changes

### Development Workflow

1. Run local server during development
2. Test on Chrome, Firefox, Safari, Edge
3. Verify responsive design (mobile, tablet, desktop)
4. Check Lighthouse scores
5. Test PWA installation and offline mode

### Code Style

- **HTML**: Semantic elements, 4-space indentation
- **CSS**: BEM naming, CSS variables for theming
- **JavaScript**: ES6+ features, JSDoc comments
- **Formatting**: Consistent spacing, meaningful names

### Adding New Experiments

1. Create experiment folder: `assets/experiments/ExpX/`
2. Add code file: `ExpX.txt`
3. Update `experiments` array in `script.js`:
   ```javascript
   {
       id: 'expX',
       number: 'Experiment X',
       title: 'Descriptive Title',
       description: 'Detailed description...',
       icon: '🔥',
       files: [
           { name: 'FileName.java', path: 'assets/experiments/ExpX/ExpX.txt' }
       ],
       manual: 'assets/PR_MANUAL/PR_MANUAL/Experiment No X.pdf',
       tags: ['tag1', 'tag2', 'tag3']
   }
   ```
4. Add PDF manual to `assets/PR_MANUAL/PR_MANUAL/`
5. Update service worker cache list

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Advanced Java Code Vault

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Support & Contact

### Get Help
- **Issues**: [GitHub Issues](https://github.com/yourusername/java-vault/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/java-vault/discussions)
- **Email**: your.email@example.com

### Resources
- [Live Demo](https://your-deployed-url.vercel.app)
- [Deployment Guide](DEPLOYMENT.md)
- [Project Summary](PROJECT_SUMMARY.md)

---

## 🎓 Educational Use

This project is built **for educational purposes**. Key reminders:

⚠️ **Important**: Use this resource to **learn and practice**, not to copy during exams.

### Learning Goals
- Understand Java AWT, Swing, and networking concepts
- Practice JDBC database connectivity
- Learn RMI (Remote Method Invocation)
- Master event handling in Java

### Recommended Study Approach
1. Read the experiment description
2. Study the code structure
3. Type out the code yourself (don't copy-paste)
4. Experiment with modifications
5. Understand the output and logic flow

---

## 🙏 Credits & Acknowledgments

### Icons & Assets
- **Java Icon**: [Icons8](https://icons8.com/icon/lTKW3iI3wIT0/java)
- **Emoji Icons**: System emoji fonts

### Libraries
- **Prism.js**: [prismjs.com](https://prismjs.com/) - Syntax highlighting
- **Mammoth.js**: [Mike Williams](https://github.com/mwilliamson/mammoth.js) - DOCX rendering

### Inspiration
- Modern glassmorphism design trends
- Progressive Web App best practices
- Engineering student feedback and requirements

### Special Thanks
- Engineering students who use and test this application
- Open-source community for excellent tools and libraries
- Icons8 for free Java icon assets

---

## 🗺 Roadmap

### Planned Features
- [ ] Dark/Light theme toggle
- [ ] More experiments (Servlets, JSP)
- [ ] Video tutorials integration
- [ ] Code playground (live execution)
- [ ] User authentication (save progress)
- [ ] Bookmark favorite experiments
- [ ] Print code with formatting
- [ ] Export notes as PDF
- [ ] Quiz mode for practice
- [ ] Mobile app (React Native)

### Version History
- **v1.0.6** (Current): DOCX preview, outputs modal, manuals system
- **v1.0.5**: Service worker optimization
- **v1.0.4**: PDF manual viewer
- **v1.0.3**: Enhanced search functionality
- **v1.0.2**: PWA implementation
- **v1.0.1**: Multi-file support
- **v1.0.0**: Initial release

---

<div align="center">

**Made with ❤️ for Engineering Students**

Master Java through practice, not shortcuts!

[⬆ Back to Top](#-advanced-java-code-vault)

</div>
