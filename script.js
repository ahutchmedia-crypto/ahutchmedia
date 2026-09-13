const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu]');
const nav = document.querySelector('#site-nav');
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');

window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('is-active'));
  button.classList.add('is-active');
  const filter = button.dataset.filter;
  projects.forEach(project => project.classList.toggle('is-hidden', filter !== 'all' && !project.dataset.category.split(' ').includes(filter)));
}));

document.querySelector('[data-year]').textContent = new Date().getFullYear();
