const add = (num1) => {
    return (num2) => {
        return num1 + num2;
    };
};
console.log(add(2));