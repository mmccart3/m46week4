const app = require("../app.js");
test("should equal 5 when passed 2 and 3", ( ) => {
    expect(app.add(2,3)).toBe(5);
});

test("not null", ( ) => {
    expect(app.notNull()).not.toBe(null);
});

test("is something truthy", ( ) => {
    expect(app.truthy()).toBe(true);
});

test("is something falsey", ( ) => {
    expect(app.falsey()).toBe(false);
});

test("do the properties match up", ( ) => {
    let testObj = {prop1:"hello",prop2:"world"};
    expect(app.checkProperties()).toEqual(testObj);
});

test("tests whether each item is more than 5 characters long", ( ) => {
    let inputArray = ["123456", "ABC", "QWERTY"];
    let resultArray = ["123456", "QWERTY"];
    expect(app.itemsLongerThan5(inputArray)).toEqual(resultArray);
});

test("tests whether converts number to a string", ( ) => {
    let inputNum = 3.14159;
    let resultString = "3.14159";
    expect(app.convertaNumbertoaString(inputNum)).toEqual(resultString);
});

describe("tests whether planet returns the planets in correct order", ( ) => {
    test("planet 1", ( ) => {
        expect(app.planet(1)).toBe("Mercury")
    });
    test("planet 2", ( ) => {
        expect(app.planet(2)).toBe("Venus")
    });
    test("planet 3", ( ) => {
        expect(app.planet(3)).toBe("Earth")
    });  
    test("planet 4", ( ) => {
        expect(app.planet(4)).toBe("Mars")
    });  
    test("planet 5", ( ) => {
        expect(app.planet(5)).toBe("Jupiter")
    });  
    test("planet 6", ( ) => {
        expect(app.planet(6)).toBe("Saturn")
    });  
    test("planet 7", ( ) => {
        expect(app.planet(7)).toBe("Uranus")
    });  
    test("planet 8", ( ) => {
        expect(app.planet(8)).toBe("Neptune")
    });    
});


test("tests if countStudents works", ( ) => {
    let testArray = [true, true, true, false, true];
    expect(app.countStudents(testArray)).toEqual(4);
});

test("tests if squareDigi squares digits", ( ) => {
    let testInput = 34;
    expect(app.squareDigi(testInput)).toEqual(916);
});

test("tests if century returns the century of a number", ( ) => {
    let testInput = 1415;
    expect(app.century(testInput)).toEqual(14);
});

test("tests if binary2decimal works", ( ) => {
    let testArray = ["1", "0", "1", "0", "1"];
    expect(app.binary2decimal(testArray)).toEqual(21);
});
