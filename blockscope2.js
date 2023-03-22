function startLet() {
    for (let i = 0; i < 5; i++) {
        if (true) {
            let colour = 'red';
            console.log(i, colour); //Output: 0,1,2,3,4 with red
        }
    }
    console.log(i, colour); //ReferenceError: i is not defined
}
function startVar() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var colour = 'blue';
            console.log(i, colour); //Output: 0,1,2,3,4 with blue
        }
    }
    console.log(i, colour); //Output: 5, blue
}
// console.log('Running with let:');
// startLet();
console.log('Running with var:');
startVar();