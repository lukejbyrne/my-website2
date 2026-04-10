const fades = document.querySelectorAll('.fade');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: .15 });
fades.forEach(el => io.observe(el));

const toggle = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'light') document.documentElement.classList.add('light');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
});
