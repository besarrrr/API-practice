const { isUnique } = require("../examples.js")

test("Check to see if the string is composed of unique values", () => {

    const arr = "abcdef123";
    const arr2 = "aassddr";

    expect(isUnique(arr)).toBe(true);
    expect(isUnique(arr2)).toBe(false);

    
});