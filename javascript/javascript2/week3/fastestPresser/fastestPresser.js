const input = document.querySelector('input');
const button = document.getElementById('button');
const lkey = document.getElementById('lkey');
const skey = document.getElementById('skey');
let sKeyCount = 0;
let lKeyCount = 0;

function inputValue() {
    return input.value;  
}
const timer = () => {
    if(!input.value){
        console.log('Please provide time in seconds');
    }else{ 
    window.addEventListener('keypress', keyEvent);
    setTimeout(() => {
        window.removeEventListener('keypress', keyEvent);
        lkey.innerHTML = `L: ${lKeyCount}`;
        skey.innerHTML = `S: ${sKeyCount}`;
        if (sKeyCount > lKeyCount) {
            console.log(`Person with 's' key wins the game`);
        } else if (lKeyCount > sKeyCount) {
            console.log(`Person with 'l' key wins the game`);
        } else if (lKeyCount = sKeyCount) {
            console.log(`Its a draw`);
        }
        alert('Time is up');
    }, input.value * 1000);
}
};
button.addEventListener('click', timer);

const keyEvent = (event) => {
    let keyPressed = event.key;
    if (keyPressed === 's') {
         sKeyCount++;
    } else if (keyPressed === 'l') {
         lKeyCount++;
    }
};
