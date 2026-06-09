# Muhammed Umar Akmal - Portfolio Website

A premium, cinematic portfolio website showcasing AI engineering and full-stack development expertise. Built with modern web technologies and featuring smooth animations, responsive design, and a sophisticated aesthetic inspired by Linear, Vercel, and Raycast.

## 🚀 Features

- **Cinematic Design**: Premium UI with soft glows, smooth transitions, and elegant typography
- **Bento Grid Layouts**: Modern card-based layouts across all sections
- **Smooth Animations**: Framer Motion animations throughout, including scroll-triggered reveals
- **Responsive Design**: Fully responsive across all device sizes
- **SEO Optimized**: Complete meta tags and semantic HTML structure
- **Performance Focused**: Optimized with Vite for lightning-fast load times
- **Interactive Elements**: Hover effects, floating elements, and micro-interactions

## 🛠️ Tech Stack

- **Framework**: React.js 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+)

## 📋 Sections

1. **Hero** - Split layout with animated introduction and large cinematic typography
2. **About** - Two-column layout with statistics and core technologies
3. **Experience** - Bento grid showcasing professional journey with featured current role
4. **Education** - Educational background, certifications, and language proficiency
5. **Projects** - Featured project grid with tech stacks and live demo links
6. **Skills** - Interactive skill categories with animated cards
7. **Contact** - Contact form with validation and social links

## 🎨 Design System

### Color Palette
- **Primary**: `#A3FF12` (Signature green)
- **Background**: `#000000` (Pure black)
- **Surface**: `#111111` (Dark gray)
- **Card**: `#171717` (Lighter gray)
- **Border**: `rgba(163,255,18,0.15)` (Translucent green)
- **Text**: `#FFFFFF` (White)
- **Muted**: `#A1A1AA` (Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300-900
- **Style**: Clean, modern, highly readable

### Visual Elements
- Soft shadows and glow effects
- Large spacing for breathing room
- Rounded corners (xl, 2xl)
- Glassmorphism with backdrop blur
- Smooth transitions (300ms)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd umer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
umer-portfolio/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/          # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── data/              # Content data
│   │   └── portfolioData.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies
```

## 🎯 Customization

### Update Personal Information
Edit `src/data/portfolioData.js` to update:
- Personal details (name, email, location)
- Work experience
- Education and certifications
- Projects
- Skills

### Modify Design
- **Colors**: Update `tailwind.config.js` theme colors
- **Animations**: Adjust Framer Motion parameters in components
- **Typography**: Change font in `src/index.css`

### Add New Sections
1. Create component in `src/sections/`
2. Import in `src/App.jsx`
3. Add navigation link in `src/data/portfolioData.js`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build command: `npm run build`
4. Publish directory: `dist`

### Manual Deployment
```bash
npm run build
```
Upload the contents of the `dist` folder to your web server.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Features Implemented

✅ Floating Bento-style navbar with active section indicator  
✅ Full-viewport hero with animated elements  
✅ Smooth scroll navigation  
✅ Scroll-triggered animations  
✅ Stagger animations for cards  
✅ Hover effects and micro-interactions  
✅ Mobile-responsive design  
✅ Contact form with validation  
✅ SEO metadata  
✅ Performance optimized  

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Muhammed Umar Akmal**
- Email: umeraura99@gmail.com
- LinkedIn: [linkedin.com/in/umar-backend-engineer](https://linkedin.com/in/umar-backend-engineer)
- Location: Karachi, Pakistan

---

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion
