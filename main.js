import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(26, 26, 26, 1)';
  } else {
    navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
  }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

