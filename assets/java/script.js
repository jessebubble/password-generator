// Assignment code here

// Create function for generatePassword because its being called in the writePassword function

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria 

//Prompt the user for password criteria 
// Password length 8 characters and no more than 128 characters
// Lowercase, Uppercase, Numbers and Special Characters 

// Validate Input

// Validate Criteria met

// Display Password on Page - RETURN




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
//test
