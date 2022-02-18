var generatePasswordPrompt = window.alert('Welcome to my password generator'); // Welcome to my password generator

var randomShuffle = function (string) { // shuffle any string
  var randomIndex, currentIndex, array; // declare the variables
  array = string.split(''); // convert string into array

  for (var i = 0; i < array.length; i++) { // loop through array
    randomIndex = Math.floor(Math.random() * array.length); // creates random number for array
    currentIndex = array[i] // swap
    array[i] = array[randomIndex]
    array[randomIndex] = currentIndex;
  }
  string = array.join('') // turns array back into string
  return string;
}

var generatePassword = function () { //generate password using strings in variables below
  var uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  var lowercase = 'qwertyuiopasdfghjklzxcvbnm'
  var numbers = '1234567890'
  var special = '!@#$%^&*_+=-?,.'
  
  var valid =  false;
  while (!valid) { // presents user with series of prompts to generate password
    var passwordLength = parseInt(window.prompt('How many characters are required for your password'))
    var includeLowerCase = window.confirm('Click OK to include lowercase characters')
    var includeUpperCase = window.confirm('Click OK to include uppercase characters')
    var includeNumbers = window.confirm('Click OK to include numbers')
    var includeSpecial = window.confirm('Click OK to include special characters')

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert('Password must be between 8 and 128 characters')
    }
    else if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecial) {
      window.alert('Requirement: must include one of the prompts')
    }
    else {
      valid = true
    }
  }

  var password = ''; // filter out declined confirmations from promps above
  if (includeLowerCase) {
    password += lowercase
  }
  if (includeUpperCase) {
    password += uppercase
  }
  if (includeNumbers) {
    password += numbers
  }
  if (includeSpecial) {
    password += special
  }

  password = randomShuffle(password) // shuffle string created from function above

  var randomNum;
  var generatedPassword = '' // password generated based on selected prompts
  var index = 0
  
  while (index < passwordLength) { // loop through passwordLength
    randomNum = Math.floor(Math.random() * password.length); // generates random number
    generatedPassword += password[randomNum]
    index++
  }
  return generatedPassword;
}
var generateBtn = document.querySelector("#generate"); // references generate element

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); // Event listener to generate button