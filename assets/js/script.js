let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classlist.toggle('bx-x');
  navlist.classlist.toggle('open');
};

const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true,
});
sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-down', {delay:500, origin:'right'});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const loginModal = new Foundation.Reveal(document.getElementById("loginModal"));

  menuIcon.addEventListener("click", function () {
      // Handle opening the mobile menu
  });

  const loginLink = document.querySelector("[data-open='loginModal']");
  loginLink.addEventListener("click", function (event) {
      event.preventDefault();
      loginModal.open();
  });
});