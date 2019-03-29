'use strict';

const _ = require('lodash');

module.exports = function (total, lastRecord, playerMap) {
    const mean = _.mean(_.map(lastRecord, 'count'));
    const sum = _.sum(_.map(lastRecord, 'count'));
    if ( mean ) {
        console.log(total, sum, total - mean * lastRecord.length, mean);
        return Math.max(total - mean * lastRecord.length, mean);
    }
    return 10;
};
