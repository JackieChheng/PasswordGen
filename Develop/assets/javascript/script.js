// Assignment code here

// Function to generate password
function generatePassword()
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '<>*(_^%$#@!&+)-=?'

// Combines all characteristics based on user
const allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;

//Password length prompt
const passwordLength = prompt("Enter desired password length(between 8 and 128):");




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
