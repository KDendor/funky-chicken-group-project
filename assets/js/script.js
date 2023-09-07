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