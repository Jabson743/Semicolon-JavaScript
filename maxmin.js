function highestAndLowest (array) {
let max = array[0];
let min = array[0];
let MinAndMax = [];

   for(let count = 0; count < array.length; count++) {
        if (array[count] > max) {
          max = array[count];
        }

       if (array[count] < min) {
         min = array[count];
        }
     } 
	console.log("The highest number is: " + max);
        console.log("The lowest numbers is: " + min);
        //return MinAndMax;
    
}

console.log(highestAndLowest([2, 3, 6, 7, 8]));
 