
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const descriptionInput = document.getElementById("descriptionInput");
    const submit = document.getElementById("submitButton");
    const confirmationMessage = document.getElementById("confirmationMessage");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        nameInput.value = "";
        emailInput.value = "";
        descriptionInput.value = "";
        confirmationMessage.classList.remove("is-hidden");
                // Delay unhiding the confirmation message for 5 seconds (5000 milliseconds)
                setTimeout(() => {
                    confirmationMessage.classList.add("is-hidden");
                }, 3000);
    });
});