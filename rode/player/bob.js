'use strict';
const _ = require('lodash');

module.exports = function (records, myRecords) {
    if(records.length == 0) {
        return true;
    }
    return records[records.length - 1];
};
