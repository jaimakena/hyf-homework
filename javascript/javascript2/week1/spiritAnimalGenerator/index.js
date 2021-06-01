const spiritAnimalNames = ['The humming bee', 'The cheeky monkey', 'The crazy frog', 'The beautiful butterfly', 'The fullmoon wolf', 'The angry lion', 'The poisonous snake', 'The sqeaky hedgehog', 'The elegant swan', 'The greedy fox'];


const myButton = document.querySelector('button');
const spiritName = document.querySelector('p');


function clickButton(){
const inputName = document.getElementById('name').value;
if(inputName !== ''){
    spiritName.innerHTML = getSpiritName(inputName);
}else{
    spiritName.innerHTML = 'Please provide a name';
}
}

function mouseOver(){
    const inputName = document.getElementById('name').value;
    if(inputName !== ''){
        spiritName.innerHTML = getSpiritName(inputName);
    }else{
        spiritName.innerHTML = 'Please provide a name';
    } 
}

function onSelectChange(){ 
    const selectItem = document.getElementById('selectActions');
    console.log(selectItem.selectedIndex);
    if(selectItem.selectedIndex ==1){
        myButton.addEventListener('click', clickButton);
        myButton.removeEventListener('mouseover', mouseOver);
    }else if(selectItem.selectedIndex ==2){ 
       myButton.addEventListener('mouseover', mouseOver);
       myButton.removeEventListener('click', clickButton);
    }
}

function getSpiritName(inputName){ 
    return `${inputName} - ${spiritAnimalNames[parseInt(Math.random()*10)]}`;
}
