document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const form = document.getElementById("myForm");
    const modal = document.getElementById("modal");

    // Toggle Dark/Light Mode
    document.getElementById("toggleButton").addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    // Slider for Dynamic Text Size
    document.getElementById("fontSlider").addEventListener("input", function () {
        document.getElementById("sliderText").style.fontSize = `${this.value}px`;
    });

    // Modal Functionality
    document.getElementById("openModal").addEventListener("click", () => modal.style.display = "block");
    document.getElementById("closeModal").addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

    // Real-time Form Validation
    function validateField(input, errorElement, validationFn) {
        const errorMessage = validationFn(input.value);
        errorElement.textContent = errorMessage;
        return !errorMessage;
    }

    function nameValidation(value) {
        return value.length < 3 ? "Name must be at least 3 characters." : "";
    }

    function emailValidation(value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailPattern.test(value) ? "Invalid email format." : "";
    }

    function passwordValidation(value) {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return !passwordPattern.test(value) ? "Password must be at least 8 characters, contain 1 uppercase letter & 1 number." : "";
    }

    document.getElementById("name").addEventListener("input", (e) => validateField(e.target, document.getElementById("nameError"), nameValidation));
    document.getElementById("email").addEventListener("input", (e) => validateField(e.target, document.getElementById("emailError"), emailValidation));
    document.getElementById("password").addEventListener("input", (e) => validateField(e.target, document.getElementById("passwordError"), passwordValidation));

    form.addEventListener("submit", (e) => {
        const validName = validateField(document.getElementById("name"), document.getElementById("nameError"), nameValidation);
        const validEmail = validateField(document.getElementById("email"), document.getElementById("emailError"), emailValidation);
        const validPassword = validateField(document.getElementById("password"), document.getElementById("passwordError"), passwordValidation);

        if (!validName || !validEmail || !validPassword) {
            e.preventDefault();
        }
    });

    // Dropdown Event
    document.getElementById("dropdown").addEventListener("change", function () {
        document.getElementById("dropdownMessage").textContent = this.value
            ? `You selected: ${this.options[this.selectedIndex].text}`
            : "";
    });
});
