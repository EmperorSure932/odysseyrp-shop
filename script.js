const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  closeAllSubmenus();
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
    menu.classList.remove('active');
    closeAllSubmenus();
  }
});

const parents = document.querySelectorAll('#menu > ul > li.has-submenu');

parents.forEach(parent => {
  parent.addEventListener('click', (e) => {
    e.stopPropagation();
    const submenu = parent.querySelector('.submenu');
    const isOpen = submenu.style.display === 'flex';
    closeAllSubmenus();
    submenu.style.display = isOpen ? 'none' : 'flex';
  });
});

function closeAllSubmenus() {
  document.querySelectorAll('.submenu').forEach(sm => sm.style.display = 'none');
}

