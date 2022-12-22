// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numChars = '0123456789';
  var specialChars = ',!@#$%^&*()_+-=';

  var characters = ''
  var password = '';

  var passwordLength = prompt("Please pick a number between 8 and 128");

//if passwordLength does NOT meet the length requirements
//rerun the function

//else if passwordLength meets the length requirements
//assk if they want to include certain characters in the password

  var lowercaseConfirm = confirm("Do you want lowercase in your password");
  var uppercaseConfirm = confirm("Do you want uppercase in your password");
  var numberConfirm = confirm("Do you want numbers in your password");
  var specialConfirm = confirm("Do you want special characters in your password");

  //if they want lowercase, then add lowercaseChars to characters
  //if they want uppercase, then add uppercaseChars to characters
  //if they want num, then add numChars to characters
  //if they want speacial, then add speacialChars to characters

  console.log(passwordLength)

  
//if stat
  for (var i = 0; i < passwordLength; i++) {

    // var mathRandom = Math.random();
    // var randomIndex = Math.random() * characters.length
    var randomNumber = Math.floor(Math.random() * characters.length);
    var randomValue = characters[randomNumber]

    // console.log("Math.random() returns "  + mathRandom)
    // console.log("Math.random() * characters.length returns " + randomIndex)
    // console.log("Math.floor(Math.random() * characters.length returns " + randomNumber)

    // console.log("characters[randomNumber] returns " + characters[randomNumber] )

    console.log(randomNumber, randomValue)
    //password += characters.substring(randomNumber, randomNumber +1);
    password += randomValue

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
