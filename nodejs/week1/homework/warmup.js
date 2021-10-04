console.log("inside warmup file");
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getDiameter(){
        return 2 * this.radius;
    }
    getCircumference(){
        return Math.PI * this.radius * this.radius;
    }
    getArea(){
        return Math.PI * this.radius;
    }
}

const circle1 = new Circle(10);
const circle2 = new Circle(5);
const circle3 = new Circle(8);
console.log(`Circle1- Diameter: ${circle1.getDiameter()}, Circumference: ${circle1.getCircumference()}, Area: ${circle1.getArea()}`);
console.log(`Circle2- Diameter: ${circle2.getDiameter()}, Circumference: ${circle2.getCircumference()}, Area: ${circle2.getArea()}`);
console.log(`Circle3- Diameter: ${circle3.getDiameter()}, Circumference: ${circle3.getCircumference()}, Area: ${circle3.getArea()}`);
