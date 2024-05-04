// import _uniq from 'lodash/uniq';


const _ = require('lodash');

let numbers = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10];

let uniqueNumbers = _.uniq(numbers);

console.log(uniqueNumbers);

