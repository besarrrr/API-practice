const { isUnique, permutation, } = require("../examples.js")

test("Check to see if the string is composed of unique values", () => {

    const arr = "abcdef123";
    const arr2 = "aassddr";

    expect(isUnique(arr)).toBe(true);
    expect(isUnique(arr2)).toBe(false);

});

test("Check to see if the strings are permutations", () => {

    const string1 = "stop";
    const string2 = "pots";
    const string3 = "go";
    const string4 = "loop";


    expect(permutation(string1, string2)).toBe(true);
    expect(permutation(string1, string3)).toBe(false);
    expect(permutation(string1, string4)).toBe(false);

})