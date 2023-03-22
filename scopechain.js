let globalVar = 'globalVar';
console.log(`Global Scope: ${globalVar}`);
const outerFun = () => {
    let outerVar = 'outerVar';
    console.log(`Outer function: ${globalVar}`);
    console.log(`Outer function: ${outerVar}`);
   
    // console.log(`Outer function: ${innerVar}`); //ReferenceError: innerVar is not defined
    const innerFun = () => {
        let innerVar = 'innerVar';
        console.log(`Inner function: ${globalVar}`);
        console.log(`Inner function: ${outerVar}`);
        console.log(`Inner function: ${innerVar}`);
    };
innerFun();
};
outerFun();
// innerFun(); //ReferenceError: innerFun is not defined (as it's inside outerFun())