//svg classes

class SVG {
    constructor(text, textColor, shape) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
    }
    generate() {
        const shapeSVG = this.shape.render();
        const textSVG = this.createTextSVG();

//combines shapes and text
        const combinedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        ${shapeSVG}
        ${textSVG}
        </svg>`;
    }
    createTextSVG() {
        // x posisiton
        const x = 150;
        // y position
        const y = 120;
        // font size
        const fontSize = 40;
        // font family
        const fontFamily = "sans-serif";
        // font weight
        const fontWeight = "bold";
        // text anchor
        const textAnchor = "middle";
        // fill color
        const fill = this.textColor;
// return text svg
        return `<text x="${x}" y="${y}" font-size="${fontSize}" font-family="${fontFamily}" font-weight="${fontWeight}" text-anchor="${textAnchor}" fill="${fill}">${this.text}</text>`;
    }
}
module.exports = SVG;