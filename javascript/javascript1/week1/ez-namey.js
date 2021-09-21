//Ez Namey

const firstWordsArray = ['Easy', 'Corporate', 'Awesome', 'Tech', 'Business', 'Creative', 'Data', 'Alpha', 'Delta', 'Cloud'];
const secondWordsArray = ['Beta', 'Infinite', 'Level', 'Collective', 'Collaboration', 'Server', 'Craft', 'Brand', 'Vital', 'Blink'];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startUpName = firstWordsArray[randomNumber1] + ' ' + secondWordsArray[randomNumber2];
const numberOfCharacters = startUpName.length;

console.log(`The startup is: ${startUpName} contains ${numberOfCharacters} Characters`);