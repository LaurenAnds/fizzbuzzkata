/** Takes a number N and returns an array containing the numbers from 1 to N, with the following exceptions: multiples of 3 return "Fizz", 5 return "Buzz", 3&5 return "FizzBuzz"

 * @param {number} n
 * @returns {any[]} - an array
 */

const generateFizzbuzz = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else result.push(i);
  }
  return result;
};

const total = generateFizzbuzz(15);
console.log("our result is ", total);

export { generateFizzbuzz };
