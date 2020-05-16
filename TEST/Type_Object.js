var person= {
    name:"Kevin",
    email:"Kevin@gmail.com",
    phone:"0922-155342"
}

// console.log(`${person.name},${person.email},${person.phone}`);
// console.log(`${person["name"]}, ${person["email"]}, ${person["phone"]}`);


var mary = {
    name:"Mary",
    email:"Mary@gmail.com",
    phone:"0912-345678"
}

var john = {
    name:"John",
    email:"John@gmail.com",
    phone:"0922-155342"
}

var array1=[person,mary,john];
console.log(array1 instanceof Array);

// console.log(array1);

console.log('------------------');
console.log(array1[0]);
console.log('------------------');
console.log(array1[1]);
console.log('------------------');
console.log(array1[2]);

console.log(array1[0].name,array1[2].email);

console.log('------Json-----');
var personString = JSON.stringify(array1);
console.log(personString);
console.log('Type is :' + typeof personString);

var personObject = JSON.stringify(personObject);
console.log(personObject);
console.log(typeof personObject);
