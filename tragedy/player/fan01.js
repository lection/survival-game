'use strict';
const _ = require('lodash');

module.exports = function (total, records) {  
    if (total <= 5) return 1;
    const totalPeople = records.length;
    const avg =  Math.floor(total / (records.length)  * 2 / 5);
    const aboveAvgPeople = _.countBy(records, r => r >= avg);
    if (aboveAvgPeople * 2 > totalPeople) return Math.floor(avg) - 1;
    return Math.floor(avg) + 1;
};