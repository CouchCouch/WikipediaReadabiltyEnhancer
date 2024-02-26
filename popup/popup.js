/**
 * Randomly capitalize each character in an element
 * @param {Element} element - the element to be changed
 */
function randocapElement(element) {
  var text = element.innerHTML;
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var c = text.charAt(i);
    result += Math.random() < 0.5 ? c.toUpperCase() : c.toLowerCase();
  }
  element.innerHTML = result;
}

randocapElement(document.getElementById('randocap'));

/**
 * This function stores the option in local storage
 * @param {String} option 
 */
function setOption(option) {
  console.log("P SO Current option: " + getOption());
  browser.storage.local.set({
    option: option
  });
  console.log("P SO New option: " + getOption());
}

/**
 * This function gets the current option from the storage
 * @returns {String} - the current option
 */
function getOption() {
  return browser.storage.local.get("option").then((res) => {
    console.log("P GO Current option: " + res.option);
    return res.option;
  });
}

/**
 * This sets the options to randocap
 */
function randocapClicked() {
  console.log("randocap clicked");
  randocapElement(document.getElementById('randocap'));
  setOption("randocap");
}

/**
 * This sets the options to toBlocks
 */
function toBlocksClicked() {
  console.log("toBlocks clicked");
  setOption("toBlocks");
}

/**
 * This sets the options to toCircles
 */
function toCirclesClicked() {
  console.log("toCircles clicked");
  setOption("toCircles");
}

/**
 * This sets the options to curse
 */
function curseClicked() {
  console.log("curse clicked");
  setOption("curse");
}

/**
 * This sets the options to default
 */
function defaultClicked() {
  console.log("default clicked");
  setOption("default");
}

/**
 * This sets the options to random
 */
function randomClicked() {
  console.log("random clicked");
  setOption("random");
}