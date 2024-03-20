# JavaScript Task

This program is meant to be used to generate a random sequence of numbers
The Randomizer(min, max) constructor creates a randomized array of numbers all in range [min,max)
The next() method should return the next random number
The sequence(length) method should return an array of length {length} of random numbers. 
If no {length} is specified, the method should return all remaining random numbers instead.

### For example:
``` javascript
  const randomizer = new Randomizer(1,6);
  randomizer.next(); // should return any number gte 1 and lt 6, e.g. 1
  randomizer.sequence(2); // should return any two numbers gte 1 and lt 6, except 1, e.g. [4, 3]
  randomizer.sequence(); // should return the remaining numbers, i.e. [2, 5]
```

As of now, Randomizer's class methods have no implementation. Your task is to implement them
in a way that fulfils all requirements. Your solution should also adhere to the following:

- calling next() or sequence() should throw an error if no more numbers remain
- calling sequence(length), with length is greater than the number of numbers remaining, should also throw an error

## How to know your solution works

If you run `npm test` before starting with your implementation, you'll notice that all tests fail.
As you start implementing the aforementioned requirements, your code should start passing some.
Your final implementation should pass all of them.

## If you want to run some code yourself (outside of tests)

- Use main() in src/index.js or optionally write your own tests