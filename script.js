// Assignment code here
var specialCharacters = "!@#$%^&*-+_=".split("");
var numericCharacters = "123456789".split(""); 
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

function generatePassword() {


  // Get password options
  var passwordOption = []
 // var characters = ["specialCharacters", "numericCharacters", "lowerCasedCharacters", "upperCasedCharacters"]
  var password = "";

  //if passwordLength does NOT meet the length requirements
  //rerun the function
  var passwordLength = parseInt(prompt("Please pick a number between 8 and 128 for length of password"), 10);

  if (Number.isNaN(passwordLength)) {
    alert("Please provide a number")
    passwordLength = null
    return
  } else if (passwordLength < 8) {
    alert("Please provide a number greater than 8")
    passwordLength = null
    return
  } else if (passwordLength > 128) {
    alert("Please provide a number less than 128")
    passwordLength = null
    return
  }
 

  //else if passwordLength meets the length requirements
  //assk if they want to include certain characters in the password
  // userChoice ("confirm", )

  var lowercaseConfirm = confirm("Do you want lowercase in your password");
  var uppercaseConfirm = confirm("Do you want uppercase in your password");
  var numberConfirm = confirm("Do you want numbers in your password");
  var specialConfirm = confirm("Do you want special characters in your password");


  // if they do not choose options 
  if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialConfirm) {
    window.alert("must pick at least one character option");
  }
  // choose all options 
  //if they want lowercase, then add lowercaseChars to characters

  if (lowercaseConfirm) {
    passwordOption = passwordOption.concat(lowerCasedCharacters)
    console.log(passwordOption)
  }
  //if they want uppercase, then add uppercaseChars to characters

  if (uppercaseConfirm) {
    passwordOption = passwordOption.concat(upperCasedCharacters)
    console.log(passwordOption)
  }
  //if they want num, then add numChars to characters

  if (numberConfirm) {
    passwordOption = passwordOption.concat(numericCharacters)
    console.log(passwordOption)
  }
  //if they want speacial, then add speacialChars to characters
  if (specialConfirm) {
    passwordOption = passwordOption.concat(specialCharacters)
    console.log(passwordOption)
  }
  // console.log(writePassword (passwordOption))

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordOption.length);
    var randomValue = passwordOption[randomIndex]
    console.log(randomIndex, randomValue)


    // var mathRandom = Math.random();
    // var randomIndex = Math.random() * characters.length
    //writePassword(passwordOption[randomValue])
    // console.log("Math.random() returns "  + mathRandom)
    // console.log("Math.random() * characters.length returns " + randomIndex)
    // console.log("Math.floor(Math.random() * characters.length returns " + randomNumber)

    // console.log("characters[randomNumber] returns " + characters[randomNumber] )

    //password += characters.substring(randomNumber, randomNumber +1);
    password += randomValue
    console.log(password)

  }

  return password;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
