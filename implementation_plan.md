# Building Imthiyas Ibnu Ibrahim's Portfolio Website

The goal is to build a highly attractive, dynamic, and professional full-stack portfolio website. The website will highlight skills in software engineering, DevOps (AWS), visual storytelling (cinematography and photography), and entrepreneurial ventures (digital marketing and personalized framing).

## User Review Required

> [!IMPORTANT]
> **Firebase Setup**: We will need a Firebase project to handle the "Backend Data Collection" for the contact form. Please let me know if you would like me to provide instructions on setting up a free Firebase project and getting the configuration keys, or if you prefer another backend solution (like a simple Node.js/Express server or a third-party form service like Formspree).
>
> **Image Generation**: I will use an AI image generator tool to create placeholder images for the Hero and Creative Portfolio sections so the layout is complete. You can easily replace these with your actual photos later.

## Proposed Changes

We will use Next.js (App Router), Tailwind CSS for styling, and Framer Motion for premium scroll animations. The project will be created in `C:\Users\imthi\.gemini\antigravity\scratch\portfolio-imthiyas`.

### Frontend Infrastructure (Next.js + Tailwind)
#### [NEW] `portfolio-imthiyas/app/page.tsx`
The main landing page assembling all sections.
#### [NEW] `portfolio-imthiyas/tailwind.config.ts`
Configuration for custom colors, typography, and premium design tokens.

### UI Components
#### [NEW] `portfolio-imthiyas/components/Hero.tsx`
Bold introduction with high-impact typography and animations.
#### [NEW] `portfolio-imthiyas/components/JourneyTimeline.tsx`
Interactive timeline detailing progression in CS, AWS, and DevOps.
#### [NEW] `portfolio-imthiyas/components/CreativePortfolio.tsx`
Masonry-style gallery for Nikon Z6 photography and Frame'24 projects.
#### [NEW] `portfolio-imthiyas/components/BusinessVentures.tsx`
Section highlighting digital marketing and personalized framing businesses.
#### [NEW] `portfolio-imthiyas/components/ContactForm.tsx`
Functional form connecting to the backend.

### Backend Infrastructure
#### [NEW] `portfolio-imthiyas/lib/firebase.ts`
Firebase configuration and initialization logic for storing contact submissions in Firestore.

## Verification Plan

### Automated Tests
1. I will use the `run_command` tool to execute `npm run build` to ensure the Next.js application compiles successfully without TypeScript or Linting errors.

### Manual Verification
1. I will use the **Browser Agent** to navigate to `http://localhost:3000`.
2. The Browser agent will verify visually the Hero, Timeline, Gallery, and Business sections.
3. The Browser agent will test the responsive design (mobile vs desktop view).
4. The Browser agent will fill out and submit the Contact Form to verify data is successfully sent to the backend/Firebase mock.
