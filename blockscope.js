function startLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i); //Output: 0,1,2,3,4
        }
    console.log(i); //Error i is not defined
    }
function startVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i); //Output: 0,1,2,3,4
    }
    console.log(i); //Output: 5
}
// console.log('Running with let:');
// startLet();
console.log('Running with var:');
startVar();