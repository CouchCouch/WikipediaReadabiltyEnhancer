// Authors: Mark and Ryan
// Version: 1.0
// Description: compilation of the functions randocase, toBlocks, and toCircles to choose the function to run

function charToRandocase(char) {
  return Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase();
}

function randocase(){
  console.log('randocase');
  var changeChar= false;
  var inputText = document.body.innerHTML;
  var newInput = "";
  for(i=0; i<inputText.length; i++){
    if(inputText.charAt(i)=='<'){
       changeChar= false;
    } else if (inputText.charAt(i)=='>'){
      changeChar= true;
    }
    if(changeChar){
      newInput += charToRandocase(inputText.charAt(i));
    } else {
      newInput += inputText.charAt(i);
    }
  }
  document.body.innerHTML = newInput;
}

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

function toBlocks(){
  console.log('toBlocks');
  var changeChar= false;
  var inputText = document.body.innerHTML;
  var newInput = "";
  for(i=0; i<inputText.length; i++){
    if(inputText.charAt(i)=='<'){
       changeChar= false;
    } else if (inputText.charAt(i)=='>'){
      changeChar= true;
    }
    if(changeChar){
      newInput += charToBlock(inputText.charAt(i));
    } else {
      newInput += inputText.charAt(i);
    }
  }
  document.body.innerHTML = newInput;
}

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

function toCircles() {
  console.log('toBlocks');
  var changeChar= false;
  var inputText = document.body.innerHTML;
  var newInput = "";
  for(i=0; i<inputText.length; i++){
    if(inputText.charAt(i)=='<'){
       changeChar= false;
    } else if (inputText.charAt(i)=='>'){
      changeChar= true;
    }
    if(changeChar){
      newInput += charToCircle(inputText.charAt(i));
    } else {
      newInput += inputText.charAt(i);
    }
  }
  document.body.innerHTML = newInput;
}

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

function getOption(){
  return browser.storage.local.get("option").then(res => {
    console.log("CF GO Current option: " + res.option);
    return res.option;
  });
}

function setOption(option){
  console.log("CF SO Current option: " + getOption());
  browser.storage.local.set({ "option" : option });
  console.log("CF SO New option: " + getOption());
}

if (Math.random() < 0.22) {
  chooseFunction("randocap");
} else if (Math.random() < 0.44) {
  chooseFunction("toBlocks");
} else if (Math.random() < 0.66) {
  chooseFunction("toCircles");
} else {
  chooseFunction("curse");
}