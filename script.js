const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "Close" : "Menu";
    });
}

const weekButton = document.querySelector("#weekButton");
const weekText = document.querySelector("#weekText");

let currentWeek = 1;

if (weekButton && weekText) {
    weekButton.addEventListener("click", () => {
        currentWeek += 1;

        if (currentWeek > 18) {
            currentWeek = 1;
        }

        weekText.textContent = `Current League Week: ${currentWeek}`;
    });
}
