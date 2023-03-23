const testapp = require("../higherorderex4");

test("should equal 5 when passed 2 and 3",()=>{
    expect(testapp.add(2)(3)).toBe(5);
})