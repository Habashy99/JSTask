class Randomizer {

  constructor(min, max) {
    this.min = min;
    this.max = max;
    const range = Array.from(Array(max - min), (_, index) => index + min);
    this.selectionPool = range.sort(() => Math.random() - 0.5);
  }

  // this class method should return a random number 
  // from this instance's selectionPool without replacement
  // It should also throw an error if there are no more elements to return
  next() {
    if (this.max !== this.min) {
      let randomNumber = this.selectionPool[Math.floor(Math.random() * this.selectionPool.length)];
      return randomNumber

    } else {
      throw new Error('there are no more elements to return!');
    }
  }

  // this class method should return an array of random numbers from this instance's
  // selectionPool without replacement, if {length} isn't passed, the function
  // should return all remaining elements randomly-ordered
  // It should throw an error if no more elements remain in its selectionPool
  // and if num is greater than number of remaining elements
  sequence(length) {
    if (length > this.selectionPool.length || this.max === this.min) {
      throw new Error('there are no more elements to return!');
    }

    if (length == undefined) {
      return this.selectionPool
    }

    let randomNumbers = []
    for (let i = 0; i < length; i++) {
      let num = this.selectionPool[Math.floor(Math.random() * this.selectionPool.length)]
      randomNumbers.push(num);
    }

    return randomNumbers
  }
}

module.exports = Randomizer;