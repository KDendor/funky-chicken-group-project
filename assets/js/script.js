let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Function to load and insert content from external HTML files
function loadAndInsertHTML(file, containerId) {
  fetch(file)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => {
          console.error(`Error loading ${file}: ${error}`);
      });
}

// Load header and footer content
loadAndInsertHTML('header.html', 'headerContainer');
loadAndInsertHTML('footer.html', 'footerContainer');

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