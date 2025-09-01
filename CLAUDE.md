# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a **NeuroWave AI product landing page** - a single-page application (SPA) built with Vite and vanilla JavaScript. The project showcases a fictional brain wave signal AI reader product using Apple-inspired design principles.

## Common Development Commands

### Development Server
- `npm run dev` - Start the Vite development server (runs on http://localhost:5173)
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

### Package Management  
- `npm install` - Install all dependencies
- Node.js version 20.19+ or 22.12+ is required (current setup uses Node.js 20.15.1 but shows version warnings)

## Architecture & Code Structure

### Application Architecture
The project follows a **vanilla JavaScript SPA pattern** with:
- **Single HTML template** (`index.html`) as the application shell
- **Programmatic DOM manipulation** in `main.js` using template strings 
- **CSS-based styling and animations** in `style.css` with Apple design system
- **No framework dependencies** - pure vanilla JavaScript implementation

### Key Technical Patterns

**HTML Generation Pattern:**
- All page content is generated via `document.querySelector('#app').innerHTML` in `main.js`
- Uses ES6 template literals for HTML structure
- Sections include: Navigation, Hero, Features, Technology, Specifications, Contact, Footer

**Animation System:**
- CSS-based animations using `@keyframes` and CSS transitions
- JavaScript-driven scroll animations using `IntersectionObserver`
- Custom animations: brain pulse, wave flow, neural network connections, slide-in effects

**Responsive Design:**
- CSS Grid and Flexbox layouts
- Media queries for tablet (`max-width: 968px`) and mobile (`max-width: 640px`)
- Mobile-first responsive typography and spacing

**Interactive Elements:**
- Smooth scroll navigation between sections
- Form handling with simulated submission feedback
- Hover effects and micro-interactions throughout

### Styling Architecture

**CSS Custom Properties (Variables):**
```css
--primary-color: #007AFF
--gradient-brain: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--shadow-soft, --shadow-medium, --shadow-large
```

**Design System:**
- Apple-inspired typography using Inter font family
- Three-tier shadow system for depth
- Consistent color palette with semantic naming
- Modular section-based styling approach

### JavaScript Structure

**Initialization Functions:**
- `initializeAnimations()` - Sets up scroll observers and animation delays
- `setupNavigation()` - Handles smooth scrolling between sections  
- `setupContactForm()` - Form submission handling with feedback

**Event Handling:**
- Scroll-based animations using IntersectionObserver API
- Click handlers for navigation and form submission
- CSS animation delays set programmatically in JavaScript

## Important Implementation Details

**Content Strategy:** 
The page is designed as a product landing page for "NeuroWave AI" - a fictional brain wave signal reader. All content, specifications, and features are crafted for demonstration purposes.

**Performance Considerations:**
- Vite provides fast development builds and optimized production bundles  
- CSS animations use `transform` and `opacity` for better performance
- Images are minimal (emoji-based icons) to reduce load times

**Browser Compatibility:**
- Uses modern JavaScript features (ES6+ template literals, IntersectionObserver)
- CSS Grid and Flexbox for layouts
- Backdrop-filter effects for glassmorphism (may not work in all browsers)

## Development Workflow

When making changes to this project:

1. **Content Updates:** Modify the template string in `main.js`
2. **Styling Changes:** Update `style.css` following the existing CSS custom properties
3. **Interactive Features:** Add JavaScript functions and call them after DOM generation
4. **Testing:** Use `npm run dev` to see changes with hot module replacement
5. **Production:** Run `npm run build` to create optimized build in `dist/` directory

The application state is entirely managed through DOM manipulation and CSS classes, making it straightforward to modify individual sections without affecting others.