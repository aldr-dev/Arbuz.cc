document.addEventListener('DOMContentLoaded', () => {
  // Бургер-Меню.

  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
  });

  const handleResize = () => {
    if (window.innerWidth >= 1000) {
      hamburger.classList.remove('is-active');
    }
  };
  window.addEventListener('resize', handleResize);

  // AOS библиотека для анимации скролла страницы.
  AOS.init({
    duration: 1000,
  });


  // Скролл по определенным секциям страницы
  let highlightedLink = null;

  window.scrollToTariff = () => {
    const targetElement = document.getElementById('tariff');
    scrollAndHighlight(targetElement, 'tariff');
  };

  window.scrollToAdvantages = () => {
    const targetElement = document.getElementById('advantages');
    scrollAndHighlight(targetElement, 'advantages');
  };

  window.scrollToVideoReview = () => {
    const targetElement = document.getElementById('videoReview');
    scrollAndHighlight(targetElement, 'videoReview');
  };

  window.scrollAndHighlight = (element, linkId) => {
    if (highlightedLink) {
      highlightedLink.classList.remove('active');
    }

    setTimeout(() => {
      element.scrollIntoView({ block: 'start' });
    }, 100);


    const newHighlightedLink = document.querySelector(`a[href='#${linkId}']`);
    if (newHighlightedLink) {
      newHighlightedLink.classList.add('active');
      highlightedLink = newHighlightedLink;
    }
  };

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('a').forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
});