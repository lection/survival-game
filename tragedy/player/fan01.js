'use strict';
const _ = require('lodash');

module.exports = function (total, records) {
    if (total <= 5) return 1;
    const max = Math.floor(_.maxBy(records, 'count').count);
    const min = Math.floor(_.minBy(records, 'count').count);
    const half = Math.ceil((max - min) / 2);
    const avg = _.meanBy(records, 'count');
    return avg + half;
};