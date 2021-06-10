let names = [];
let todoList = [];
//Main function of Voice Assistant
function getReply(command) { 
    if(command.startsWith('Hello')){
        getResponse(command);
    }else if(command.startsWith('What is my')){
       getName(command);
    }else if(command.startsWith('Add fishing')){
        addToDoList(command);
    }else if(command.startsWith('Add singing')){
        updateToDoList(command);
    }else if(command.startsWith('Remove')){
        removeFromToDoList(command);
    }else if(command.startsWith('What is on')){
        getMyToDoList(command);
    }else if(command.startsWith('What day')){
        getTodayDate(command);
    }else if(command.startsWith('What is')){
        calculateSimpleMath(command);

    }else if(command.startsWith('Set')){
       console.log('Timer set for 4 minutes');
        let wordsInCommand = command.split(' ');
        const minutes = wordsInCommand[4];
        setTimer(minutes);
    }
}
    

//Greeting with Response:
function getResponse(command){
    const wordsInCommand = command.split(' ');
    const nameInCommand = wordsInCommand[wordsInCommand.length - 1];
    let newNameFlag = true;
    for (i = 0; i < names.length; i ++) {
        if (names[i] === nameInCommand && command.startsWith('Hello')) {
            console.log('Error');
            newNameFlag = false;
        }
    }
    if (newNameFlag) {
        names.push(nameInCommand);
        console.log(`Nice to meet you ${nameInCommand}`);
    }
}

//Name in Response:
function getName(command){
    if (names.length === 0) {
        console.log('Please provide a name')
    } else {
        console.log(`Your name is ${names.pop()}`);
    }
}

//Add something to the to do list:
function addToDoList(command){
    let wordsInCommand = command.split(' ');
    let todoItem = wordsInCommand[1];
    todoList.push(todoItem);
    console.log(`${todoItem} added to your todo`);
}

//Updating the to do list:
function updateToDoList(command){
    let wordsInCommand = command.split(' ');
    let todoItem = `${wordsInCommand[1]} ${wordsInCommand[2]} ${wordsInCommand[3]} ${wordsInCommand[4]}`;
    todoList.push(todoItem);
    console.log(`${todoItem} added to your todo`);
}

//Removing from to do list:
function removeFromToDoList(command){
    console.log(`Removed ${todoList.shift()} from your todo`);
}

//Showing the to do list:
function getMyToDoList(command){
    console.log(todoList);
}

//Showing today date information:
function getTodayDate(command){
    const date = new Date().toDateString();
    const [weekday, month, day, year] = date.split(' ');
    console.log(`${day}. of ${month} ${year}`);
}

//Calculating simple math operations:
function calculateSimpleMath(command){
    let wordsInCommand = command.split(' ');
    let x = parseInt(wordsInCommand[2],10);
    let y = parseInt(wordsInCommand[4],10);
    let operator = wordsInCommand[3];
    if(operator === '+'){
        console.log(x + y);
    }else if(operator === '-'){
        console.log(x - y);
    }else if(operator === '*'){
        console.log(x * y);
    }else if(operator === '/'){
        console.log(x / y);
    }
}

//Setting timer for few minutes:
function setTimer(minutes){
    setTimeout(function () {
        console.log('Timer done');
    }, minutes*60*1000);
}


//Checking if the functions are all working fine:

getReply('Hello My Name is Benjamin');
getReply('Hello My Name is Jai');
getReply('What is my Name');
getReply('Add fishing to my todo');
getReply('Add singing in the shower to my todo');
getReply('Remove fishing from my todo');
getReply('What is on my todo?');
getReply('What day is it today?');
getReply('What is 3 + 4');
getReply('What is 21 - 12');
getReply('What is 4 * 5');
getReply('What is 10 / 2');
getReply('Set a timer for 4 minutes');