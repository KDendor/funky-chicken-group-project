document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("plantSearchButton");
    const plantNameInput = document.getElementById("plantName");
    const perunialInfoDiv = document.getElementById("perunialInfo");
    const expandedInfoDiv = document.getElementById("expandedInfo");

    searchButton.addEventListener("click", () => {
        const plantName = plantNameInput.value;

        if (plantName) {
            const perunialUrl = `https://perenual.com/api/species-list?key=${perunialKey}&q=${encodeURIComponent(plantName)}`;
            console.log("Perunial URL:", perunialUrl);
            fetch(perunialUrl)
                .then(response => response.json())
                .then(data => {
                    console.log("API Response:", data); // Log the response data

                    const plantData = data.data;

                    if (plantData.length > 0) {
                        const firstPlant = plantData[0]; // Get the first plant

                        // Construct the HTML for the scientific name and plant image
                        const scientificNameHTML = `<h2 class="subtitle is-5 has-text-black">(${firstPlant.scientific_name.join(", ")})</h2>`;
                        const plantImageHTML = `
                            <img src="${firstPlant.default_image.small_url}" alt="${firstPlant.common_name} Image">
                        `;

                        // Set the scientific name and plant image HTML
                        document.getElementById("infoHeader").innerHTML = `${plantName} ${scientificNameHTML}`;
                        document.getElementById("plantImage").innerHTML = plantImageHTML;

                        // Remove the 'hidden' class from perunialInfoDiv
                        // perunialInfoDiv.classList.remove("hidden");

                        // Remove the 'hidden' class from expandedInfoDiv
                        // expandedInfoDiv.classList.remove("hidden");
                        //expandedInfoDiv.innerHTML = ""; // Clear expanded info

                        // Display the retrieved plant information
                        //perunialInfoDiv.innerHTML = perunialInfo;
                    } else {
                        perunialInfoDiv.innerHTML = "<p>No plants found with that name.</p>";
                        expandedInfoDiv.innerHTML = ""; // Clear expanded info
                    }
                })
                .catch(error => {
                    console.error("Error fetching plant information:", error);
                    //perunialInfoDiv.innerHTML = "<p>An error occurred while fetching plant information.</p>";
                    //expandedInfoDiv.innerHTML = ""; // Clear expanded info
                });
        } else {
            perunialInfoDiv.innerHTML = "<p>Please enter a plant name.</p>";
            //expandedInfoDiv.innerHTML = ""; // Clear expanded info
        }
    });
});