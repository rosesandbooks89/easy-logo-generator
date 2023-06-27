# Easy-Logo-enerator

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Struggles and Sources](#struggles-and-sources)
* [Link to Recording of Application](#link-to-recording-of-application)
* [Questions](#questions)

## Installation
To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command ```npm init```  into the terminal. Next, install the inquirer package by entering the command ```npm install inquirer``` into the terminal. Finally, run the application by entering the command ```node index.js``` into the terminal.

## Usage
This application is used to generate a logo based on user input. The user is prompted to enter text, text color, shape, and shape color. The application then generates an SVG image of the configured logo. The generated SVG is named logo.svg and is saved in the same directory as the application. The application also logs the following message to the console: Generated logo.svg.

## Tests
There are 3 tests, one for each shape.
You can run the tests at any time by entering the command ```npm run test``` into the terminal.
## License
This application has no license.

## User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

* GIVEN a command-line application that accepts user input
* WHEN I am prompted for text
* THEN I can enter up to three characters
* WHEN I am prompted for the text color
* THEN I can enter a color keyword (OR a hexadecimal number)
* WHEN I am prompted for a shape
* THEN I am presented with a list of shapes to choose from: circle, triangle, and square
* WHEN I am prompted for the shape's color
* THEN I can enter a color keyword (OR a hexadecimal number)
* WHEN I have entered input for all the prompts
* THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
* WHEN I open the `logo.svg` file in a browser
* THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Struggles and Sources
This assignment was definitely harder as there was no base code to help get me started. I primarly used and refered back to the inclass activities to help me get started. My tutor was a big help especially with getting my code to work. I also used the following resources to help me complete this assignment:
* https://en.wikipedia.org/wiki/SVG
* https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial
* https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts
* https://en.wikipedia.org/wiki/Test-driven_development
* https://jestjs.io/docs/asynchronous

## Link to Recording of Application
https://dr


## Questions
If you have any questions, please contact me at the email below. Check out my Github portfolio for more of my projects!

Here is a link to my [GitHub Repo](https://github.com/rosesandbooks89).

If you have any questions please email me at: rosesandbooks89@gmail.com.