'use strict';

const _ = require('lodash');

module.exports = function (total, lastRecord, playerMap) {
    const mean = _.mean(_.map(lastRecord, 'count'));
    if ( mean ) {
        return Math.max(total / lastRecord.length * 2 - mean, mean);
    }
    return 10;
};
