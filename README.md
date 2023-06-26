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

## Mock-Up

The following image shows the web application's appearance and functionality:

![The logo generator application displays a text input, a color picker, and a shape picker.](./Assets/02-advanced-css-homework-demo.gif)

## Getting Started

Here are some guidelines to help you get started:

- This application should be built using only the command line and a text editor.

- Before you start, clone the [starter code](

- This application will require you to use the [Inquirer package](https://www.npmjs.com/package/inquirer).

- The application should be invoked by entering `node index.js` in the command line.

- The user will be prompted for the following inputs:

  - The text that will appear in the logo

  - The color of the text that will appear in the logo

  - The shape that will appear in the logo

  - The color of the shape that will appear in the logo

- The application should then generate an SVG image of the configured logo.

- The generated SVG should be named `logo.svg`.

- The application should also log the following message to the console: `Generated logo.svg`.

## Grading Requirements



      
