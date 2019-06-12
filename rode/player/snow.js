'use strict';
const _ = require('lodash');

module.exports = function (records) {
    if(records.length < 5) {
        return true;
    }
    const cm = _.countBy(records, r=>r);
    return Math.random() < (cm['true'] / records.length);
};
