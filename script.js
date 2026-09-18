document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       MOBILE MENU
    ======================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("#nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navMenu.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }


    /* ========================================
       SHOW MORE PROJECTS
    ======================================== */

    const showMoreButton =
        document.querySelector("#show-more-btn");

    const extraProjects =
        document.querySelector("#extra-projects");

    if (showMoreButton && extraProjects) {

        showMoreButton.addEventListener("click", function () {

            const isHidden = extraProjects.hasAttribute("hidden");

            if (isHidden) {

                extraProjects.removeAttribute("hidden");

                showMoreButton.textContent = "Show Less";

            } else {

                extraProjects.setAttribute("hidden", "");

                showMoreButton.textContent = "Show More";

            }

        });

    }


    /* ========================================
       CONTACT FORM VALIDATION
    ======================================== */

    const contactForm =
        document.querySelector("#contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.querySelector("#name");

            const email =
                document.querySelector("#email");

            const message =
                document.querySelector("#message");

            const nameError =
                document.querySelector("#name-error");

            const emailError =
                document.querySelector("#email-error");

            const messageError =
                document.querySelector("#message-error");

            const successMessage =
                document.querySelector("#form-success");


            // Clear previous errors
            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";
            successMessage.textContent = "";

            name.setAttribute("aria-invalid", "false");
            email.setAttribute("aria-invalid", "false");
            message.setAttribute("aria-invalid", "false");


            let isValid = true;


            // Name validation
            if (name.value.trim() === "") {

                nameError.textContent =
                    "Please enter your name.";

                name.setAttribute(
                    "aria-invalid",
                    "true"
                );

                isValid = false;
            }


            // Email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email.value.trim())) {

                emailError.textContent =
                    "Please enter a valid email address.";

                email.setAttribute(
                    "aria-invalid",
                    "true"
                );

                isValid = false;
            }


            // Message validation
            if (message.value.trim().length < 10) {

                messageError.textContent =
                    "Please enter at least 10 characters.";

                message.setAttribute(
                    "aria-invalid",
                    "true"
                );

                isValid = false;
            }


            // Stop if invalid
            if (!isValid) {

                const firstInvalid =
                    contactForm.querySelector(
                        '[aria-invalid="true"]'
                    );

                if (firstInvalid) {
                    firstInvalid.focus();
                }

                return;
            }


            // Successful submission
            successMessage.textContent =
                "Thank you! Your message has been submitted.";

            contactForm.reset();

        });

    }

});
