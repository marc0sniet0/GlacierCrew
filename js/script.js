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




document.addEventListener('DOMContentLoaded', () => {
  const cuentaContainer = document.querySelector('.cuenta-container');
  let ocultado = false;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (!ocultado && currentScroll > 100) {
      cuentaContainer.classList.add('hide');
      ocultado = true;
    }

    if (ocultado && currentScroll === 0) {
      cuentaContainer.classList.remove('hide');
      ocultado = false;
    }
  });
});

// BOTÓN GIRATORIO//

const button = document.querySelector('.logo3D');
  let lastScrollTop = 0;
  let scrollDirection = 1; 
  let isScrolling = false;
  let rotation = 0;
  let animationFrameId;
  let scrollTimeout;

  function rotateButton() {
    if (isScrolling) {
      rotation += 3 * scrollDirection;
      button.style.transform = `rotate(${rotation}deg)`;
      animationFrameId = requestAnimationFrame(rotateButton);
    }
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollDirection = scrollTop > lastScrollTop ? 1 : -1;
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    if (!isScrolling) {
      isScrolling = true;
      rotateButton();
    }

   
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      cancelAnimationFrame(animationFrameId);
    }, 50);
  });

// BONOS //

document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circ");
  const modalWindow = document.querySelector("#modalWindow");
  const modalTitle = document.querySelector("#modalTitle");
  const modalText = document.querySelector("#modalText");
  const buyButton = document.querySelector("#buyButton");
  const btnCloseModal = modalWindow.querySelector(".close");

  const openModalWindow = (circle) => {
    const title = circle.dataset.title;
    const text = circle.dataset.text;
    const link = circle.dataset.link;

    modalTitle.textContent = title;
    modalText.textContent = text;
    buyButton.href = link;

    modalWindow.classList.add("show-modal");
  };

  const closeModalWindow = () => {
    modalWindow.classList.remove("show-modal");
  };

  circles.forEach(circle => {
    circle.addEventListener("click", () => openModalWindow(circle));
  });

  btnCloseModal.addEventListener("click", closeModalWindow);

  window.addEventListener("click", event => {
    if (event.target === modalWindow) closeModalWindow();
  });
});


// ARTISTAS //

const artistas = document.querySelectorAll('.artista');
const imagen = document.getElementById('imagen');

artistas.forEach(artista => {
  artista.addEventListener('click', () => {
    // Cambiar imagen
    const nuevaImagen = artista.getAttribute('data-img');
    imagen.setAttribute('src', nuevaImagen);

    // Quitar clase activa de todos
    artistas.forEach(a => a.classList.remove('activo'));

    // Añadir clase activa al seleccionado
    artista.classList.add('activo');
  });
});







// COMPRAR ENTRADAS //

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('input[type="number"]');
    const totalPriceElement = document.getElementById("totalPrice");
    const buyButton = document.getElementById("buyFood");

    // Función para calcular el precio total
    function calculateTotalPrice() {
        let totalPrice = 0;

        inputs.forEach((input) => {
            const price = parseFloat(input.dataset.price) || 0;
            const quantity = parseInt(input.value) || 0;
            totalPrice += price * quantity;
        });

        // Actualiza el precio en pantalla
        totalPriceElement.textContent = totalPrice.toFixed(2) + " €";

        // Habilita o deshabilita el botón según el total
        if (totalPrice > 0) {
            buyButton.classList.remove("disabled");
        } else {
            buyButton.classList.add("disabled");
        }
    }

    // Añade eventos a cada input para recalcular el total
    inputs.forEach((input) => {
        input.addEventListener("change", calculateTotalPrice);
    });

    // Cálculo inicial
    calculateTotalPrice();

    // Redirigir al hacer clic si el botón está habilitado
    buyButton.addEventListener("click", function () {
        if (!buyButton.classList.contains("disabled")) {
            window.location.href = "../datos_compra.html"; // ← cambia esto por tu página destino
        }
    });
});






