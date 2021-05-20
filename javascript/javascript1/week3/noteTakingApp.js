//Note taking app

const notes = [];

function saveNote(content, id){
   return notes.push({content: content, id: id});
}

saveNote('Pick up groceries', 1);
saveNote('Do Laundry', 2);
saveNote('Clean', 3);

console.log(notes);

function getNote(id){
  for (let i = 0; i < notes.length; i++){
    if(notes[i].id === id){
      return notes[i];
    }
  }
    if(!id){
      console.log('Provide a proper value')
    }
}

const firstNote = getNote(1);
console.log(firstNote); 

console.log(getNote());

function logOutNotesFormatted() {
 for(let i = 0; i < notes.length; i++){
   console.log(`The note with id: ${notes[i].id}, has the following text: ${notes[i].content}`);
 }
}

logOutNotesFormatted(); 
