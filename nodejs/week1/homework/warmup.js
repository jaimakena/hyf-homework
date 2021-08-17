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
console.log(circle1.getDiameter());
console.log(circle2.getCircumference());
console.log(circle3.getArea());
