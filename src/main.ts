// Función para actualizar el reloj analógico
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calcular ángulos para las manecillas
  const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 30 grados por hora + ajuste por minutos
  const minuteAngle = minutes * 6; // 6 grados por minuto
  const secondAngle = seconds * 6; // 6 grados por segundo

  // Seleccionar manecillas y aplicar rotación
  const hoursHand = document.querySelector('.hours-hand') as HTMLElement;
  const minutesHand = document.querySelector('.minutes-hand') as HTMLElement;
  const secondsHand = document.querySelector('.seconds-hand') as HTMLElement;

  if (hoursHand && minutesHand && secondsHand) {
    hoursHand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
    minutesHand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
    secondsHand.style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
  }
}

// Función para controlar el menú móvil
function setupMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener('click', () => {
    // Toggle clases activas
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');

    // Bloquear/desbloquear scroll cuando el menú está abierto
    document.body.classList.toggle('menu-open');
  });

  // Cerrar menú cuando se hace clic en un enlace
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (mainNav.classList.contains('active') &&
        !mainNav.contains(target) &&
        !menuToggle.contains(target)) {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

// Función para agregar efecto de estrellas parpadeantes adicionales
function createExtraStars() {
  const starsContainer = document.getElementById('stars');
  if (!starsContainer) return;

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'extra-star';

    // Posición aleatoria
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    // Tamaño aleatorio
    const size = Math.random() * 2;

    // Retraso aleatorio para animación
    const delay = Math.random() * 5;

    star.style.cssText = `
      position: absolute;
      top: ${y}%;
      left: ${x}%;
      width: ${size}px;
      height: ${size}px;
      background-color: #ffffff;
      border-radius: 50%;
      opacity: 0.8;
      animation: twinkle-extra 3s infinite ${delay}s;
    `;

    starsContainer.appendChild(star);
  }

  // Agregar la animación al stylesheet
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    @keyframes twinkle-extra {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 1; transform: scale(1.2); }
    }

    body.menu-open {
      overflow: hidden;
    }
  `;
  document.head.appendChild(styleSheet);
}

// Agregar año actual al pie de página
function updateFooterYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
}

// Inicializar la página
function initPage() {
  updateFooterYear();
  createExtraStars();
  setupMobileMenu();

  // Actualizar el reloj cada segundo
  updateClock();
  setInterval(updateClock, 1000);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initPage);
