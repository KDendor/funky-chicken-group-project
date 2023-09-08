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

const header = document.querySelector('.fixed-header');

// Store the initial scroll position
let lastScrollTop = 0;

// Function to add or remove the shadow based on scroll direction
function handleScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down, remove the shadow
    header.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
  } else {
    // Scrolling up, add the shadow
    header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // Adjust shadow as needed
  }

  // Update the last scroll position
  lastScrollTop = scrollTop;
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);