const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const boxes = [redBox, blueBox, greenBox];

async function translateOneByOne(){
  await moveElement(redBox, {x: 20, y: 300})
    console.log(`redBox has been moved`); 
  await moveElement(blueBox, {x: 400, y: 300})
    console.log(`blueBox has been moved`);
  await moveElement(greenBox, {x: 400, y: 20})
    console.log(`greenBox has been moved`);
}
translateOneByOne();

async function translateAllAtOnce(){
  const response = Promise.all(
        [moveElement(redBox, {x: 20, y: 300})],
        [moveElement(blueBox, {x: 400, y: 300})],
        [moveElement(greenBox, {x: 400, y: 20})]
        )
  await response;
  console.log(`All the boxes have been moved`);
}
translateAllAtOnce();
