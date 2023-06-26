//test to see if the shapes are being created with color

const {Triangle, Square, Circle} = require("./shapes")

describe("Circle",() => {
    test("render circle and get red circle with yellow text", () =>{
        const expectedResult = `<circle cx="150" cy="150" r="100" fill="red" />`;
        const newCircle = new Circle()
        newCircle.setColor("red")
        const createSVG = newCircle.render();
        expect(createSVG).toEqual(expectedResult);
    }) 

//test triangle 

describe("Triangle",() => {
    test("render triangle and get red triangle with yellow text", () =>{
        const expectedResult = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`;
        const newTriangle = new Triangle()
        newTriangle.setColor("red")
        const createSVG = newTriangle.render();
        expect(createSVG).toEqual(expectedResult);
    })
})

//test square
describe("Square",() => {
    test("render square and get red square with yellow text", () =>{
        const expectedResult = `<rect x="50" y="50" width="200" height="200" fill="red" />`;
        const newSquare = new Square()
        newSquare.setColor("red")
        const createSVG = newSquare.render();
        expect(createSVG).toEqual(expectedResult);
    })
})
})
