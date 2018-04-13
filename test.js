import assert from 'assert';
import { fizzBuzz } from './index'

describe('FizzBuzz', () => {
	it('3 debe arrojar "Fizz"', () => {
		assert.deepEqual(fizzBuzz([3]), ["Fizz"]);
	});
	it('5 debe arrojar "Buzz"', () => {
		assert.deepEqual(fizzBuzz([5]), ["Buzz"]);
	});
	it('15 debe arrojar "FizzBuzz"', () => {
		assert.deepEqual(fizzBuzz([15]), ["FizzBuzz"]);
	});
})