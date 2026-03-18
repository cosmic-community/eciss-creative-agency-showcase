# ECISS Creative Agency Showcase
![App Preview](https://imgix.cosmicjs.com/ee9660c0-22df-11f1-8e73-95937fcad31d-photo-1500648767791-00dcc994a43e-1773848052554.jpg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive creative agency website for ECISS that highlights the agency profile, team, case studies, testimonials, and contact details powered by Cosmic.

## Features
- Dynamic hero and agency profile content from Cosmic
- Team section driven by JSON metafield data
- Case studies grid with services, summaries, and results
- Testimonials section with client quotes
- Responsive navigation with smooth section anchors
- Robust empty-state handling for new buckets

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69bac3bb3704c8f1904d12e3&clone_repository=69bac62f3704c8f1904d132a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Stwórz wizytówkę agencji kreatywnej Full Stack. ECISS | Pobudzamy zmysły. Doganiamy przyszłość.  Zespół kreatywny, studium przypadku - wdrożenia, referencje. Kontakt."

### Code Generation Prompt

> "Based on the content model I created for "Stwórz wizytówkę agencji kreatywnej Full Stack. ECISS | Pobudzamy zmysły. Doganiamy przyszłość.  Zespół kreatywny, studium przypadku - wdrożenia, referencje. Kontakt.", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK
- Marked (Markdown rendering)

## Getting Started

### Prerequisites
- Bun installed on your machine
- A Cosmic bucket with the provided object types

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples
```ts
import { cosmic } from '@/lib/cosmic'

const { objects } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration
This project uses Cosmic content from:
- `agency-profile` (singleton)
- `case-studies`
- `testimonials`

All data is fetched server-side with defensive error handling for empty results.

## Deployment Options
- **Vercel**: Recommended for Next.js
- **Netlify**: Works for static builds
- Ensure environment variables are set in your hosting platform dashboard

<!-- README_END -->