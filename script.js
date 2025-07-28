const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

// Toggle menu tendina
menuBtn.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    closeAllSubmenus();
  } else {
    menu.style.display = 'block';
  }
});

// Chiudi menu cliccando fuori
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== menuBtn) {
    menu.style.display = 'none';
    closeAllSubmenus();
  }
});

// Gestione apertura sottoliste
const parents = document.querySelectorAll('.has-submenu');

parents.forEach(parent => {
  parent.addEventListener('click', () => {
    const submenu = parent.querySelector('.submenu');
    const isOpen = submenu.style.display === 'block';
    closeAllSubmenus();
    submenu.style.display = isOpen ? 'none' : 'block';
  });
});

function closeAllSubmenus() {
  document.querySelectorAll('.submenu').forEach(sm => sm.style.display = 'none');
}
