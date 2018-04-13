export const fizzBuzz = array => array.map(i => do {
	if((i % 3 === 0) && (i % 5 === 0)) "FizzBuzz";
	else if(i % 3 === 0 || String(i).includes("3")) "Fizz";
	else if(i % 5 === 0 || String(i).includes("5")) "Buzz";
	else i;
});