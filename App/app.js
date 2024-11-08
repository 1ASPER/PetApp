function check() {
    const name = document.getElementById('get-name').value;
    const email = document.getElementById('get-email').value;
    const password = document.getElementById('get-password').value;
    const error_message = document.getElementById('error-message');

    error_message.textContent = "";

    if (name.trim() === "") {
        error_message.textContent = "Error: empty name";
        return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        error_message.textContent = "Error: incorrect email";
        return false;
    }

    if (password.length < 8) {
        error_message.textContent = "Error: password length is less than 8 symbols";
        return false;
    }

    error_message.textContent = "OK!";
    alert("Success!");
    return true;
}
