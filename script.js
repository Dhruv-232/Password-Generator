// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", "~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "`", "|"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var passwordLength = 0
function getPasswordLength() {
  passwordLength = prompt("Please enter password length between 8 and 128 characters", "8-128")
  if (8 > passwordLength || passwordLength > 128) {
    alert("Please enter a valid password length")
    getPasswordLength()
  }

}

function generatePassword() {
    var includeUpperCase = confirm("Do you want uppercase letters?")
    var includeLowerCase = confirm("Do you want lowercase letters?")
    var includeNumeric = confirm("Do you want numeric letters?")
    var includeSpecialCharacters = confirm("Do you want special characters?")
    if (includeUpperCase || includeLowerCase || includeNumeric || includeSpecialCharacters === true) {
      getPasswordLength()
    }
    else {
      alert("Please select one of the prompts.")
      generatePassword()
    }

    var charsToInclude = [];
    console.log("Valid password criteria obtained ready to generate random password")
    if (includeUpperCase === true) {
      charsToInclude = charsToInclude.concat(upperCase);
    }
    if (includeLowerCase === true) {
      charsToInclude = charsToInclude.concat(lowerCase);
    }
    if (includeNumeric === true) {
      charsToInclude = charsToInclude.concat(numeric);
    }
    if (includeSpecialCharacters === true) {
      charsToInclude = charsToInclude.concat(specialCharacters);
    }
    var generatedPassword = "";
    var randomIndex;

    for (var i = 0; i < passwordLength; i++) {
      randomIndex = Math.floor(Math.random()*charsToInclude.length);
      var randomChar = charsToInclude[randomIndex];
      generatedPassword += randomChar;
    }
    return generatedPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
