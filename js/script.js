function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}


const mediaQuery = window.matchMedia('(min-width: 481px)');
mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    document.getElementById('mobileMenu').classList.remove('show');
  }
});


document.addEventListener('click', function (event) {
  const menu = document.getElementById('mobileMenu');
  const toggleButton = document.querySelector('.menu-toggle');

 
  if (menu.classList.contains('show')) {
   
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
      menu.classList.remove('show');
    }
  }
});
