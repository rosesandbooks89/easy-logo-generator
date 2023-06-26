//user input about what text they want the logo to be
//user input about what color they want the text color to be (color keyword or hex code)
//user input about what shape they want the logo to be circle, square, or triangle
//user input about what color they want the shape to be (color keyword or hex code)

const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Triangle, Circle, Square } = require("./shapes");
const SVG = require("./svg");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "What text do you want the logo to be? (must not be more than 3 characters)",
          validate: (text) =>
            text.length <= 3 || "Hey you cannot type more than 3 characters!",
        },
        {
          name: "textColor",
          type: "input",
          message: "What color do you want the text to be?",
        },
        {
          name: "shapeType",
          type: "list",
          message: "What shape do you want the logo to be?",
          choices: ["triangle", "circle", "square"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "What color do you want the shape to be?",
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let shape;
        switch (shapeType) {
          case "triangle":
            shape = new Triangle();
            break;
          case "circle":
            shape = new Circle();
            break;
          case "square":
            shape = new Square();
            break;
        }
        shape.setColor(shapeColor);
        //create svg using shape and text
        const svg = new SVG();
        svg.createTextSVG(textColor, text);
        svg.setShape(shape);

        //write svg to file
        return writeFile("logo.svg", svg.render());
      })
      .then(() => console.log("Logo created!"))
      .catch((error) => console.error(error));
  }
}

module.exports = CLI;
