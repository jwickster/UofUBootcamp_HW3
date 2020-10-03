// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Arrays for randomized choices by the computer
const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "<", ">",")","("];
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let upperCaseLettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCaseLettersArr = [];
let combinedNumbersArr = [];




//Main function - generating a password from the desired values and returning the password.
function generatePassword() {

//prompts user for finalPasswordOutput
  let passWordLength = prompt("Please enter a finalPasswordOutput length between 8 and 128.");
  
  /**********************************ERROR CHECKING FOR MIN/MAX REQUIREMENTS*******************************************/
  //Error checking
//while inputted finalPasswordOutput length less than 8 OR more than 128 OR not a number
  //prompts user to enter pasword wirh correct paramaters
  if (passWordLength < 8 || passWordLength > 128 || isNaN(passWordLength) === true) {
    alert("ERROR - Value must be a minimum combination between 8 and 128 upper/lowercase numbers and special characters.");
    passWordLength = prompt("Must be between 8 and 128.");
  };
  
  /**********************************UPPER CASE CONFIRMATION***********************************************************/
  let upperCase = confirm("Would you like to include upper case letters?");
  if (upperCase === true) {
    combinedNumbersArr = combinedNumbersArr.concat(upperCaseLettersArr);
  };
  
  /**********************************LOWER CASE CONFIRMATION***********************************************************/
  let lowerCase = confirm("Would you like to include lower case letters?");
  if (lowerCase !== true) {
  } else {
    upperCaseLettersArr.forEach(item => {
      lowerCaseLettersArr = item.toLowerCase();
      combinedNumbersArr = combinedNumbersArr.concat(lowerCaseLettersArr);
    });
    ;
  }
  ;
  
  
  /**********************************NUMBERS INPUT CONFIRMATION*********************************************************/
  let includeNumbers = confirm("Would you like to include numbers?");
  if (includeNumbers === true) {
    combinedNumbersArr = combinedNumbersArr.concat(numbersArray);
  };

//Confirm if user would like to include special characters
  let includeSpecialCharacters = confirm("Would you like to include special characters?");
  if (includeSpecialCharacters === true) {
    combinedNumbersArr = combinedNumbersArr.concat(specChar);
  };
  
  
  
  /**********************************ABOVE QUESTIONS WILL REPEAT UNTIL IN PASSWORD REQUIREMENTS MET********************/
  while (upperCase === false && lowerCase === false && includeNumbers === false && includeSpecialCharacters === false) {
    alert("At least one character selection must be made.");
    
    
    let lowerCase = confirm("Would you like to include lower case letters?");
    if (lowerCase === true) {
      for (let i = 0; i < upperCaseLettersArr.length; i++) {
        lowerCaseLettersArr = upperCaseLettersArr[i].toLowerCase();
        combinedNumbersArr = combinedNumbersArr.concat(lowerCaseLettersArr);
      };
    };
    
    let upperCase = confirm("Would you like to include upper case letters?");
    if (upperCase === true) {
      combinedNumbersArr = combinedNumbersArr.concat(upperCaseLettersArr);
    };
    
    let special = confirm("Would you like to include special characters?");
    if (special === true) {
      combinedNumbersArr = combinedNumbersArr.concat(specChar);
    };
    
    
    let num = confirm("Would you like to include numbers?");
    if (num === true) {
      combinedNumbersArr = combinedNumbersArr.concat(numbersArray);
    };
    
    
    if (lowerCase === true || upperCase === true || num === true || special === true) {
      {break};
    };
  };
  
  /**********************************PASSWORD GENERATOR****************************************************************/
  
  let finalPasswordOutput = "", i;
  for (let i = 0; i < passWordLength; i++) {
    finalPasswordOutput += combinedNumbersArr[Math.floor(Math.random() * combinedNumbersArr.length)];
  };
  return finalPasswordOutput;
};
