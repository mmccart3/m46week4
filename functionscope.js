let age = '21';
let name= 'Jenny';
console.log(`My age: ${age}`);
const callAge = () => {
    let name = 'Karen';
    console.log(`My age is: ${age}`);
    console.log(`My name is: ${name}`);
    };
callAge();
console.log(`Global Scope with local variable: ${name}`);