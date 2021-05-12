function getFullName(firstName, surName, useFormalName, gender = 'm')
{   
    if(firstName && surName)
    {
        let initial;
        if (gender === 'm') 
        {
            initial = 'Lord ';
        } else if (gender === 'f')
        {
            initial = 'Lady ';
        }
        let fullName = firstName + ' ' + surName;
        if (useFormalName === true)
        {
            return initial + fullName;
        }
        return fullName;
    }
    return 'Please Provide a Full Name';
}
const fullName1 = getFullName('Benjamin', 'Hughes', true);
const fullName2 = getFullName('Benjamin', 'Hughes', false);
const fullName3 = getFullName('Tia','Timothy', true, 'f');
const fullName4 = getFullName('Bill','Clinton', true, 'm');
const fullName5 = getFullName('Tom','Hanks', true);
const fullName6 = getFullName('','Hanks', false, 'm');

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);
console.log(fullName6);