//Student Manager
let class07Students = [];
function addStudentToClass(studentName) 
{
    if(getNumberOfStudents() >= 6 && studentName !== 'Queen Margrethe II'){
        console.log('Cannot add more students to class 07');
        return;
    }else if(class07Students.includes(studentName)){
        console.log(`Student ${studentName} is already in the class`);
        return;
    }else if(!studentName){
        console.log('Please provide a name');
        return;
    }else if(typeof(studentName) != 'string'){
        console.log('Please provide a proper string value');
    }
    else{
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
   return class07Students.length;
}

addStudentToClass('Aamir');
addStudentToClass('Hamsa');
addStudentToClass('Victor');
addStudentToClass('Benjamin');
addStudentToClass('Hanna');


//Displaying the array with students:
console.log(class07Students);


//Adding empty string to the studentName:
addStudentToClass('');

//Adding studentname that already exists:
addStudentToClass('Benjamin');

//Adding more students:
addStudentToClass(1);
console.log(class07Students);

//Adding some more students:
addStudentToClass('Ali');

//Adding queen to the class:
addStudentToClass('Queen Margrethe II');
console.log(class07Students);

//Calling func to get number of students in the class:
console.log(getNumberOfStudents());

