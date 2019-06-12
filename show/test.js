'use strict';

const _ = require('lodash');
const mock = require('./mock');

const results = mock({
    good: 100,
    bad: 200,
    bob: 20,
}, {
    gamePath: 'rode'
});

const resultMap = _.keyBy(results, 'name');
const totalScore = _.sumBy(results, 'score');

console.log(totalScore);
console.log(results);
console.log(resultMap.good.score/100, 100/320, resultMap.good.score/totalScore);
console.log(resultMap.bad.score/200, 200/320, resultMap.bad.score/totalScore);
console.log(resultMap.bob.score/20, 20/320, resultMap.bob.score/totalScore);
