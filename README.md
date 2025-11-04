# Mihai Iulian Lavric - Front-End Developer Portfolio

A modern, production-ready portfolio website built with Next.js 15, React 18, TypeScript, and Tailwind CSS. Featuring a stunning dark/light theme toggle with a signature red accent color.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 18, TypeScript, and Tailwind CSS
- **Dark/Light Mode**: Seamless theme switching with persistent preference
- **Responsive Design**: Fully optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth interactions
- **Performance Optimized**: Lighthouse score optimized with lazy loading and code splitting
- **SEO Friendly**: Meta tags, Open Graph, and Twitter Card support
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **Type Safe**: Full TypeScript implementation for better developer experience

## 🎨 Design System

- **Primary Color**: Red (#c41016) - Signature brand color
- **Dark Theme**: Near-black background (#0f0f0f) with subtle card overlays
- **Light Theme**: Clean white background with soft gray accents
- **Typography**: Poppins font family with multiple weights
- **Components**: Reusable, modular components following atomic design principles

## 📁 Project Structure

```
My-Portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and Tailwind directives
├── components/              # React components
│   ├── Navbar.tsx          # Navigation with theme toggle
│   ├── Hero.tsx            # Hero section with animated text
│   ├── About.tsx           # About section with profile image
│   ├── Skills.tsx          # Skills showcase with progress bars
│   ├── Projects.tsx        # Projects grid with details
│   ├── Contact.tsx         # Contact section with links
│   ├── Footer.tsx          # Footer with social links
│   ├── ThemeProvider.tsx   # Theme context provider
│   ├── ThemeToggle.tsx     # Dark/Light mode toggle
│   └── ScrollProgress.tsx  # Scroll progress indicator
├── public/                  # Static assets
│   └── assets/             # Images, PDFs, etc.
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Technologies Used

### Core
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework

### Libraries
- **next-themes** - Theme management (dark/light mode)
- **framer-motion** - Animation library
- **lucide-react** - Icon library

### Dev Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MihaiLav/My-Portfolio.git
cd My-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 📦 Deployment

This portfolio is optimized for deployment on:
- **Vercel** (Recommended) - Zero-config deployment
- **Netlify** - Static site hosting
- **Any Node.js hosting** - Server-side rendering support

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MihaiLav/My-Portfolio)

## 🎯 Key Sections

### Hero Section
- Animated role titles (Front-End Developer, React Specialist, UI Engineer, Problem Solver)
- CTA buttons for viewing work and downloading CV
- Social links (GitHub, LinkedIn)
- Scroll indicator

### About Section
- Professional introduction
- Designer's eye meets developer skills
- Highlight cards showcasing key strengths
- Profile image with creative styling

### Skills Section
- 6 categorized skill groups
- Animated progress bars
- Comprehensive technology stack
- Hover effects on skill cards

### Projects Section
- 6 featured projects
- Project cards with tags, descriptions
- GitHub and live demo links
- Featured/non-featured distinction
- Responsive grid layout

### Contact Section
- Email, LinkedIn, GitHub, Location
- Interactive contact cards
- Direct mailto link
- Social media integration

## 🎨 Customization

### Update Personal Information

Edit the following files:
- `components/Hero.tsx` - Name, roles, description
- `components/About.tsx` - About text and highlights
- `components/Skills.tsx` - Skills and proficiency levels
- `components/Projects.tsx` - Project data
- `components/Contact.tsx` - Contact information
- `app/layout.tsx` - Meta tags and SEO

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#c41016", // Your primary color
    // ... other shades
  },
}
```

### Modify Theme

Edit `components/ThemeProvider.tsx` and `app/globals.css` for theme customization.

## 📄 License

All rights reserved © 2024 Mihai Iulian Lavric

## 👤 Author

**Mihai Iulian Lavric**
- Portfolio: [Coming Soon]
- LinkedIn: [@mihai-lav](https://www.linkedin.com/in/mihai-lav/)
- GitHub: [@MihaiLav](https://github.com/MihaiLav)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- The open-source community

---

Built with ❤️ using Next.js, React, and Tailwind CSS
