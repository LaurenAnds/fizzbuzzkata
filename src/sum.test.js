import { generateFizzbuzz } from "./sum.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("test n = 3 ", () => {
    expect(generateFizzbuzz(3)).toEqual([1, 2, "Fizz"]);
});

test("test n = 5 ", () => {
    expect(generateFizzbuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
});

test("test n = 15 ", () => {
    expect(generateFizzbuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
});

test("test n = 0 ", () => {
    expect(generateFizzbuzz(0)).toEqual([]);
});