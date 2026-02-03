// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const categorySelect = document.getElementById('category');
const productTypeGroup = document.getElementById('productTypeGroup');
const productTypeSelect = document.getElementById('productType');

// Product type options based on category
const productTypes = {
    corrugated: [
        'Folding Cartons',
        'Regular Slotted Containers',
        'E-commerce Boxes',
        'Heavy-Duty Boxes',
        'Die-Cut Boxes',
        'Food & Beverage Boxes',
        'Custom Design'
    ],
    thermocol: [
        'Thermocol Boxes',
        'Custom Molded Inserts',
        'Cold Chain Packaging',
        'Electronics Packaging',
        'Food Grade Boxes',
        'Industrial Parts Packaging',
        'Custom Solution'
    ],
    screws: [
        'Wood Screws',
        'Machine Screws',
        'Self-Tapping Screws',
        'Hex Bolts & Nuts',
        'Drywall Screws',
        'Anchor Bolts',
        'Stainless Steel Fasteners',
        'Washers & Rivets',
        'Specialty Fasteners'
    ]
};

// Email mapping for each category
const categoryEmails = {
    corrugated: 'corrugatedboxes@tradoxglobal.com',
    thermocol: 'thermocol@tradoxglobal.com',
    screws: 'stationery@tradoxglobal.com',
    general: 'corrugatedboxes@tradoxglobal.com',
    bulk: 'corrugatedboxes@tradoxglobal.com'
};

// Handle category change
if (categorySelect) {
    // Check URL parameters for pre-selected category
    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('category');
    if (urlCategory) {
        categorySelect.value = urlCategory;
        updateProductTypes(urlCategory);
    }

    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        updateProductTypes(selectedCategory);
    });
}

function updateProductTypes(category) {
    if (category && productTypes[category]) {
        productTypeGroup.style.display = 'block';
        productTypeSelect.innerHTML = '<option value="">Select product type</option>';
        
        productTypes[category].forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            productTypeSelect.appendChild(option);
        });
    } else {
        productTypeGroup.style.display = 'none';
        productTypeSelect.innerHTML = '<option value="">Select product type</option>';
    }
    
    // Update email field with category-specific email
    const emailField = document.getElementById('email');
    if (emailField && categoryEmails[category]) {
        // Store the user's email temporarily
        const userEmail = emailField.value;
        
        // Add a data attribute to show which department email will receive the inquiry
        emailField.setAttribute('data-inquiry-email', categoryEmails[category]);
        
        // Show a helper text for the user
        let helperText = document.getElementById('email-helper');
        if (!helperText) {
            helperText = document.createElement('small');
            helperText.id = 'email-helper';
            helperText.style.display = 'block';
            helperText.style.marginTop = '0.5rem';
            helperText.style.color = 'var(--primary-color)';
            helperText.style.fontSize = '0.9rem';
            emailField.parentNode.appendChild(helperText);
        }
        helperText.textContent = `Your inquiry will be sent to: ${categoryEmails[category]}`;
    }
}

// Handle form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Add the department email to the data
        const emailField = document.getElementById('email');
        const departmentEmail = emailField ? emailField.getAttribute('data-inquiry-email') : null;
        if (departmentEmail) {
            data.departmentEmail = departmentEmail;
        }
        
        console.log('Form submitted with data:', data);
        console.log('This inquiry will be sent to:', departmentEmail);
        
        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.add('show');
        
        // Reset form
        contactForm.reset();
        productTypeGroup.style.display = 'none';
        
        // Remove helper text
        const helperText = document.getElementById('email-helper');
        if (helperText) {
            helperText.remove();
        }
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
        
        // In a real application, you would send this data to a server
        // Example using fetch:
        /*
        fetch('your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            successMessage.classList.add('show');
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting your inquiry. Please try again.');
        });
        */
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Counter Animation Function
function animateCounter(element, target, duration = 2000, suffix = '') {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Stats Counter Observer
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumber = entry.target.querySelector('.stat-number');
            const text = statNumber.textContent.trim();
            
            // Parse the number and suffix
            if (text.includes('+')) {
                const num = parseInt(text.replace('+', ''));
                animateCounter(statNumber, num, 2000, '+');
            } else if (text.includes('%')) {
                const num = parseInt(text.replace('%', ''));
                animateCounter(statNumber, num, 2000, '%');
            } else if (text.includes('/')) {
                // For 24/7, just show it
                statNumber.textContent = text;
            } else {
                const num = parseInt(text);
                animateCounter(statNumber, num, 2000);
            }
        }
    });
}, {
    threshold: 0.5
});

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.solution-card, .feature-item, .product-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // Observe stat items for counter animation
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        statsObserver.observe(item);
    });
});
