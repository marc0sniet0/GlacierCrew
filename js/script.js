// MENU RESPONSIVE//

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}


const mediaQuery = window.matchMedia('(min-width: 592px)');
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


// CUENTA ATRÁS//

const cuentaAtrasFecha = new Date();
cuentaAtrasFecha.setDate(cuentaAtrasFecha.getDate() + 12);
cuentaAtrasFecha.setHours(cuentaAtrasFecha.getHours() + 6);
cuentaAtrasFecha.setMinutes(cuentaAtrasFecha.getMinutes() + 56);
cuentaAtrasFecha.setSeconds(cuentaAtrasFecha.getSeconds() + 34);


  const interval = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = cuentaAtrasFecha - ahora;

    if (distancia <= 0) {
      clearInterval(interval);
      document.getElementById("cuenta").style.display = "none";
      document.getElementById("finalMensaje").style.display = "block";
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
  }, 1000);