// import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/
var Style = require('sketch/dom').Style

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function(context) {
  context.document.pages().forEach((page) => {
    page.artboards().forEach((artboard) => {
      artboard.backgroundColor = Style.colorFromString(randomColor())
      artboard.hasBackgroundColor = true
    })
  })
}
