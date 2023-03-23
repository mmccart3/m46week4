function add(num1,num2) {
    return num1+num2;
};

function notNull () {
    return "something";
};

function truthy () {
    if (42) {
    return (true);
    } return (false);
};

function falsey () {
    if (0) {
    return (true);
    } return (false);
};

function checkProperties () {
    return myObj = {
        prop1:"hello",
        prop2:"world"
    }
}

function itemsLongerThan5 (myArray) {
    let newArray = [];
    for (let index = 0; index < myArray.length; index++) {
       if (myArray[index].length > 5) {
           newArray.push(myArray[index]);
       };
    }
    return newArray;
}

function convertaNumbertoaString (num) {
    return num.toString();
}

function planet(num) {
    let planetArray=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune" ];
    return planetArray[num-1];
    };

    function countStudents(presentArray) {
        let studentCount = 0;
        for (let index = 0; index < presentArray.length; index++) {
            if (presentArray[index]){
                studentCount = studentCount + 1;
            };
        }
        return studentCount;
        };

function squareDigi(num1) {
    let myString = num1.toString();
    let myArray = myString.split("");
    myArray = myArray.reverse();
    let placeValue = 1;
    let answer = 0;
    let tmp = 0;
    for (let index = 0; index < myArray.length; index++) {
        tmp = parseInt(myArray[index]);
        answer = answer + ((tmp*placeValue)*(tmp*placeValue));
        placeValue = placeValue * 10;
        };
    return answer;
}

function century(num) {
    return Math.floor(num/100);    
}


function binary2decimal(myBinaryArray) {
    myBinaryArray = myBinaryArray.reverse();
    let placeValue = 1;
    let answer = 0;
    let tmp = 0;
    for (let index = 0; index < myBinaryArray.length; index++) {
        tmp = Number(myBinaryArray[index]);
        answer = answer + (tmp*placeValue);
        placeValue = placeValue * 2;
        };
    return answer;
}

    
module.exports = {add, notNull, truthy, falsey, checkProperties, itemsLongerThan5,convertaNumbertoaString, planet, countStudents, squareDigi, century, binary2decimal};