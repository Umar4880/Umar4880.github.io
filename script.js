// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    window.scrollTo({
      top: target.offsetTop - navHeight,
      behavior: 'smooth'
    });
    
    // Close mobile menu after clicking a link
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  });
});

// Add active class to nav items when scrolling
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const navHeight = document.querySelector('.navbar').offsetHeight;
  const navbar = document.querySelector('.navbar');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight - 10;
    const sectionHeight = section.offsetHeight;
    
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
  
  // Update navbar appearance based on scroll position
  if (window.pageYOffset > 50) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('transparent');
  }
});

// Ensure the navbar has the correct class on page load
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  
  if (window.pageYOffset > 50) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('transparent');
  }
});

// Handle viewport height for mobile browsers (address bar considerations)
const setVh = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', setVh);
setVh();