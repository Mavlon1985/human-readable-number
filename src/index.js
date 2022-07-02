module.exports = function toReadable (number) {
  
let textNum = number.toString();
  //return textNum.length;
  let hundredths = "";
  let tens = "";
  let ones = "";
  if (textNum.length > 2) {
    switch (textNum[0]) {
      case "9": 
      hundredths = "nine hundred";
      break;
      case "8":
      hundredths = "eight hundred";
      break;
      case "7":
      hundredths = "seven hundred";
      break;
      case "6":
      hundredths = "six hundred";
      break;
      case "5":
      hundredths = "five hundred";
      break;
      case "4":
      hundredths = "four hundred";
      break;
      case "3":
      hundredths = "three hundred";
      break;
      case "2":
      hundredths = "two hundred";
      break;
      case "1":
      hundredths = "one hundred";
}
  switch (textNum[1]) {
    case "9": 
    tens = " ninety";
    break;
    case "8":
    tens = " eighty";
    break;
    case "7":
    tens = " seventy";
    break;
    case "6":
    tens = " sixty";
    break;
    case "5":
    tens = " fifty";
    break;
    case "4":
    tens = " forty";
    break;
    case "3":
    tens = " thirty";
    break;
    case "2":
    tens = " twenty";
    break;
    case "1":
    switch (textNum[2]) {
      case "9":
        tens = " nineteen";
        break;
      case "8":
        tens = " eighteen";
        break;
      case "7":
        tens = " seventeen"
        break;
      case "6":
        tens = " sixteen"
        break;
      case "5":
        tens = " fifteen"
        break;
      case "4":
        tens = " fourteen"
        break;
      case "3":
        tens = " thirteen"
        break;
      case "2":
        tens = " twelve"
        break;
      case "1":
        tens = " eleven"
        break;
      case "0":
        tens = " ten"
        break;
        
    }
    break;
    case "0":
      tens = "";
    }

    if (textNum[1] != "1") {
    switch (textNum[2]) {
      case "9": 
      ones = " nine";
      break;
      case "8":
      ones = " eight";
      break;
      case "7":
      ones = " seven";
      break;
      case "6":
      ones = " six";
      break;
      case "5":
      ones = " five";
      break;
      case "4":
      ones = " four";
      break;
      case "3":
      ones = " three";
      break;
      case "2":
      ones = " two";
      break;
      case "1":
      ones = " one";
      break;
      case "0":
      ones = "";
      break;
      }
    } 
        return hundredths + tens + ones;
  }

  else if (textNum.length > 1) {
    switch (textNum[0]) {
    case "9": 
    tens = "ninety";
    break;
    case "8":
    tens = "eighty";
    break;
    case "7":
    tens = "seventy";
    break;
    case "6":
    tens = "sixty";
    break;
    case "5":
    tens = "fifty";
    break;
    case "4":
    tens = "forty";
    break;
    case "3":
    tens = "thirty";
    break;
    case "2":
    tens = "twenty";
    break;
    case "1":
    switch (textNum[1]) {
      case "9":
        tens = "nineteen";
        break;
      case "8":
        tens = "eighteen";
        break;
      case "7":
        tens = "seventeen"
        break;
      case "6":
        tens = "sixteen"
        break;
      case "5":
        tens = "fifteen"
        break;
      case "4":
        tens = "fourteen"
        break;
      case "3":
        tens = "thirteen"
        break;
      case "2":
        tens = "twelve"
        break;
      case "1":
        tens = "eleven"
        break;
      case "0":
        tens = "ten"
        break;        
    }
    break;
    case "0":
      tens = "";
    }

    if (textNum[0] != "1") {
    switch (textNum[1]) {
      case "9": 
      ones = " nine";
      break;
      case "8":
      ones = " eight";
      break;
      case "7":
      ones = " seven";
      break;
      case "6":
      ones = " six";
      break;
      case "5":
      ones = " five";
      break;
      case "4":
      ones = " four";
      break;
      case "3":
      ones = " three";
      break;
      case "2":
      ones = " two";
      break;
      case "1":
      ones = " one";
      break;
      case "0":
      ones = "";
      break;
      }
    } 
        return tens + ones;

  } else {

    switch (textNum[0]) {
      case "9": 
      ones = "nine";
      break;
      case "8":
      ones = "eight";
      break;
      case "7":
      ones = "seven";
      break;
      case "6":
      ones = "six";
      break;
      case "5":
      ones = "five";
      break;
      case "4":
      ones = "four";
      break;
      case "3":
      ones = "three";
      break;
      case "2":
      ones = "two";
      break;
      case "1":
      ones = "one";
      break;
      case "0":
      ones = "zero";
      break;
    
  }
return ones;
}
}
