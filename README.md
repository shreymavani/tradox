# Tradox Global Website

A modern, professional website for **Tradox Global** - a comprehensive packaging and fastening solutions provider.

## About Tradox Global

**Tagline:** *Global Thinking. Real Impact.*

Tradox Global is your trusted partner for:
1. **Corrugated Boxes** - Premium quality packaging solutions
2. **Thermocol Packaging** - Superior thermal insulation solutions
3. **Screws & Fasteners** - Comprehensive fastening solutions

## Website Structure

### Pages
- **index.html** - Homepage with business divisions overview
- **corrugated-boxes.html** - Corrugated boxes product page
- **thermocol-packaging.html** - Thermocol packaging product page
- **screws.html** - Screws & fasteners product page
- **contact.html** - Contact form with category-specific inquiry options

### Features

#### Home Page
- Hero section with call-to-action buttons
- Three business division cards with detailed features
- "Why Choose Us" section with key benefits
- Industries served showcase
- Call-to-action section

#### Product Pages
- Dedicated pages for each business division
- Detailed product ranges with specifications
- Industry applications
- Category-specific CTA to contact page

#### Contact Page
- Multiple contact methods (address, phone, email)
- Business hours information
- Smart contact form with:
  - Category selection (Corrugated, Thermocol, Screws, General, Bulk Order)
  - Dynamic product type dropdown based on selected category
  - Quantity estimation field
  - Detailed requirements textarea
- Success message feedback

### Design Features
- Modern, clean, and professional design
- Responsive layout (mobile, tablet, desktop)
- Blue gradient color scheme (#4A90E2 to #1E3A5F)
- Smooth animations and transitions
- Interactive hover effects
- Mobile-friendly navigation menu

### Technologies Used
- HTML5
- CSS3 (Custom properties, Grid, Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter)
- SVG icons

## Setup Instructions

1. **Replace the logo:**
   - Replace `logo.png` with your actual Tradox Global logo
   - Recommended size: 200px height, transparent background

2. **Update contact information:**
   - Edit contact details in all HTML files:
     - Phone numbers
     - Email addresses
     - Physical address
   - Update in footer and contact page

3. **Customize colors (optional):**
   - Open `styles.css`
   - Modify CSS custom properties in `:root` selector

4. **Add backend for contact form:**
   - The contact form currently logs to console
   - Uncomment and configure the fetch API call in `script.js`
   - Set up your backend endpoint to receive form submissions

## File Structure

```
tradox-global-website/
├── index.html
├── corrugated-boxes.html
├── thermocol-packaging.html
├── screws.html
├── contact.html
├── styles.css
├── script.js
├── logo.png (to be replaced with your actual logo)
└── README.md
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Key Features Implemented

### Navigation
- Sticky navigation bar
- Active page highlighting
- Mobile hamburger menu
- Smooth scroll to sections

### Contact Form Intelligence
- URL parameter support (e.g., `contact.html?category=corrugated`)
- Dynamic product type options based on category
- Form validation
- Success message display

### Responsive Design
- Breakpoints at 968px and 640px
- Mobile-optimized navigation
- Grid layouts adapt to screen size
- Touch-friendly buttons and links

## Customization Tips

### Adding New Products
1. Copy a product card in the respective product page
2. Update the title, description, and features
3. Change the emoji icon in the product-image div

### Modifying Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #4A90E2;
    --secondary-color: #1E3A5F;
    /* etc. */
}
```

### Adding New Pages
1. Copy an existing HTML file
2. Update the navigation active class
3. Add link in all navigation menus
4. Update footer links

## Next Steps

1. ✅ Replace placeholder logo with actual Tradox Global logo
2. ✅ Update all contact information
3. ⬜ Set up contact form backend
4. ⬜ Add actual product images
5. ⬜ Optimize images for web
6. ⬜ Add analytics tracking
7. ⬜ Set up hosting
8. ⬜ Configure domain name
9. ⬜ Add SSL certificate
10. ⬜ SEO optimization

## Support

For questions or issues, please contact: info@tradoxglobal.com

---

**© 2026 Tradox Global. All rights reserved.**
