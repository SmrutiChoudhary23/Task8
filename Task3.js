function isEmpty(value) {
    return value.trim() === "";
}

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[type='text']");
        const email = form.querySelector("input[type='email']");
        const message = form.querySelector("textarea");

        if (isEmpty(name.value)) {
            alert("Please enter your name");
            return;
        }

        if (isEmpty(email.value)) {
            alert("Please enter your email");
            return;
        }

        if (isEmpty(message.value)) {
            alert("Please enter your message");
            return;
        }

        alert("Form submitted successfully");
        form.reset();
    });
}

const nameText = document.getElementById("Name");

if (nameText) {
    nameText.addEventListener("click", function () {
        this.textContent = "Welcome!";
    });
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        alert(this.textContent + " section clicked");
    });
});
