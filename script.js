document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     Mobile Navigation
  ========================= */

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* =========================
     DOM Manipulation
  ========================= */

  const showMoreButton = document.querySelector("#show-more-button");
  const extraProjects = document.querySelector("#extra-projects");

  if (showMoreButton && extraProjects) {
    showMoreButton.addEventListener("click", () => {
      const isVisible = extraProjects.classList.toggle("visible");

      showMoreButton.setAttribute(
        "aria-expanded",
        String(isVisible)
      );

      showMoreButton.textContent = isVisible
        ? "Show Less"
        : "Show More";
    });
  }

  /* =========================
     Form Validation
  ========================= */

  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const messageError = document.querySelector("#message-error");
    const successMessage = document.querySelector("#form-success");

    function clearErrors() {
      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";

      nameInput.removeAttribute("aria-invalid");
      emailInput.removeAttribute("aria-invalid");
      messageInput.removeAttribute("aria-invalid");
    }

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      clearErrors();
      successMessage.textContent = "";

      let isValid = true;

      if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        nameInput.setAttribute("aria-invalid", "true");
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.setAttribute("aria-invalid", "true");
        isValid = false;
      }

      if (messageInput.value.trim().length < 10) {
        messageError.textContent =
          "Please enter a message with at least 10 characters.";
        messageInput.setAttribute("aria-invalid", "true");
        isValid = false;
      }

      if (!isValid) {
        const firstInvalid = contactForm.querySelector(
          '[aria-invalid="true"]'
        );

        if (firstInvalid) {
          firstInvalid.focus();
        }

        return;
      }

      successMessage.textContent =
        "Thank you! Your message has been validated successfully.";

      contactForm.reset();
    });
  }
});
