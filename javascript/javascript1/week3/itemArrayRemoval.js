
//Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  //To remove an item using indexOf and position if we do not know the index:

  let position = names.indexOf(nameToRemove);
  let removeditem = names.splice(position, 1);
  
  console.log(removeditem);

  //To remove an item using splice if we already know the index:
  names.splice(1, 1);
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

  