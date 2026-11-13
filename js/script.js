
// PORTFOLIO MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {

        navLinks.classList.toggle("active");

    });

}

// CONTACT FORM - WHATSAPP

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Sinthani ndi nambala yanu ya WhatsApp
        const whatsappNumber = "265XXXXXXXXX";

        const text =
            "Hello! My name is " + name +
            "\nMy Email: " + email +
            "\nMessage: " + message;

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(text);

        window.open(whatsappURL, "_blank");
    });
}
