// Authors: Tyrving and Ryan
// Version: 1.0
// Description: compilation of the functions randocase, toBlocks, and toCircles to choose the function to run

/**
  * This function takes a character and returns it in a random case.
  * @param {char} char - the character to be changed
  * @return {char} - the character in a random case
  * @example
  * charToRandocase('a') // returns 'A' or 'a'
  */
function charToRandocase(char) {
  return Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase();//if random number is less than .5, return uppercase, else return lowercase
}

/**
 * This function changes the text of the body of the page so each character is a random case.
 */
function randocase(){
  var changeChar= false; //boolean to check if the character is between tags
  var inputText = document.body.innerHTML; //get the text from the body of the page
  var newInput = ""; //initialize the new input
  for(i=0; i<inputText.length; i++){ //iterate through the input text
    if(inputText.charAt(i)=='<'){ //if the character is '<', then the character is not between tags
       changeChar= false;
    } else if (inputText.charAt(i)=='>'){ //if the character is '>', then the character is between tags
      changeChar= true;
    }
    if(changeChar){ // if the character is between tags, then change the character to a random case
      newInput += charToRandocase(inputText.charAt(i));
    } else { // if the character is not between tags, then keep the character the same
      newInput += inputText.charAt(i);
    }
  }
  document.body.innerHTML = newInput; // set the body of the page to the new input
}

/**
 * This function takes a character and returns it in a block form.
 * @param {char} char - the character to be changed
 * @return {char} - the character in a block form
 * @example
 * charToBlock('a') // returns '🅰'
 */
function charToBlock(char){
  switch(char.toLowerCase()){
    case 'a':
      return '🅰';
    case 'b':
      return '🅱';
    case 'c':
      return '🅲';
    case 'd':
      return '🅳';
    case 'e':
      return '🅴';
    case 'f':
      return '🅵';
    case 'g':
      return '🅶';
    case 'h':
      return '🅷';
    case 'i':
      return '🅸';
    case 'j':
      return '🅹';
    case 'k':
      return '🅺';
    case 'l':
      return '🅻';
    case 'm':
      return '🅼';
    case 'n':
      return '🅽';
    case 'o':
      return '🅾';
    case 'p':
      return '🅿';
    case 'q':
      return '🆀';
    case 'r':
      return '🆁';
    case 's':
      return '🆂';
    case 't':
      return '🆃';
    case 'u':
      return '🆄';
    case 'v':
      return '🆅';
    case 'w':
      return '🆆';
    case 'x':
      return '🆇';
    case 'y':
      return '🆈';
    case 'z':
      return '🆉';
    default:
      return char;
  }
}

/**
 * This function changes the text of the body of the page so each character is in a block form.
 */
function toBlocks(){
  var changeChar= false; // boolean to check if the character is between tags
  var inputText = document.body.innerHTML; // get the text from the body of the page
  var newInput = ""; // initialize the new input
  for(i=0; i<inputText.length; i++){ // iterate through the input text
    if(inputText.charAt(i)=='<'){ // if the character is '<', then the character is not between tags
       changeChar= false;
    } else if (inputText.charAt(i)=='>'){ // if the character is '>', then the character is between tags
      changeChar= true;
    }
    if(changeChar){ // if the character is between tags, then change the character to a block form
      newInput += charToBlock(inputText.charAt(i));
    } else { // if the character is not between tags, then keep the character the same
      newInput += inputText.charAt(i);
    }
  }
  document.body.innerHTML = newInput; // set the body of the page to the new input
}

/**
 * This function takes a character and returns it in a circle form.
 * @param {char} char - the character to be changed
 * @returns {char} - the character in a circle form
 * @example
 * charToCircle('a') // returns '🅐'
 */
