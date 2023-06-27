//import shapes

const {Triangle, Square, Circle} = require("./shapes")

//passing svg test

const SVG = require("./svg");

describe("SVG",() => {
    test("render svg and get red circle with yellow text", () =>{
        const expectedResult = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <circle cx="150" cy="150" r="100" fill="red" />
        <text x="150" y="130" fill="yellow" font-size="60" text-anchor="middle">hi</text>
        </svg>`;
        const newSVG = new SVG()
        newSVG.createTextSVG("yellow", "hi")
        const newCircle = new Circle()
        newCircle.setColor("red")
        newSVG.setShape(newCircle)
        const createSVG = newSVG.render();
        expect(createSVG).toEqual(expectedResult);
    })
})






