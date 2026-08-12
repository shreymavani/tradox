# Tradox Global Website - Quick Start Guide

## 🎉 Your website is ready!

The website has been successfully created at:
**Location:** `/Users/smavani/tradox-global-website/`

## 📁 What's Included

- ✅ Homepage (`index.html`) with 4 business divisions
- ✅ Corrugated Boxes page (`corrugated-boxes.html`)
- ✅ Thermocol Packaging page (`thermocol-packaging.html`)
- ✅ Paper Products page (`paper-products.html`)
- ✅ Monocarton page (`monocarton.html`)
- ✅ Contact page with smart category selection (`contact.html`)
- ✅ Complete styling (`styles.css`)
- ✅ Interactive JavaScript (`script.js`)
- ✅ Placeholder logo (`logo.svg`)
- ✅ Documentation (`README.md`)

## 🚀 How to View

### Option 1: Open in Browser
Simply double-click on `index.html` file

### Option 2: Use Terminal
```bash
cd /Users/smavani/tradox-global-website
open index.html
```

## ✏️ Next Steps - Customization

### 1. Replace the Logo (IMPORTANT!)
Replace `logo.svg` with your actual Tradox Global logo image:
- Save your logo as `logo.png` or `logo.svg`
- Recommended: transparent background, 200px height

### 2. Update Contact Information
Edit these files and replace placeholder text:
- `index.html` - Footer section
- `contact.html` - Contact information section
- All other HTML files - Footer sections

**What to update:**
- Phone: `+91 XXXX XXXXXX` → Your actual phone numbers
- Email: `info@tradoxglobal.com` → Your actual emails
- Address: `[Your Address]` → Your complete business address

### 3. Test All Pages
Visit each page and verify:
- ✅ Homepage (index.html)
- ✅ Corrugated Boxes page
- ✅ Thermocol Packaging page
- ✅ Paper Products page
- ✅ Monocarton page
- ✅ Contact page

### 4. Test the Contact Form
- Go to Contact page
- Try selecting different categories
- Notice how product types change automatically
- Test form submission (currently shows success message)

## 🎨 Key Features

### Homepage
- Eye-catching hero section with gradient background
- 4 business division cards with icons
- "Why Choose Us" section
- Industries served tags
- Call-to-action buttons

### Product Pages
- Individual pages for each business division
- Product ranges with details
- Industry applications
- Direct links to contact form with pre-selected category

### Contact Page (Smart Features!)
- URL-based category selection (e.g., `contact.html?category=corrugated`)
- Dynamic product type dropdown based on selected category
- Form validation
- Success message feedback

### Mobile Responsive
- Works perfectly on phones, tablets, and desktops
- Hamburger menu on mobile devices
- Touch-friendly buttons and links

## 🛠️ Advanced Customization

### Change Colors
Edit `styles.css` at the top (`:root` section):
```css
:root {
    --primary-color: #4A90E2;  /* Main blue color */
    --secondary-color: #1E3A5F; /* Dark blue */
    --accent-color: #5BA3E8;   /* Light blue */
}
```

### Add More Products
Copy any product card in the product pages and modify:
- Title
- Description
- Features list
- Icon emoji

### Setup Contact Form Backend
1. Open `script.js`
2. Find the form submission section (around line 90)
3. Uncomment the fetch API code
4. Add your backend endpoint URL

## 📱 Testing Checklist

- [ ] Logo displays correctly
- [ ] Navigation works on all pages
- [ ] Mobile menu works (hamburger icon)
- [ ] All internal links work
- [ ] Contact form category selection works
- [ ] Product type dropdown changes with category
- [ ] Form validation works
- [ ] Success message shows after form submission
- [ ] Website looks good on mobile
- [ ] Website looks good on tablet
- [ ] Website looks good on desktop

## 🌐 Deployment

When ready to go live:

1. **Choose a hosting provider:**
   - Netlify (free, easy)
   - Vercel (free, easy)
   - GitHub Pages (free)
   - Traditional web hosting

2. **Upload files:**
   - Upload all files in the folder
   - Keep the file structure intact

3. **Configure domain:**
   - Point your domain to the hosting
   - Add SSL certificate (usually automatic)

## 📞 Need Help?

If you need to make changes:
1. HTML files for content
2. CSS file (`styles.css`) for styling
3. JavaScript file (`script.js`) for interactivity

---

**Website Location:** `/Users/smavani/tradox-global-website/`

**Created:** January 23, 2026

**© 2026 Tradox Global. All rights reserved.**
