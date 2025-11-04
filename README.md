# HR & Staffing Agencies Website

A modern, professional website for HR & Staffing Agencies built with React, Node.js, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: 
  - Animated mobile menu with Framer Motion
  - Hero image slider with Swiper
  - Integrated contact form with validation
  - Mega footer with responsive accordion
- **20+ Pages**: Comprehensive website with all essential pages
- **SEO Optimized**: Includes sitemap.xml and robots.txt
- **Contact Integration**: Functional contact form with email sending capability
- **Social Media**: Integrated social media links

## Technology Stack

### Frontend (Client)
- React 18
- Vite (build tool)
- React Router (navigation)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Swiper (image slider)
- Lucide React (icons)

### Backend (Server)
- Node.js
- Express.js
- CORS
- Helmet (security)
- Express Rate Limit
- Nodemailer (email)
- dotenv (environment variables)

## Project Structure

```
HR & staffing agencies/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Static assets
│   │   └── utils/         # Utility functions
│   ├── public/            # Public assets
│   └── package.json
├── server/                # Node.js backend
│   ├── server.js         # Main server file
│   └── package.json
└── README.md
```

## Pages Included

### Main Pages
- Home
- About Us
- Services
- Portfolio/Gallery
- Blog
- Contact
- Pricing
- Testimonials
- FAQ
- Careers

### Service Pages
- Temporary Staffing
- Permanent Placement
- Executive Search
- Payroll Services
- HR Consulting
- Training & Development

### Industry Solution Pages
- Technology Staffing
- Healthcare Staffing
- Finance Staffing
- Manufacturing Staffing
- Retail Staffing
- Industry Solutions

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory
2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

### Environment Setup

1. Create a `.env` file in the server directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CONTACT_EMAIL=contact@hrstaffing.com
   PORT=3001
   NODE_ENV=development
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd server
   npm run dev
   ```
   Server will run on http://localhost:3001

2. Start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```
   Client will run on http://localhost:3000

### Building for Production

1. Build the client:
   ```bash
   cd client
   npm run build
   ```

2. Start the production server:
   ```bash
   cd server
   npm start
   ```

## Features Overview

### Header
- Top bar with contact information and WhatsApp link
- Responsive navigation menu
- Animated mobile menu with Framer Motion
- "Call Now" button for desktop

### Hero Section
- Dynamic image slider with navigation
- Integrated contact form
- Responsive design

### Footer
- Mega footer with comprehensive links
- Contact information
- Social media integration
- Responsive accordion on mobile
- Copyright with Octaleads attribution

### Contact Form
- Form validation
- Email sending capability
- Success/error states
- Service selection dropdown

### SEO
- Comprehensive sitemap.xml
- Optimized robots.txt
- Meta tags for social sharing
- Semantic HTML structure

## Customization

### Colors
Edit `client/tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Content
- Update company information in components
- Replace placeholder images with actual photos
- Modify service descriptions and features
- Update contact information

### Email Configuration
Configure email settings in `server/.env`:
- SMTP settings for your email provider
- Contact email address
- Email templates can be customized in `server/server.js`

## Deployment

### Frontend
The client can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Static hosting services

### Backend
The server can be deployed to:
- Heroku
- AWS EC2
- DigitalOcean
- Railway
- Vercel (serverless)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images
- Lazy loading
- Code splitting
- Minified assets
- Responsive images

## Security

- Helmet.js for security headers
- Rate limiting
- Input validation
- CORS configuration
- Environment variables for sensitive data

## Contributing

This project is maintained by SV Manpower services. For updates or modifications, please contact the development team.

## License

This project is licensed under the MIT License.

## Support

For support, email contact@hrstaffing.com or visit our website.

---

**Designed and developed by [Octaleads Pvt Ltd](https://www.octaleads.com/)**
