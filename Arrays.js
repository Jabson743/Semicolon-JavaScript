function ArrayTasks(number) {
   
   let countOfEven = 0;
   let countOfOdd = 0;

   for(let counter = 0; counter < number.length; counter++) {
        if(number[counter] % 2 == 0) {
        countOfEven++;
        } 
        else {
        countOfOdd++;
        }	
    }
      return countOfEven;
      return countOfOdd;
}
let result = ArrayTasks([2, 1, 5, 7, 8]);
console.log(result);