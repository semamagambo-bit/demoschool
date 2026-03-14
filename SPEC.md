# Nakasero Primary School Website Specification

## 1. Project Overview
- **Project Name**: Nakasero Primary School Website
- **Type**: Multi-page educational website
- **Core Functionality**: A modern, professional school website showcasing academics, admissions, and contact information
- **Target Users**: Parents, prospective students, educators, and community members

## 2. Design System

### Color Palette
- **Primary Green**: `#0D7C3F` (Deep forest green)
- **Primary Green Light**: `#14A85C` (Vibrant green)
- **Primary Green Dark**: `#06522A` (Dark green)
- **White**: `#FFFFFF`
- **Off-White**: `#F8FDF9` (Very light green tint)
- **Accent Gold**: `#D4AF37` (For highlights)
- **Text Dark**: `#1A1A1A`
- **Text Gray**: `#5A5A5A`

### Typography
- **Headings**: 'Playfair Display', serif (elegant, academic feel)
- **Body**: 'Poppins', sans-serif (modern, readable)
- **Accent**: 'Caveat', cursive (for decorative elements)

### Visual Style
- Clean, minimalist with strategic use of whitespace
- Subtle shadows and modern card designs
- Smooth animations and transitions
- Hero sections with overlay gradients
- Glassmorphism effects on cards
- Geometric patterns and shapes as decorative elements

## 3. Page Structure

### Pages to Create
1. **index.html** - Home/Landing Page
2. **about.html** - About Us
3. **academics.html** - Academic Programs
4. **admissions.html** - Admissions & Enrollment
5. **contact.html** - Contact Information

### Shared Components
- **Header**: Fixed navigation with logo, menu links, CTA button
- **Footer**: Contact info, quick links, social media, copyright

## 4. Page Specifications

### Home Page (index.html)
- **Hero Section**: Full-width banner with school name, tagline, animated text, CTA buttons
- **Welcome Section**: Principal's message with image
- **Stats Section**: Animated counters (students, teachers, programs, years)
- **Features Section**: 4-6 key features with icons
- **Gallery Preview**: Image grid showing school life
- **Testimonials**: Parent/student testimonials carousel
- **CTA Section**: Call to action for admissions

### About Page (about.html)
- **Hero**: Page title banner
- **History**: School history timeline
- **Mission & Vision**: Dual card layout
- **Values**: Core values with icons
- **Leadership**: Principal and staff profiles
- **Facilities**: Image gallery of school facilities

### Academics Page (academics.html)
- **Hero**: Page title banner
- **Academic Programs**: Cards for each grade/program
- **Curriculum**: Subject areas with descriptions
- **Activities**: Sports, arts, clubs
- **Achievements**: Awards and accomplishments

### Admissions Page (admissions.html)
- **Hero**: Page title banner
- **Process**: Step-by-step admission process
- **Requirements**: Checklist of needed documents
- **Fees**: Tuition and fee structure
- **FAQ**: Common questions accordion
- **Apply Button**: CTA to application form

### Contact Page (contact.html)
- **Hero**: Page title banner
- **Contact Form**: Name, email, message form with validation
- **Contact Info**: Address, phone, email cards
- **Map**: Embedded Google Maps placeholder
- **Hours**: School hours

## 5. Animations & Interactivity
- Smooth scroll behavior
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Mobile menu toggle (hamburger)
- Form validation with visual feedback
- Counter animations for statistics

## 6. Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 7. File Structure
```
nakaseroschoolwebsite/
├── index.html
├── about.html
├── academics.html
├── admissions.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── SPEC.md
