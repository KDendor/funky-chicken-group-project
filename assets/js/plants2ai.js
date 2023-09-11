document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("plantSearchButton");
    const plantNameInput = document.getElementById("plantName");
    const infoHeader = document.getElementById("infoHeader");
    const descriptionContent = document.getElementById("description");
    const plantImageSrc = document.getElementById("plantImageSrc");
    const wateringContent = document.getElementById("watering");
    const hardinessZonesContent = document.getElementById("hardinessZones");
  
    searchButton.addEventListener("click", async () => {
      try {
        const plantName = plantNameInput.value;
  
        const prompt = `please give me some information on ${plantName} house plant. I would like a brief description titled 'Description', watering cycle titled 'Watering Cycle' and what Hardiness Zones it lives titled 'Hardiness Zones'.`;
  
        const loadingElement = document.getElementById("loading");
  
        for (let i = 0; i < loadingElement.length; i++) {
          const loadingElement = loadingElement[i];
          // Perform actions on each element
          loadingElement.classList.remove("hidden");
        }
  
        infoHeader.textContent = plantName;
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ApiKey}`
          },
          body: JSON.stringify({
            messages: [
              {
                role: "system",
                content: prompt
              }
            ],
            max_tokens: 200,
            temperature: 0.7,
            model: "gpt-3.5-turbo"
          })
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          console.error("API Error:", errorData);
          // Handle the error by displaying stock descriptions
          descriptionContent.innerHTML = `<h2 subtitle has-text-white is-2>DESCRIPTION</h2><h2 subtitle has-text-white is-5>The ${plantName}, scientifically known as Chlorophytum comosum, is a popular houseplant that is native to South Africa. It is well-known for its long, arching leaves that resemble spider legs, hence its common name. This plant is highly valued for its graceful appearance and ability to purify indoor air.</h2>`;
          wateringContent.innerHTML = `<h2 subtitle has-text-white is-2>WATERING CYCLE</h2><h2 subtitle has-text-white is-5> ${plantName} prefer to be kept evenly moist but not overly wet. It is important to allow the top inch (2.5 cm) of soil to dry out before watering again. Overwatering can lead to root rot, while underwatering can cause the leaves to turn brown and dry out. Typically, watering once a week is sufficient, but this may vary depending on the temperature, humidity, and light levels in your home.</h2>`;
          hardinessZonesContent.innerHTML = `<h2 subtitle has-text-white is-2>HARDINESS ZONES</h2><h2 subtitle has-text-white is-5>${plantName} are primarily grown as indoor plants, but they can also thrive outdoors in certain regions. They are native to tropical and subtropical areas and can be grown as perennials in USDA Zones.</h2>`;
          return; // Exit the function to prevent further execution
        }
  
        const responseData = await response.json();
        const generatedContent = responseData.choices[0].message.content;
  
        const descriptionIndex = generatedContent.indexOf("Desc");
  
        // Initialize variables for description, watering, and hardiness zones
        let description = "";
        let watering = "";
        let hardinessZones = "";
  
        // Check if the description marker is found
        if (descriptionIndex !== -1) {
          // Find the index where the next section marker (e.g., "Watering:") begins
          const wateringIndex = generatedContent.indexOf("Watering", descriptionIndex);
  
          // Extract the description content between markers
          if (wateringIndex !== -1) {
            description = generatedContent.substring(
              descriptionIndex + "Description:".length,
              wateringIndex
            ).trim();
          } else {
            // If there's no next section marker, extract the description until the end
            description = generatedContent.substring(
              descriptionIndex + "Desc".length
            ).trim();
          }
  
          // Find the index where the watering section begins
          const wateringSectionIndex = generatedContent.indexOf("Watering", descriptionIndex);
  
          // Check if the watering section marker is found
          if (wateringSectionIndex !== -1) {
            // Find the index where the next section marker (e.g., "Hardiness Zones:") begins
            const hardinessZonesIndex = generatedContent.indexOf("Hardin", wateringSectionIndex);
  
            // Extract the watering content between markers
            if (hardinessZonesIndex !== -1) {
              watering = generatedContent.substring(
                wateringSectionIndex + "Watering Cycle:".length,
                hardinessZonesIndex
              ).trim();
            } else {
              // If there's no next section marker, extract the watering until the end
              watering = generatedContent.substring(
                wateringSectionIndex + "Watering Cycle:".length
              ).trim();
            }
  
            // Find the index where the hardiness zones section begins
            const hardinessZonesSectionIndex = generatedContent.indexOf("Hardiness Zones", wateringSectionIndex);
  
            // Check if the hardiness zones section marker is found
            if (hardinessZonesSectionIndex !== -1) {
              // Extract the hardiness zones content after the marker
              hardinessZones = generatedContent.substring(
                hardinessZonesSectionIndex + "Hardiness Zones:".length
              ).trim();
            }
          }
        }
  
        // Display the extracted information
        descriptionContent.innerHTML = `<h2 subtitle has-text-white is-2>DESCRIPTION</h2><h2 subtitle has-text-white is-5>${description}</h2>`;
        wateringContent.innerHTML = `<h2 subtitle has-text-white is-2>WATERING CYCLE</h2><h2 subtitle has-text-white is-5>${watering}</h2>`;
        hardinessZonesContent.innerHTML = `<h2 subtitle has-text-white is-2>HARDINESS ZONES</h2><h2 subtitle has-text-white is-5>${hardinessZones}</h2>`;
  
        // Console log the extracted information
        console.log("Description:", description);
        console.log("Watering:", watering);
        console.log("Hardiness Zones:", hardinessZones);
        console.log("Generated Content:", generatedContent);
  
      } catch (error) {
        console.error("An unexpected error occurred:", error);
        // Handle the error by displaying stock descriptions
        descriptionContent.innerHTML = `<h2 subtitle has-text-white is-2>DESCRIPTION</h2><h2 subtitle has-text-white is-5>The ${plantName}, scientifically known as Chlorophytum comosum, is a popular houseplant that is native to South Africa. It is well-known for its long, arching leaves that resemble spider legs, hence its common name. This plant is highly valued for its graceful appearance and ability to purify indoor air.</h2>`;
        wateringContent.innerHTML = `<h2 subtitle has-text-white is-2>WATERING CYCLE</h2><h2 subtitle has-text-white is-5>Spider Plants prefer to be kept evenly moist but not overly wet. It is important to allow the top inch (2.5 cm) of soil to dry out before watering again. Overwatering can lead to root rot, while underwatering can cause the leaves to turn brown and dry out. Typically, watering once a week is sufficient, but this may vary depending on the temperature, humidity, and light levels in your home.</h2>`;
        hardinessZonesContent.innerHTML = `<h2 subtitle has-text-white is-2>HARDINESS ZONES</h2><h2 subtitle has-text-white is-5>Spider Plants are primarily grown as indoor plants, but they can also thrive outdoors in certain regions. They are native to tropical and subtropical areas and can be grown as perennials in USDA Zones.</h2>`;
      }
    });
  });
  