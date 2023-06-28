//need shapes triangle, circle, and square

// shape classes
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 0 244, 150 56, 150" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };

  //done
  