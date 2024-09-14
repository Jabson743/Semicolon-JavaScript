const {sumEvenNumbers, findMax, countOddNumbers, isPrime, findFindDuplicate, reverseArray, factorial} = require("./Tasks.js");

test("sumEvenNumbers", () => {
	let addNumbers = [1, 2, 3, 4, 5];
	let result = sumEvenNumbers(addNumbers);
	expect(result).toBe(6);
})

test("findMax", () => {
	let highestNumber = [1, 2, 3, 4, 5];
	let result = findMax(highestNumber);
	expect(result).toBe(5);
})

test("countOddNumbers", () => {
	let odd = [1, 2, 3, 4, 5];
	let result = countOddNumbers(odd);
	expect(result).toBe(9);
})

test("isPrime", () => {
	let digit = 8;
	let result = isPrime(digit);
	expect(result).toBe(false)
})

test("findFirstDuplicate", () => {
	let dupNumbers = [1, 2, 3, 4, 4, 5, 6, 8, 9];
	let result = findFirstDuplicate(dupNumbers);
	expect(result).toBe(4);
})

test("reverseArray", () => {
	let arr = [1, 2, 3];
	let result = reverseArray(arr);
	expect(result).toBe([3, 2, 1]);
})

test("factorial", () => {
	let value = 5;
	let result = factorial(value);
	expect(result).toBe(120);
})

