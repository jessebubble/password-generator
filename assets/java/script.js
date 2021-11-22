// Assignment code here

// WHEN I click the button to generate a password
var generatePasswordPrompt = window.confirm("Lets create your password"); 

// Letters including both lowercase and Uppercase, Numbers and Special Characters 
    var letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var numbers = "1234567890";
    var special = "!@#$%^&*_+=-\/?,.><";
    
    var tempPassword = "";
    var passwordLength = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// NEW FUNCTION - Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return generateBtn.disabled = false;
}

// NEW FUNCTION - create function for generatePassword because its being called in the writePassword function
function generatePassword () {
  tempPassword = "";
  passwordLength = "";
  generateBtn.disabled = true;
  setPasswordLength();
  verifyPasswordCriteria();

  var password ="";

  for(i=0; i < passwordLength; i++) {
    var index = (Math.floor(Math.random() * tempPassword.length));
    password += tempPassword[index];
  }

// Display Password on Page - RETURN
  return password;
}

// NEW FUNCTION - Validate Input - Return prompt if wrong password length selected
function setPasswordLength() {
  passwordLength = window.prompt("Password length must be between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength);

  if(isNaN(passwordLength)) {
    window.alert("This is not a number, Try Again.");
    return generatePassword();
  }
  else {
    return passwordLength;
  }
}

// NEW FUNCTION - Validate Criteria met - Prompt the user for password criteria 
function verifyPasswordCriteria() {
  if(passwordLength >=8 && passwordLength <=128) {
    var ilowercase = window.confirm("Click OK to include lowercase letters in your password");
    var iuppercase = window.confirm("Click OK to include Uppercase letters in your password");
    var inumbers = window.confirm("Click OK to include Numbers in your password");
    var ispecial = window.confirm("Click OK to include Special Characters in your password");

    var verifyCriteriaSelected = ilowercase + iuppercase + inumbers + ispecial;

    if(verifyCriteriaSelected >= 1) {

// include LOWERCASE
      if(ilowercase) {
        for (i = 0; i < letters.length; i++) {
          tempPassword += letters[i];
          tempPassword = tempPassword.toLowerCase();

        }
      }

// include UPPERCASE
      if(iuppercase) {
        for(i=0; i < letters.length; i++) {
          tempPassword += letters[i];
        }
      }

// include NUMBERS
      if(inumbers) {
        for(i=0; i < numbers.length; i++) {
          tempPassword += numbers[i];
        }
      }

// include SPECIAL characters 
      if(ispecial) {
        for(i=0; i < special.length; i++) {
          tempPassword += special[i];
        }
      }
      return tempPassword;
    }
  
    else {
      window.alert("You MUST include one type of character - lowercase/uppercase - for your password");
      return verifyPasswordCriteria();
    }
  }
    else {
      window.alert("Password length MUST be between 8 and 128 characters. Try Again.");
      return generatePassword();
    }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// test