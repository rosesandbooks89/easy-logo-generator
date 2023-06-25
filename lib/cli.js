//user input about what text they want the logo to be
//user input about what color they want the text color to be (color keyword or hex code)
//user input about what shape they want the logo to be circle, square, or triangle
//user input about what color they want the shape to be (color keyword or hex code)

const inquirer = require('inquirer');
const SVG = require('./svg');
const { Triangle, Circle, Square } = require('./shapes');
const {writeFile} = require('fs/promises');

class CLI {
    run () {
    return inquirer
    .prompt([
        {
            name: 'text',
            type: 'input',
            message: 'What text do you want the logo to be? (must not be more than 3 characters)',
            validate: (text) => text.length <= 3 ||
            'Hey you cannot type more than 3 characters!'
            
        },
        {
            name: 'textColor',
            type: 'input',
            message: 'What color do you want the text to be?',
            
        },
        {
            name: 'shape',
            type: 'list',
            message: 'What shape do you want the logo to be?',
            choices: ['triangle', 'circle', 'square']
        },
        {
            name: 'shapeColor',
            type: 'input',
            message: 'What color do you want the shape to be?',
        }
    ])
    .then(answers => {
        const { text, textColor, shape, shapeColor } = answers;
        const svg = new SVG(text, textColor, shape, shapeColor);
        const svgString = svg.render();
        return writeFile('logo.svg', svgString);
    })
    .then(() => console.log('Logo created!'))
    .catch(error => console.log(error));
    }
}

