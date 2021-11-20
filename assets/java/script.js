// Assignment code here

// Create function for generatePassword because its being called in the writePassword function
function generatePassword () {

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria 
var generatePasswordPrompt = window.prompt("Lets create your password"); 
  character = window.prompt('How many characters would you like your password to have?');
  lowercase = window.prompt('Click OK to include lowercase letters in your password');
  uppercase = window.prompt('Click OK to include Uppercase letters in your password');
  numbers = window.prompt('Click OK to include Numbers in your password');
  special = window.prompt('Click OK to include Special Characters in your password');


// Password length 8 characters and no more than 128 characters
// Lowercase, Uppercase, Numbers and Special Characters 
    var characterMin = 8;
    var characterMax = 128;
    var lowercase = "qwertyuiopasdfghjklzxcvbnm";
    var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var numbers = "1234567890";
    var special = "!@#$%^&*()_+-=";

//Prompt the user for password criteria 
while (characterMin <8 || characterMax > 128) {
  character = prompt("Length must be 8-128 characters. How many characters would you like your password to have?");
}

// Validate Input

// Validate Criteria met


// Display Password on Page - RETURN
  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// test