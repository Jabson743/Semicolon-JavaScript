function sumEvenNumbers (numbers) {
	let sum = 0;
	
	for(let count = 0; count < numbers.length; count++) {
	    if(numbers[count] % 2 == 0) {
	    sum += numbers[count];
          } 
   }

	return sum;
}

function findMax (numbers) {
	let maxNumber = 0;

	for (let count = 0; count < numbers.length; count++) {
	    if (numbers[count] > maxNumber) {
		maxNumber = numbers[count];
	    }
        }
		return maxNumber;
}

function countOddNumbers (numbers) {
	let oddNumber = 0

	for (let count = 0; count < numbers.length; count++) {
	    if(numbers[count] % 2 == 1) {
              oddNumber += numbers[count];
	    }
	}
	      return oddNumber;
}

function isPrime (number) {
	if (number % number == 0 && number % 1 == number) {
	return true
	}
	else {
	return false
	}
}

function findFirstDuplicate (numbers) {
	let noDuplicate = -1;
	for (let count = 0; count < numbers.length; count++) {
            for (let counter = 0; counter < numbers[count - 1]; counter++){
                if (numbers[count] === numbers[counter]) {
                return numbers[count]
            }
           }
         }
            return noDuplicate;
}

function reverseArray (value) {
	let reverse = [];
	for (let count = value.length - 1; count >= 0; count--) {
	    reverse.push(value[count])
	}
           return reverse;
}

function factorial (number) {
	let factorial = 1;
	for(let index = 0; index < number; number--) {
	   factorial = factorial * number 
        }
	   return factorial;
}

function sumMultiplesOfThreeAndFive (number) {
	let multiple = 0;

	for (let index = 0; index < number/2; index++) {
	    multiple = number[index];
	}	
            return multiple;
}

console.log(sumMultiplesOfThreeAndFive(5));

module.exports = {sumEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate, reverseArray, factorial};
