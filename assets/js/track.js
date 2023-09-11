document.addEventListener('DOMContentLoaded', () => {
    // ... (your existing code for navbar and content loading)
  
    const plantForm = document.getElementById("plantForm");
    const plantTypeInput = document.getElementById("PlantType");
    const descriptionTextarea = document.getElementById("Description");
    const uploadedImage = document.getElementById("uploadedImage");
    const displayInfo = document.getElementById("displayInfo");
    const plantTypeHeader = document.getElementById("plantTypeHeader");
    const descriptionText = document.getElementById("descriptionText");
    const currentDate = new Date();
    const datestamp = currentDate.toLocaleDateString();
    plantForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Get values from form inputs
      const plantType = plantTypeInput.value;
      const description = descriptionTextarea.value;
      // Save the entered data to local storage
      saveToLocalStorage(plantType, description);
  
      // Display the entered data
      displayInfo.style.display = "block"; // Show the display area
  
      // Create new entry elements
      const entryDate = document.createElement("p");
      entryDate.textContent = "Date: " + datestamp; // Add the date to the entry
      const entryHeader = document.createElement("h4");
      entryHeader.textContent = "Plant Type: " + plantType;
      const entryDescription = document.createElement("p");
      entryDescription.textContent = "Description: " + description;
      const entryImage = document.createElement("img");
      entryImage.src = ""; // You can set the source of the image here if available.
  
      // Append new entry elements to displayInfo
      displayInfo.appendChild(entryDate);
      displayInfo.appendChild(entryHeader);
      displayInfo.appendChild(entryDescription);
      displayInfo.appendChild(entryImage);
  
      // Clear form fields
      plantTypeInput.value = "";
      descriptionTextarea.value = "";
    });
  
    // Function to save data to local storage
    function saveToLocalStorage(plantType, description) {
      // Check if local storage is available
      if (typeof(Storage) !== "undefined") {
        // Create or update a storage object
        const storedData = JSON.parse(localStorage.getItem("plantData")) || [];
        storedData.push({ plantType, description });
        localStorage.setItem("plantData", JSON.stringify(storedData));
      } else {
        console.error("Local storage is not available.");
      }
    }
  });
  