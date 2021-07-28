// Paint a circle to a canvas element

//Class creation time!

const canv = document.getElementById('circleCanvas');
const body = document.querySelector('body');

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    
    draw(){
        if(canv.getContext){
            const ctx = canv.getContext('2d');
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
            ctx.stroke();
            ctx.fillStyle = this.fillColor;
            ctx.fill(); 
           
        }   
    }
}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
//c1.draw();
const c2 = new Circle(100, 40, 25, 0, 2 * Math.PI, "green");
//c2.draw();
const c3 = new Circle(100, 100, 20, 0, 2 * Math.PI, "purple");
//c3.draw();

//Now lets make art!

let counter = 0;
const maxCircles = 5;

function drawRandomCircle(xPosition, yPosition){
    canv.width = window.innerWidth;
    canv.height = window.innerHeight; 
    const x = (xPosition)?xPosition:Math.floor(Math.random() * window.screen.width);
    const y = (yPosition)?yPosition:Math.floor(Math.random() * window.screen.height);
    const r = Math.floor(Math.random() * 100);
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    const fillColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    const newCircle = new Circle(x, y, r, startAngle, endAngle, fillColor);
    newCircle.draw(); 
    counter++;
}
//drawRandomCircle();

//const timer=setInterval(startDrawingCircles,1000);
 
function startDrawingCircles(){
    drawRandomCircle() 
    if(counter === maxCircles){
        clearInterval(timer);
    }   
}

body.addEventListener('click', (event) => {
    drawRandomCircle(event.clientX, event.clientY);
});


