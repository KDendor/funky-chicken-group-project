document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
          });
      });
  }
});
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

// Select the .banner element
const banner = document.querySelector('#banner');

// Add a click event listener to the .banner element
banner.addEventListener('click', function() {
  // Redirect to the desired URL (plant.html)
  window.location.href = '/plant.html';
});

const banner2 = document.querySelector('#banner2');
// Add a click event listener to the .banner element
banner2.addEventListener('click', function() {
    // Redirect to the desired URL (plant.html)
    window.location.href = '/track.html';
  });

  const banner3 = document.querySelector('#banner3');
  // Add a click event listener to the .banner element
banner3.addEventListener('click', function() {
    // Redirect to the desired URL (plant.html)
    window.location.href = '/reminder.html';
  });