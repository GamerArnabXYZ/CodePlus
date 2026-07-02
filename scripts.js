// Externalized JavaScript from auto.html

/* ── DOM ── */
const outEl = document.getElementById('out');
const curEl = document.getElementById('cur');
const ca = document.getElementById('ca');

document.addEventListener('DOMContentLoaded', () => {
  // Theme setup
  const theme = localStorage.getItem('LS_THM') || 'dark';
  if (theme !== 'dark') {
    document.body.classList.add(theme);
  }

  // Initialize background particles
  initBG();
});

function initBG() {
  console.log('Initializing Particles');
}