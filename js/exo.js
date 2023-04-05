  var hamburger = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('.navbar-collapse');

  function closeNavbar() {
    navbarCollapse.classList.remove('show');
    hamburger.setAttribute('aria-expanded', false);
  }

  hamburger.addEventListener('click', function () {
    if (navbarCollapse.classList.contains('show')) {
      closeNavbar();
    } else {
      navbarCollapse.classList.add('show');
      hamburger.setAttribute('aria-expanded', true);
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 992) {
      closeNavbar();
    }
  });