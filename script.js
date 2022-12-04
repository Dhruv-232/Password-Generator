// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!"]
var upperCase = ["A"]
var lowerCase = ["a"]
var numeric = ["1"]
var passwordLength = 0
function getPasswordLength() {
  passwordLength = prompt("Please enter password length between 8 and 128 characters", "8-128")
  if (7 < passwordLength && passwordLength < 129) {
    alert("Good job")
  }

  else{
    alert("bad")
  }
  alert("The chosen word length is "+passwordLength)
}

function generatePassword() {
    upperCase = confirm("Do you want uppercase letters?")
    lowerCase = confirm("Do you want lowercase letters?")
    numeric = confirm("Do you want numeric letters?")
    specialCharacters = confirm("Do you want special characters?")
    
    if (upperCase || lowerCase || numeric || specialCharacters === true) {
      getPasswordLength()
    }
    else {
      alert("Please select one of the prompts.")
      generatePassword()
    }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
