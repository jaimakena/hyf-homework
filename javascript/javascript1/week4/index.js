let names = [];
let todoList = [];
function getReply(command) { 
    if(command.startsWith('Hello')){
        getResponse(command);
    }else if(command.startsWith('What is my')){
       getName(command);
    }else if(command.startsWith('Add') && command.endsWith('to my todo')){
        addToDoList(command);
    }else if(command.startsWith('Remove') && command.endsWith('from my todo')){
        removeFromToDoList(command);
    }else if(command.startsWith('What is on')){
        getMyToDoList(command);
    }else if(command.startsWith('What day')){
        getTodayDate(command);
    }else if(command.startsWith('What is')){
        calculateSimpleMath(command);

    }
    else if(command.startsWith('Set')){
       console.log(`Timer set for ${minutes} minutes`);
        let wordsInCommand = command.split(' ');
        const minutes = wordsInCommand[wordsInCommand.length - 1];
        setTimer(minutes);
    }
}
    


function getResponse(command){
    const wordsInCommand = command.split(' ');
    const nameInCommand = wordsInCommand[wordsInCommand.length - 1];
    let newNameFlag = true;
  
    for (i = 0; i < names.length; i ++) {
        
       if (names[i] === nameInCommand && command.startsWith('Hello')) 
       {
            console.log('Name exists');
            newNameFlag = false;
        }
    }
    if (newNameFlag) {
       names.push(nameInCommand);
       console.log(`Nice to meet you ${nameInCommand}`);
    }
}

function getName(command){
    const name =names[names.length - 1];
    if (names.length === 0) {
        console.log('Please provide a name')
    } else {
        console.log(`Your name is ${name}`);
    }
}

function addToDoList(command){
    let todoItem = command.substring(command.indexOf('Add') + 4, command.indexOf('to my todo') - 1);
    todoList.push(todoItem);
    console.log(`${todoItem} added to your todo`);
}   

function removeFromToDoList(command){
    let todoItem = command.substring(command.indexOf('Remove') + 4, command.indexOf('from my todo') - 1);
    let removedItem = todoList.splice(todoItem.indexOf(todoItem), 1);
    console.log(`Removed ${removedItem} from your todo`);
}

function getMyToDoList(command){
    console.log(todoList);
}

function getTodayDate(command){
    const date = new Date().toDateString();
    const [weekday, month, day, year] = date.split(' ');
    console.log(`${day}. of ${month} ${year}`);
}

function calculateSimpleMath(command){
    let [ , , a, operator, b] = command.split(' '); 
    let x = parseInt(a);
    let y = parseInt(b);
    //let wordsInCommand = command.split(' ');
    //let x = parseInt(wordsInCommand[2],10);   
    //let y = parseInt(wordsInCommand[4],10);
    //let operator = wordsInCommand[3];
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

function setTimer(minutes){
    setTimeout(function () {
        console.log('Timer done');
    }, minutes*60*1000);
}

getReply('Hello My Name is Benjamin');
getReply('Hello My Name is Jai');
getReply('Hello My Name is Benjamin');
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
