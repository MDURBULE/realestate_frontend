# Premium Real Estate Solutions

A modern, SEO-friendly real estate website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏠 Features

### Core Features
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Fast Performance**: Built with Next.js 14 for optimal speed
- **Modern UI**: Clean, professional design with Tailwind CSS

### Pages
- **Home** (`/`) - Landing page with hero section, features, and testimonials
- **About Us** (`/about`) - Company information, team, and values
- **Properties** (`/properties`) - Property listings with filters
- **Services** (`/services`) - Comprehensive service offerings
- **Contact Us** (`/contact`) - Contact form and company information

### Components
- **Navbar** - Responsive navigation with mobile menu
- **Hero** - Eye-catching landing section
- **WhyChoose** - Features and benefits
- **ResidentialLayouts** - Property showcase
- **GrowthZones** - Investment opportunities
- **Testimonials** - Customer reviews
- **ContactAgent** - Agent contact form
- **FaqAndAbout** - FAQ and about section
- **Footer** - Site footer with links
- **FloatingButtons** - Call-to-action buttons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd realestate_frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
realestate_frontend/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── WhyChoose.tsx
│   │   │   ├── ResidentialLayouts.tsx
│   │   │   ├── GrowthZones.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── ContactAgent.tsx
│   │   │   ├── FaqAndAbout.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── FloatingButtons.tsx
│   │   ├── page.tsx            # Home page
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── properties/
│   │   │   └── page.tsx        # Properties page
│   │   ├── services/
│   │   │   └── page.tsx        # Services page
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact page
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles
│   │   ├── sitemap.ts          # Sitemap generation
│   │   └── robots.ts           # Robots.txt generation
│   └── ...
├── public/                     # Static assets
│   ├── logo.svg
│   ├── agent.jpg
│   └── ...
├── package.json
├── next.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling. The design system includes:

- **Colors**: Blue primary theme with gray accents
- **Typography**: Clean, readable fonts
- **Components**: Consistent card designs, buttons, and forms
- **Responsive**: Mobile-first responsive design

## 🔧 Configuration

### SEO Configuration
- Meta tags for each page
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Sitemap.xml generation
- Robots.txt configuration

### Next.js Configuration
- TypeScript support
- App Router (Next.js 13+)
- Image optimization
- Font optimization

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Hostinger Deployment (Recommended for this project)

This project is configured for static export and optimized for Hostinger hosting.

#### Method 1: Local Build & Upload (Recommended)

1. **Build the project locally**
   ```bash
   # Windows
   build.bat
   
   # Linux/Mac
   chmod +x build.sh
   ./build.sh
   
   # Or manually
   npm install
   npm run build
   ```

2. **Upload to Hostinger**
   - Upload the contents of the `out` folder to your Hostinger `public_html` directory
   - Make sure the `.htaccess` file is in the root directory
   - Set file permissions: 644 for files, 755 for directories

#### Method 2: Build on Hostinger (if SSH access available)

1. **Upload source code**
   - Upload your entire project to a subdirectory (e.g., `src`)
   - Don't upload `node_modules` or `.next` folders

2. **SSH into Hostinger**
   ```bash
   cd public_html/src
   npm install
   npm run build
   cp -r out/* ../public_html/
   ```

#### Environment Variables

Set these in your Hostinger environment or update the code:
- `NEXT_PUBLIC_BASE_URL`: Your actual domain (e.g., https://yourdomain.com)

### Troubleshooting 403 Forbidden Errors

If you encounter 403 Forbidden errors:

1. **Check File Permissions**
   - Files: 644
   - Directories: 755
   - `.htaccess`: 644

2. **Verify .htaccess Location**
   - Must be in the root directory (public_html)

3. **Check Hostinger Settings**
   - Ensure static hosting is enabled
   - Verify domain/subdomain configuration

4. **Clear Browser Cache**
   - Hard refresh (Ctrl+F5) or clear cache

5. **Check for Missing Files**
   - Ensure all files from the `out` directory are uploaded
   - Verify `index.html` exists in the root

### Other Platforms
The project can also be deployed to:
- Vercel (Recommended for Next.js)
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🔍 SEO Features

- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD markup for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Prevent duplicate content issues

## 📞 Contact

For support or questions:
- Email: info@premiumrealestate.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
