const plantSearchButton = document.getElementById("plantSearchButton");
const plantNameInput = document.getElementById("plantName");  // Use "plantName" instead of "plantNameInput"
const expandedInfoDiv = document.getElementById("expandedInfo");
const chatGptApiKey = "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";

plantSearchButton.addEventListener("click", async () => {
    const plantName = plantNameInput.value;

    const prompt = `please give me some information on ${plantName} house plant.  I would like the scientific name, common name, watering cycle, what location it grows in & exposure.`;
    infoHeader.textContent = plantName;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${chatGptApiKey}`
        },
        body: JSON.stringify({
            messages: [
                {
                    role: "system",
                    content: prompt
                }
            ],
            max_tokens: 200, // Adjust as needed
            temperature: 0.7, // Adjust as needed
            model: "gpt-3.5-turbo"
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        return;
    }

    const responseData = await response.json();
    const generatedContent = responseData.choices[0].message.content;

    // Set the generated content within the expandedInfoDiv
    expandedInfoDiv.innerText = generatedContent;

});
