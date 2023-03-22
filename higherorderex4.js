const add = (num1) => {
    return (num2) => {
        console.log(num1);
        console.log(num2);
        return num1 + num2;
    };
};
console.log(add(2)(1));