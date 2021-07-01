const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const boxes = [redBox, blueBox, greenBox];

async function moveBox(color){
  if(color==='red'){
    await moveElement(redBox, {x: 20-(redBox.offsetLeft), y: 300-(redBox.offsetTop)});
  }else if(color==='blue'){
    await moveElement(blueBox, {x: 400-(blueBox.offsetLeft), y: 300-(blueBox.offsetTop)})
  }else{
    await moveElement(greenBox, {x: 400-(greenBox.offsetLeft), y: 20-(greenBox.offsetTop)})
  }
}
async function translateOneByOne(){
  await moveBox('red')
    console.log(`redBox has been moved`); 
    await moveBox('blue');
    console.log(`blueBox has been moved`);
    await moveBox('green');
    console.log(`greenBox has been moved`);
}
translateOneByOne();

async function translateAllAtOnce(){
  const response = Promise.all([moveBox('red'), moveBox('blue'), moveBox('green')])
  await response;
  console.log(`All the boxes have been moved`);
}
translateAllAtOnce();

