'use strict';
const _ = require('lodash');

module.exports = function (records, myRecords) {
    if(records.length < 10) {
        return true;
    }
    const cm = _.countBy(records, r=>r);
    return cm['true'] > cm['false'];
};
