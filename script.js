document.addEventListener('DOMContentLoaded', function() {
    const passwordLengthSlider = document.getElementById('passwordLengthSlider');
    const passwordLengthDisplay = document.getElementById('passwordLength');
    const generatePasswordButton = document.getElementById('generatePassword');
    const copyPasswordButton = document.getElementById('copyPassword');
    const passwordDisplay = document.getElementById('passwordDisplay');

    passwordLengthSlider.addEventListener('input', function() {
        passwordLengthDisplay.textContent = this.value;
    });

    generatePasswordButton.addEventListener('click', function() {
        const length = parseInt(passwordLengthSlider.value);
        const password = generatePassword(length);
        passwordDisplay.textContent = password;
    });

    copyPasswordButton.addEventListener('click', function() {
        const password = passwordDisplay.textContent;
        navigator.clipboard.writeText(password)
            .then(() => alert('Password copied to clipboard'))
            .catch(err => console.error('Failed to copy password: ', err));
    });

    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});
