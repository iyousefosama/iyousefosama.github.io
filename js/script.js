var typed = new Typed(".multi-text", {
  strings: ["Full-stack developer", "Discord developer", "Software engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const today = new Date();
const currentYear = document.getElementById('currentYEAR')


currentYear.innerHTML = today.getFullYear();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))