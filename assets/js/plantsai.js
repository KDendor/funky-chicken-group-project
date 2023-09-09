const plantSearchButton = document.getElementById("plantSearchButton");
const plantNameInput = document.getElementById("plantName"); 
const expandedInfoDiv = document.getElementById("expandedInfo");

plantSearchButton.addEventListener("click", async () => {
    const plantName = plantNameInput.value;

    const prompt = `please give me some information on ${plantName} house plant. One paragraph at the top titled description, then a section about watering cycle then a third section titled location and exposure, explaining the location and the zones the plant thrives in.`;

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
        return;
    }

    const responseData = await response.json();
    const generatedContent = responseData.choices[0].message.content;

      expandedInfoDiv.innerText = generatedContent;

});
