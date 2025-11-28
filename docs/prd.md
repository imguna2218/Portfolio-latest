# Parisa Gunasekhar Portfolio Website Requirements Document

## 1. Website Overview

### 1.1 Website Name
Parisa Gunasekhar - Software Developer Portfolio

### 1.2 Website Description
A single-page portfolio website showcasing Parisa Gunasekhar's professional profile as a full-stack software developer. The site presents her technical skills, featured projects, internship experience, achievements, and contact information in an interactive and visually engaging format.

### 1.3 Target Users
Recruiters, potential employers, clients, and professional network connections seeking to learn about Parisa's technical capabilities and project experience.

## 2. Technical Stack

### 2.1 Core Technologies
- React 18+
- TypeScript
- Tailwind CSS v3+\n- Framer Motion (for animations)
- React Icons (for icon components)
- EmailJS (for contact form)
- React Scroll (for anchor navigation)
- Vite (build tool)

### 2.2 Performance Requirements
- Mobile-first responsive design
- Lazy-load images
- Code-splitting optimization
- 1-second initial loader
- Smooth scrolling experience
- No unnecessary re-renders (use React.memo)

## 3. Website Structure & Features

### 3.1 Initial Loader
- Full-screen overlay displaying for 1 second on initial load
- Black background with falling purple 'code rain' effect (10-20 vertical lines of random characters: 0s, 1s, purple symbols)
- CSS keyframes animation with opacity fade-out
- Transition to main content with star background appearing

### 3.2 Fixed Navigation Bar (Glassmorphism)
- **Position:** Fixed at top of viewport
- **Left Side:** 'G.P' initials in bold purple (text-2xl) with hover glow effect
- **Right Side Navigation Links:**
  - Home
  - Skills
  - Projects
  - Internship\n  - Achievements
  - Contact
- **Mobile View:** Hamburger menu (three lines animating to X when opened)
- **Styling:** Semi-transparent backdrop with blur effect (bg-white/5 backdrop-blur-md), purple border (border-purple-500/30), rounded-full shape

### 3.3 Hero Section (ID: 'home')
- **Layout:** Full-viewport height, centered content
- **Left Side (40%):**
  - Professional circular photo (200x200px)
  - Placeholder: https://via.placeholder.com/200?text=Parisa+GP
  - Purple border ring effect
- **Right Side (60%):**
  - Headline: 'Software Developer / Full-Stack Developer / EvalX' (text-5xl, purple gradient)
  - Subheadline: 'Engineered innovative solutions like a distributed code evaluation engine processing 120+ concurrent tests/sec.' (text-xl, fade-in animation)
  - Quote: 'Building the future with code that scales elegantly – one innovative line at a time.' (italic, text-lg, purple accent, slide-up animation)
  - CTA Button: 'Explore My Work' (purple background, white text, hover glow, scrolls to Projects section)
- **Background:** Moving star points overlay with subtle purple vignette at edges

### 3.4 Skills Section (ID: 'skills')
- **Heading:** 'Technical Skills' (text-4xl, centered, purple underline)
- **Layout:** Grid layout (3 columns on desktop, 1 column on mobile)
- **Skill Categories with Animated Progress Bars:**
  - Languages: Java, Python, JavaScript, TypeScript, Rust, C
  - Backend/Frameworks: Node.js, Express.js, React, React Native, Prisma
  - Databases/Tools: PostgreSQL, Redis, Docker, AWS
  - Concepts/Architectures: REST APIs, WebSockets, Distributed Systems, Real-time Processing
- **Animation:** Horizontal progress bars filling from 0% to 100% on scroll-view (Framer Motion,1.5s duration, ease-out)
- **Icons:** Real technology icons using react-icons (e.g., SiJavascript, SiRust) with hover scale effect (1.1)
- **Styling:** Purple fill on dark background, text-sm labels\n
### 3.5 Projects Section (ID: 'projects')
- **Heading:** 'Featured Projects' (text-4xl, centered)
- **Layout:** Single-project slider carousel (1 project per slide, full-width, responsive)
- **Navigation:** Left/right chevron arrows (purple, hover glow, disabled state with opacity-50)
- **Project Cards (Glass Effect):**
  - Project name (text-3xl, purple)\n  - Project logo placeholder (50x50px square)\n  - Description with bullet points\n  - Tech stack badges (purple outline chips)
  - Action buttons: 'View on GitHub' (purple button, links to github.com/imguna2218), 'Live Demo' (secondary button, placeholder link)
