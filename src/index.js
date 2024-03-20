// use this if you want to test sth without running tests
"use strict"
const Randomizer = require('../src/Randomizer');
(function main() {
    let min = 1;
    let max = 5;
    let randomizer = new Randomizer(min, max);

    const randomNumber = randomizer.next();
    console.log(1, randomNumber)
    const randomNumbers = randomizer.sequence(2);
    console.log(2, randomNumbers)
    const randomNumbers2 = randomizer.sequence();
    console.log(3, randomNumbers2)
    const randomNumbers3 = randomizer.sequence(3);
    console.log(4, randomNumbers3)
    const randomNumbers4 = randomizer.sequence(4);
    console.log(5, randomNumbers4)
    const randomNumbers5 = randomizer.sequence(5);
    console.log(6, randomNumbers5)

})();