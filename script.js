// Selecting the required elements from HTML
const passText = document.getElementById("password-txt");
const generateButton = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");
const passLength = document.getElementById("password-length");
const passLengthValue = document.getElementById("length-value");
const li = document.getElementsByClassName("list-group-item");


passLength.addEventListener("input", function () {
    passLengthValue.textContent = this.value;
});



// Taking input checkbox
const lowercaseBox = document.getElementById("lowercase");
const upperCaseBox = document.getElementById("upperCase");
const numbersBox = document.getElementById("numbers");
const specialCharBox = document.getElementById("specia-char");

// Character sets
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?/";

// Function for generating password
function generateRandomPass() {
    let selected = "";
    let pass = "";

    if(lowercaseBox.checked) selected += lowerCaseChars;
    if(upperCaseBox.checked) selected += upperCaseChars;
    if(numbersBox.checked) selected += numberChars;
    if(specialCharBox.checked) selected += symbolChars;

    if (selected.length === 0) {
        alert("Please select at least one character type!");
        return;
    } 

    for (let i = 0; i < passLength.value; i++) {
        let index = Math.floor(Math.random() * selected.length); 
        pass += selected[index]; 
    }

    passText.value = pass;

}

function copyPassword() {
    if (passText.value !== "") {
        navigator.clipboard.writeText(passText.value);
        copyButton.innerText = "Copied";
    } else {
        alert("Generate a password first!");
    }
}

generateButton.addEventListener("click", generateRandomPass);
copyButton.addEventListener("click", copyPassword);