- **Initial Projects:**
  1. **EvalX - Online Code Execution Engine**
     - Logo: https://via.placeholder.com/50?text=EvalX
     - Description: Engineered a distributed, low-latency code evaluation engine in Rust processing 120+ concurrent tests/sec. Deployed on AWS using Docker and Redis.
     - Tech Stack: Rust, Isolate, Docker, AWS, Redis
  2. **PatrolX - Patrol Monitoring App**
     - Logo: https://via.placeholder.com/50?text=PatrolX
     - Description: Architected a patrol monitoring app in React Native with end-to-end incident management system.\n     - Tech Stack: React Native, TypeScript, PostgreSQL, Prisma
  3. **SyncStream - Social Audio Streaming Platform**
     - Logo: https://via.placeholder.com/50?text=SyncStream\n     - Description: Developed a full-stack social audio streaming platform with real-time features using WebSockets.\n     - Tech Stack: TypeScript, Node.js, WebSockets\n- **Transition:** Smooth 0.5s slide animation, arrows fade in on hover

### 3.6 Internship Section (ID: 'internship')
- **Heading:** 'Professional Experience' (text-4xl, centered)
- **Card Display:**
  - Small rectangle card (max-w-md, centered, glass background, rounded-lg)\n  - Company logo: https://via.placeholder.com/80?text=Leantech (circular)
  - Company: Leantech Labs Pvt. Ltd. (text-xl)
  - Title: Software Developer Intern (text-lg, purple)
  - Duration: Jan 2025 - Sep 2025 (text-sm, gray)
- Hover effect: Lift with purple shadow
- **Modal on Click:**
  - Overlay: bg-black/80\n  - Centered white glass card with Framer Motion slide-in animation
  - Content: Company name/logo, title, duration at top\n  - Description bullets:\n    - Engineered REST API using ExpressJS
    - Authored 150 DSA questions
    - Enhanced UI/UX with TailwindCSS
  - Close button: X icon at top-right
\n### 3.7 Achievements Section (ID: 'achievements')
- **Heading:** 'Achievements' (text-4xl, centered)
- **Slideshow Carousel:**
  - Auto-advance every 5seconds (optional)\n  - Manual navigation: Dots below (purple for active) and arrow controls
  - 1 achievement per slide with Framer Motion fade/swipe transition
