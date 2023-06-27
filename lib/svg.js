//svg classes

class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    //combines shapes and text
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
       ${this.shapeElement}
        ${this.textElement}
        </svg>`;
  }
  setShape(shape) {
    this.shapeElement = shape.render();
  }
  createTextSVG(textColor, message) {
    // return text svg
    this.textElement = `<text x="150" y="160" fill="${textColor}" font-size="60" text-anchor="middle">${message}</text>`;
  }
}

module.exports = SVG;
