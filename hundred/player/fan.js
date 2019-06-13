'use strict';
const _ = require('lodash');

module.exports = function (maxInfo, secondInfo, total, playerMap, index) {
    if (secondInfo.name === 'fan') {
        return Math.floor(maxInfo.score + 1);
    } else {
        if (secondInfo.score * 1.5 > maxInfo.score) return 1;
        return Math.floor(secondInfo.score * 1.5);
    }
};