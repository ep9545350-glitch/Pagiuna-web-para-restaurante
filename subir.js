 const boton = document.querySelector('.sube');
  const footer = document.querySelector('footer');

  window.addEventListener('scroll', () => {
    const footerRect = footer.getBoundingClientRect();
    const visible = footerRect.top < window.innerHeight && footerRect.bottom > 0;
    boton.classList.toggle('visible', visible);
  });

  