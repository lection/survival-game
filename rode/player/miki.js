'use strict';

const _ = require('lodash');

module.exports = function (records) {
    if (records.length < 51) {
        return Math.random() > 0.5
    } else {
        const test = _.countBy(records, Boolean)
        const pre = test.true / records.length;
        if ( pre >= .5 && pre < 0.8 ) {
            return Math.random() < 0.7
        } else if ( pre >= 0.8 ) {
            return Math.random() < .1
        } else if ( pre >= 0.2 && pre < 0.5) {
            return Math.random() < 0.3
        } else {
            return false
        }
    }
};