function charToCircle(char){
  switch(char.toLowerCase()){
    case 'a':
      return '🅐';
    case 'b':
      return '🅑';
    case 'c':
      return '🅒';
    case 'd':
      return '🅓';
    case 'e':
      return '🅔';
    case 'f':
      return '🅕';
    case 'g':
      return '🅖';
    case 'h':
      return '🅗';
    case 'i':
      return '🅘';
    case 'j':
      return '🅙';
    case 'k':
      return '🅚';
    case 'l':
      return '🅛';
    case 'm':
      return '🅜';
    case 'n':
      return '🅝';
    case 'o':
      return '🅞';
    case 'p':
      return '🅟';
    case 'q':
      return '🅠';
    case 'r':
      return '🅡';
    case 's':
      return '🅢';
    case 't':
      return '🅣';
    case 'u':
      return '🅤';
    case 'v':
      return '🅥';
    case 'w':
      return '🅦';
    case 'x':
      return '🅧';
    case 'y':
      return '🅨';
    case 'z':
      return '🅩';
    case '1':
      return '➊';
    case '2':
      return '➋';
    case '3':
      return '➌';
    case '4':
      return '➍';
    case '5':
      return '➎';
    case '6':
      return '➏';
    case '7':
      return '➐';
    case '8':
      return '➑';
    case '9':
      return '➒';
    case '0':
      return '➓';
    default:
      return char;
  }
}

/**
 * This function changes the text of the body of the page so each character is in a circle form.
 */
function toCircles() {
  var changeChar= false; // boolean to check if the character is between tags
  var inputText = document.body.innerHTML; // get the text from the body of the page
  var newInput = ""; // initialize the new input
  for(i=0; i<inputText.length; i++){ // iterate through the input text
    if(inputText.charAt(i)=='<'){ // if the character is '<', then the character is not between tags
       changeChar= false;
    } else if (inputText.charAt(i)=='>'){ // if the character is '>', then the character is between tags
      changeChar= true;
    }
    if(changeChar){ // if the character is between tags, then change the character to a circle form
      newInput += charToCircle(inputText.charAt(i));
    } else { // if the character is not between tags, then keep the character the same
      newInput += inputText.charAt(i);
    }
  }
  document.body.innerHTML = newInput; // set the body of the page to the new input
}

/**
 * This function randomly changes the characters of the body to a random case, block, or circle.
 */
function curse() {
  console.log('curse');
  var changeChar = false;
  var inputText = document.body.innerHTML;
  var newInput = "";
  for(i=0; i<inputText.length; i++){
    if(inputText.charAt(i)=='<'){
       changeChar = false;
    } else if (inputText.charAt(i)=='>'){
      changeChar = true;
    }
    if(changeChar){
      if(Math.random() < (.4)){
        newInput += charToRandocase(inputText.charAt(i));
      } else if (Math.random() < (.7)){
        newInput += charToBlock(inputText.charAt(i));
      } else {
        newInput += charToCircle(inputText.charAt(i));
      }
    } else {
      newInput += inputText.charAt(i);
    }
  }
  document.body.innerHTML = newInput;
}

/**
 * this function calls the function that corresponds to the option
 * @param {String} option 
 * @example
 * chooseFunction("randocap") // calls the randocap function
 * chooseFunction("toBlocks") // calls the toBlocks function
 * chooseFunction("toCircles") // calls the toCircles function
 * chooseFunction("curse") // calls the curse function
 */
function chooseFunction(option){
  console.log("chooseFunction: " + option);
	switch(option){
		case "randocap": 
			randocase();
			break;
		case "toBlocks":
			toBlocks();
			break;
		case "toCircles":
			toCircles();
			break;
    case "curse":
      curse();
      break;
		case "default":
			console.log("no cosmetic option selected");
		default:
			console.log("Invalid option");
	}
}

/**
 * This function gets the current option from the storage
 * @returns {String} - the current option
 */
function getOption(){
  return browser.storage.local.get("option").then(res => {
    console.log("CF GO Current option: " + res.option);
    return res.option;
  });
}

/**
 * This function sets the option in the storage
 * @param {String} option - the new option to be set
 */
function setOption(option){
  console.log("CF SO Current option: " + getOption());
  browser.storage.local.set({ "option" : option });
  console.log("CF SO New option: " + getOption());
}

// choose a random function to run since storage is not currently working
if (Math.random() < 0.22) {
  chooseFunction("randocap");
} else if (Math.random() < 0.44) {
  chooseFunction("toBlocks");
} else if (Math.random() < 0.66) {
  chooseFunction("toCircles");
} else {
  chooseFunction("curse");
}