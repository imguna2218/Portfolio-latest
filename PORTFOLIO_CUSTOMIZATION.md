# Portfolio Customization Guide

## Overview
Your portfolio website has been successfully created with a stunning dark cyberpunk theme featuring purple accents, smooth animations, and a fully responsive design.

## Assets to Replace

### 1. Profile Photo
**Location:** Hero section
**Current:** Placeholder image
**To Replace:** 
- Update the image URL in `src/components/Hero.tsx` (line ~42)
- Replace: `https://via.placeholder.com/200?text=Parisa+GP`
- With: Your actual professional photo URL or local path

### 2. Project Logos
**Location:** Projects section
**Current:** Placeholder images
**To Replace:**
- Update in `src/components/Projects.tsx` (lines ~11, 22, 33)
- Replace the placeholder URLs with actual project logos

### 3. Company Logo
**Location:** Internship section
**Current:** Placeholder image
**To Replace:**
- Update in `src/components/Internship.tsx` (line ~10)
- Replace: `https://via.placeholder.com/80?text=Leantech`

### 4. Achievement Images
**Location:** Achievements section
**Current:** 5 real placeholders + 5 TBD placeholders
**To Replace:**
- Update in `src/components/Achievements.tsx` (lines 16-45)
- Replace achievement images 6-10 with your actual achievement photos
- Update descriptions for achievements 6-10

### 5. Resume PDF
**Location:** `public/resume.pdf`
**Current:** Empty placeholder file
**To Replace:**
- Add your actual resume PDF to `/workspace/app-82ipbr6itj41/public/resume.pdf`
- The download button will automatically serve this file

## Content Customization

### Personal Information
Update the following in respective component files:

**Hero Section** (`src/components/Hero.tsx`):
- Professional title
- Tagline
- Quote

**Skills Section** (`src/components/Skills.tsx`):
- Add/remove skills
- Adjust skill levels (percentage)
- Modify skill categories

**Projects Section** (`src/components/Projects.tsx`):
- Project names and descriptions
- Tech stack badges
- GitHub repository links
- Live demo URLs

**Internship Section** (`src/components/Internship.tsx`):
- Company details
- Job responsibilities
- Duration

**Contact Section** (`src/components/Contact.tsx`):
- Email address (currently: gunasekharparisa2218@gmail.com)
- Social media links

## EmailJS Integration (Optional)

To enable the contact form to send actual emails:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Install the EmailJS SDK (already included)
4. Update `src/components/Contact.tsx` with your EmailJS credentials:
   - Service ID
   - Template ID
   - Public Key

Example implementation:
```typescript
import emailjs from '@emailjs/browser';

// In handleSubmit function:
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
)
```

## Color Customization

The purple theme can be customized in `src/index.css`:

```css
--primary: 263 70% 55%;        /* Main purple color */
--primary-glow: 263 85% 70%;   /* Lighter purple for effects */
```

Change these HSL values to your preferred color scheme.

## Features Included

✅ **Initial Loader** - 1-second code rain animation
✅ **Fixed Navigation** - Glassmorphism navbar with smooth scrolling
✅ **Hero Section** - Animated star background with profile photo
✅ **Skills Section** - Animated progress bars with tech icons
✅ **Projects Carousel** - Swipeable project showcase
✅ **Internship Card** - Clickable card with modal details
✅ **Achievements Carousel** - Auto-rotating achievement showcase
✅ **Contact Form** - Ready for EmailJS integration
✅ **Resume Download** - One-click PDF download
✅ **Social Links** - LinkedIn, GitHub, LeetCode
✅ **Responsive Design** - Mobile-first approach
✅ **Smooth Animations** - Framer Motion powered
✅ **Glassmorphism Effects** - Modern UI design

## Development

The application is ready to use. All components are fully functional and the build passes all linting checks.

## Notes

- All placeholder images use `via.placeholder.com` - replace with your actual images
- The contact form currently shows a success toast but doesn't send emails until EmailJS is configured
- Resume download requires an actual PDF file in the public folder
- All animations are optimized for performance
- The design is fully responsive across all device sizes

## Support

For any customization questions or issues, refer to the component files which are well-structured and commented.
