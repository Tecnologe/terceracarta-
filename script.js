// Leer mensaje personalizado de los query strings
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURIComponent(messageCustom);
}

// Referencias a botones y elementos
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';

    // Generar corazones y pétalos
    generateHearts();
    generatePetals();

  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500);
});

function generateHearts() {
  const container = document.getElementById('hearts-container');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('span');
    heart.textContent = '♥';
    heart.classList.add('heart-flying');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(heart);
  }
}

function generatePetals() {
  const container = document.getElementById('petals-container');
  for (let i = 0; i < 20; i++) {
    const petal = document.createElement('span');
    petal.textContent = '❀';
    petal.classList.add('petal-falling');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(petal);
  }
}