// Create required variables based on password criteria
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
// var specialChar = "`~!@#$%^&*,-_=+{[]}|\);:'"<>./-?";

var charSel = "";
var passLenght = "";
var userPassword = "";


// var userSelection = prompt("Choose password criteria: lowercase, uppercase, numbers or special character?");

// create function to generate password based on user selction 
function generatePassword() {
  var charSel = "";
  var userPassword = "";

  // user password selection criteria 
  var passLenght = Number(prompt("Please choose a password lenght between 8 and 128"));

  if (passLenght >= 8 && passLenght <=128){
    lowerCaseSel = prompt(("If lowercase character in password. Yes (y) or No (n)")).toLowerCase;
    upperCaseSel = prompt(("If uppercase character password. Yes (y) or No (n)")).toLowerCase;
    numSel = prompt(("If numbers character password. Yes (y) or No (n)")).toLowerCase;
    specialCharSel = prompt(("If special characters in password. Yes (y) or No (n)")).toLowerCase;

// error message will display is password is less than 8 or greater than 128
  } else if (passLenght < 8 || passLenght > 128) {
    alert("Error, please enter a number between 8 and 128")
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
