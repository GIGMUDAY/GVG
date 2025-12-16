# Green Value Group Website

A modern, responsive website for Green Value Group built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🌑 **Dark Theme** - Beautiful black, white, and dark green color scheme
- 🤖 **3D Spline Animation** - Interactive robot animation in the hero section
- ✨ **Shimmer Buttons** - Animated buttons throughout the site
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🍔 **Animated Navigation** - Hamburger menu with smooth animations
- 🎨 **Modern UI Components** - Expandable gallery, testimonials, and more

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Spline 3D** - 3D animations
- **Firebase** - Backend services
- **Chart.js** - Data visualization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GIGMUDAY/GVGwebsite.git
cd GVGwebsite
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at **http://localhost:5173**

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist/` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── sections/       # Page sections
│   ├── forms/          # Form components
│   └── ...
├── config/             # Configuration files
├── lib/                # Utility functions
├── styles/             # CSS files and animations
└── App.tsx             # Main app component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The `dist/` folder contains the production-ready files. Upload this folder to your hosting provider:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **cPanel**: Upload contents of `dist` to `public_html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 Green Value Group. All rights reserved.
