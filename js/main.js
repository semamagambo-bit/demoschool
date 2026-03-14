/* ========================================
   RINES SECONDARY SCHOOL - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initHeader();
  initMobileMenu();
  initScrollAnimations();
  initCounterAnimation();
  initTestimonialSlider();
  initFAQAccordion();
  initContactForm();
  initSmoothScroll();
  updateCurrentYear();
});

/* ========================================
   UPDATE CURRENT YEAR IN FOOTER (Auto-updates annually)
   ======================================== */
function updateCurrentYear() {
  const currentYear = new Date().getFullYear();
  const yearSpans = document.querySelectorAll('#current-year');
  
  yearSpans.forEach(yearSpan => {
    yearSpan.textContent = currentYear;
  });
}

/* ========================================
   HEADER SCROLL EFFECT
   ======================================== */
function initHeader() {
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

/* ========================================
   MOBILE MENU
   ======================================== */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (hamburger && navMenu) {
    const toggleMenu = (open) => {
      const isOpen = typeof open === 'boolean' ? open : !hamburger.classList.contains('active');
      hamburger.classList.toggle('active', isOpen);
      navMenu.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', function() {
      toggleMenu();
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        toggleMenu(false);
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if (fadeElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    fadeElements.forEach(el => observer.observe(el));
  }
}

/* ========================================
   COUNTER ANIMATION
   ======================================== */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');
  
  if (counters.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
  }
}

/* ========================================
   TESTIMONIAL SLIDER
   ======================================== */
function initTestimonialSlider() {
  const slider = document.querySelector('.testimonials-slider');
  const dots = document.querySelectorAll('.testimonial-dot');
  const items = document.querySelectorAll('.testimonial-item');
  
  if (slider && dots.length > 0 && items.length > 0) {
    let currentSlide = 0;
    
    const showSlide = (index) => {
      items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    };
    
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % items.length;
      showSlide(currentSlide);
    };
    
    // Auto-advance slides
    setInterval(nextSlide, 5000);
    
    // Manual navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
    
    // Show initial slide
    showSlide(0);
  }
}

/* ========================================
   FAQ ACCORDION
   ======================================== */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
      question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* ========================================
   CONTACT FORM
   ======================================== */
function initContactForm() {
  // Handle both contact and application forms
  const forms = document.querySelectorAll('#contactForm, #applicationForm');
  const successMessages = document.querySelectorAll('.form-success');

  // EmailJS configuration (update these values with your own EmailJS credentials)
  const emailjsConfig = {
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    publicKey: 'YOUR_PUBLIC_KEY'
  };

  const isEmailjsConfigured = typeof emailjs !== 'undefined'
    && emailjsConfig.serviceId !== 'YOUR_SERVICE_ID'
    && emailjsConfig.templateId !== 'YOUR_TEMPLATE_ID'
    && emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY';
  
  forms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formId = form.id;
      const successMessage = form.parentElement.querySelector('.form-success') || document.querySelector('.form-success');
      
      try {
        let formData = {};
        
        if (formId === 'applicationForm') {
          // Application form specific fields
          formData = {
            student_name: form.querySelector('input[name="student_name"]').value,
            student_dob: form.querySelector('input[name="student_dob"]').value,
            grade_applying: form.querySelector('select[name="grade_applying"]').value,
            parent_name: form.querySelector('input[name="parent_name"]').value,
            parent_email: form.querySelector('input[name="parent_email"]').value,
            parent_phone: form.querySelector('input[name="parent_phone"]').value,
            address: form.querySelector('textarea[name="address"]').value,
            current_school: form.querySelector('input[name="current_school"]').value || 'N/A',
            additional_info: form.querySelector('textarea[name="additional_info"]').value || 'N/A'
          };
          
          // Validate application form
          if (!formData.student_name || !formData.student_dob || !formData.grade_applying || !formData.parent_name || !formData.parent_email) {
            alert('Please fill in all required fields marked with *');
            return;
          }
          
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formData.parent_email)) {
            alert('Please enter a valid parent email address.');
            return;
          }
          
          // Send via EmailJS if credentials have been configured
          if (isEmailjsConfigured) {
            await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, formData, emailjsConfig.publicKey);
          } else {
            // EmailJS is not configured. Skip sending and show success message locally.
            console.warn('EmailJS public key is not configured. Replace the placeholders in js/main.js with your EmailJS service/template/public key to send emails.');
          }
          
        } else {
          // Contact form (existing logic)
          const name = form.querySelector('input[name="name"]').value;
          const email = form.querySelector('input[name="email"]').value;
          const phone = form.querySelector('input[name="phone"]').value;
          const subject = form.querySelector('select[name="subject"]').value;
          const message = form.querySelector('textarea[name="message"]').value;
          
          if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
          }
          
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
          }
          
          // Fake success for contact form (no EmailJS)
        }
        
        // Success handling for both
        form.reset();
        if (successMessage) {
          successMessage.style.display = 'block';
          successMessage.innerHTML = '<i class="fas fa-check-circle"></i><p>Thank you! Your application has been submitted successfully. We\'ll contact you within 24 hours.</p>';
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        }
        
      } catch (error) {
        console.error('Form submission error:', error);
        alert('There was an error submitting the form. Please try again or contact us directly.');
      }
    });
  });
}

/* ========================================
   SMOOTH SCROLL
   ======================================== */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Format phone number
function formatPhoneNumber(input) {
  input.value = input.value.replace(/\D/g, '');
}

// Add loading class to buttons
function addLoadingState(button) {
  button.classList.add('loading');
  button.disabled = true;
  
  setTimeout(() => {
    button.classList.remove('loading');
    button.disabled = false;
  }, 2000);
}

// Lazy load images
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);
