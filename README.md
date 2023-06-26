# logo-generator

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered



//test to see if the shapes are being created with color

const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('render returns a string', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        expect(circle.render()).toequal('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    });
});

describe('Circle', () => {
    test('render returns a string', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toequal('<circle cx="150" cy="150" r="100" fill="blue" />');
    });
});

describe('Square', () => {
    test('render returns a string', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toequal('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });
});





