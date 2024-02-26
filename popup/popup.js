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

function setOption(option) {
  console.log("P SO Current option: " + getOption());
  browser.storage.local.set({
    option: option
  });
  console.log("P SO New option: " + getOption());
}

function getOption() {
  return browser.storage.local.get("option").then((res) => {
    console.log("P GO Current option: " + res.option);
    return res.option;
  });
}

function randocapClicked() {
  console.log("randocap clicked");
  randocapElement(document.getElementById('randocap'));
  setOption("randocap");
}

function toBlocksClicked() {
  console.log("toBlocks clicked");
  setOption("toBlocks");
}

function toCirclesClicked() {
  console.log("toCircles clicked");
  setOption("toCircles");
}

function curseClicked() {
  console.log("curse clicked");
  setOption("curse");
}

function defaultClicked() {
  console.log("default clicked");
  setOption("default");
}