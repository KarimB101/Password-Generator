// Assignment code here
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  
  // Get password length with length
var userOptions = {

}



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
