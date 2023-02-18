const { isUnique, permutation, urlIfy, palPer, oneAway } = require("../examples.js")


// Test Q1

test("Check to see if the string is composed of unique values", () => {

    const arr = "abcdef123";
    const arr2 = "aassddr";

    expect(isUnique(arr)).toBe(true);
    expect(isUnique(arr2)).toBe(false);

});


// Test Q2

test("Check to see if the strings are permutations", () => {

    const string1 = "stop";
    const string2 = "pots";
    const string3 = "go";
    const string4 = "loop";


    expect(permutation(string1, string2)).toBe(true);
    expect(permutation(string1, string3)).toBe(false);
    expect(permutation(string1, string4)).toBe(false);

})


// Test Q3

test("replace empty spaces in string with %20" , () => {

    const string1 = "testing testing testing";
    const string2 = "testtesttest";

    expect(urlIfy(string1)).toBe("testing%20testing%20testing");
    expect(urlIfy(string2)).toBe("testtesttest");
})


// Starting here will check each option (true/false indivually)


// Test Q4 for True
test("check if a string given can be made into a permutation", () => {

    const string = "tacocat";

    expect(palPer(string)).toBe(true);

})

// Test Q4 for False

test("check if a string given can be made into a permutation", () => {

    const string = "nottacocat";

    expect(palPer(string)).toBe(false);

})

// Test Q5 for True

test("check to see if the strings are one change away from eachother", () => {

    const string1= "abc";
    const string2 = "abcd";

    expect(oneAway( string1, string2)).toBe(true);

})

// Test Q5 for False

test("check to see if the strings are one change away from eachother", () => {

    const string1= "abc";
    const string2 = "abcddd";

    expect(oneAway( string1, string2)).toBe(false);

})