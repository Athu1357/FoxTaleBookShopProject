// Hamburger menu
function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// Dark mode
function toggleDark() {
  document.body.classList.toggle("dark");
}

// Scroll animations
function animateOnScroll() {
  const cards = document.querySelectorAll('.card');
  const heroImg = document.querySelector('.hero img');
  const heroH2 = document.querySelector('.hero h2');
  const heroP = document.querySelector('.hero p');
  const memberships = document.querySelectorAll('.membership');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
  memberships.forEach(m => observer.observe(m));
  if(heroImg) observer.observe(heroImg);
  if(heroH2) observer.observe(heroH2);
  if(heroP) observer.observe(heroP);
}

window.addEventListener('load', animateOnScroll);