- **Achievement Items (10 total):**
  - Each slide: Centered image (200x150px) with description below (text-md)\n  - Initial5 achievements:\n    1. Image: https://via.placeholder.com/200x150?text=Achievement+1
       Description: Won 1st Prize at Siddartha Academy of Higher Education's Innovation Day for EvalX project.
    2. Image: https://via.placeholder.com/200x150?text=Achievement+2
       Description: Won 1st prize in VR Siddartha International Hackathon, Code Geeks track.
    3. Image: https://via.placeholder.com/200x150?text=Achievement+3
       Description: Won 1st prize in HackIT (college) in WEB DEVELOPMENT domain.
    4. Image: https://via.placeholder.com/200x150?text=Achievement+4
       Description: Won 2nd Prize in MERN Stack Hackathon (Team Lead).
    5. Image: https://via.placeholder.com/200x150?text=Achievement+5
       Description: Awarded 100 Days, 50 Days badges on LeetCode for consistent performance.
  - Remaining 5 slots: Placeholders for user to fill (https://via.placeholder.com/200x150?text=Achievement+6-10, Description:'TBD – User to fill')

### 3.8 Resume Download Button\n- **Position:** Centered, placed after Internship/Achievements sections
- **Styling:** Purple background, white text, glowing effect with subtle pulse animation (box-shadow glow every 2s, scale 1.05 on hover)\n- **Text:** 'Download My Resume'
- **Functionality:** Downloads PDF file on click (file assumed in public folder, user to provide actual file)

### 3.9 Contact Section (ID: 'contact')
- **Heading:** 'Get In Touch' (text-4xl, centered)
- **Contact Form (EmailJS Integration):**
  - Fields: Name, Email, Message
  - Styling: Purple border on focus
  - Submit action: Sends email to gunasekharparisa2218@gmail.com via EmailJS
  - Success feedback: Toast notification
- **Social Media Links (Grid Layout with Hover Glow):**\n  - LinkedIn: linkedin.com/in/guna-sekhar-parisa
  - GitHub: github.com/imguna2218
  - LeetCode: leetcode.com/Guna_Sekhar_Parisa
  - Icons: Using react-icons (e.g., FaLinkedinIn)

### 3.10 Footer
- **Content:** '© 2025 Parisa Gunasekhar. Built with React & Tailwind.' (text-sm, gray, centered)
- **Functionality:** Link to scroll back to top

## 4. Design Style

### 4.1 Theme & Color Scheme
- **Base Theme:** Dark cyberpunk-inspired design\n- **Background:** Pure black (#000000) with animated star field (50-100 tiny white/purple dotsdrifting slowly across screen via CSS keyframes, translateX/Y by 10-20px over 60s, infinite linear)\n- **Primary Accent:** Deep purple gradient (#6B46C1 to #A78BFA)
- **Text Colors:**
  - Body text: Off-white (#F7FAFC)
  - Accent text: Purple (#A78BFA)
  - Secondary text: Gray tones\n\n### 4.2 Visual Effects
- **Glassmorphism:** Semi-transparent elements with backdrop-blur effect and purple borders (border-purple-500/30)\n- **Glow Effects:** Subtle purple glow on interactive elements (box-shadow: 0 0 20px rgba(107, 70, 193, 0.5))
- **Animations:** Smooth transitions using Framer Motion (fade-in, slide-up, swipe effects)
- **Hover States:** Scale transformations (1.05-1.1), shadow enhancements, glow intensification

### 4.3 Typography
- **Font Family:** Inter (Google Fonts)
- **Body Text:** Sans-serif, text-base\n- **Headings:** Bold weight, text-4xl to text-6xl sizes
\n### 4.4 Layout Principles
- **Sections:** Full-viewport height sections with smooth scrolling
- **Spacing:** Consistent padding and margins using Tailwind spacing scale
- **Responsive Breakpoints:**
  - Mobile: Vertical stacking, single column
  - Medium: 2-column layouts where applicable
  - Large: Full-width multi-column layouts

### 4.5 Interactive Elements
- **Buttons:** Rounded corners, purple background, white text, hover glow and scale effects
- **Cards:** Glass effect with rounded-xl borders, shadow-2xl, hover lift animations
- **Form Inputs:** Purple border on focus state, clean minimal design
- **Navigation:** Smooth scroll behavior, active state indicators

## 5. Accessibility & Performance

### 5.1 Accessibility Features
- ARIA labels on all interactive buttons and modals
- Keyboard navigation support for carousels and arrows
- Semantic HTML structure
- Sufficient color contrast ratios
\n### 5.2 Performance Optimizations
- Preload critical assets (hero image, icons)
- React.memo for component memoization
- Lazy loading for images\n- Code-splitting for optimal bundle size
- No console.log statements in production code
- Smooth scrolling with native CSS or lenis library

## 6. Component Structure

### 6.1 Main Components
- App.tsx (main application wrapper)
- Loader.tsx (initial loading screen)
- Navbar.tsx (fixed navigation)
- Hero.tsx (hero section)
- Skills.tsx (skills display)
- Projects.tsx (project carousel)
- Internship.tsx (experience section)
- Achievements.tsx (achievements carousel)
- Contact.tsx (contact form and social links)
- Footer.tsx (footer section)

### 6.2 Utility Files
- useEmailJS.ts (EmailJS integration hook)
- tailwind.config.js (custom purple colors and animations)
- package.json (dependencies configuration)

## 7. Deployment Considerations

### 7.1 Build Configuration
- Vite as build tool
- Production-ready optimization settings
- Environment variables for EmailJS configuration

### 7.2 Assets to be Provided by User
- Professional photo (replace placeholder)
- Project logos (replace placeholders)
- Achievement photos (replace placeholders for items 6-10)
- Resume PDF file\n- Actual GitHub repository links
- Live demo URLs

### 7.3 Package Dependencies
- react\n- typescript
- tailwindcss\n- framer-motion
- react-icons
- emailjs-com
- react-scroll\n\n## 8. Educational Background (Reference)
- B.Tech in Computer Science & Engineering (Expected 2026, LBRCE,81.3%)
- Intermediate: 96.8%
- SSC: 95%
- Expertise: Full-stack development and cross-platform mobile applications