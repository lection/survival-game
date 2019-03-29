'use strict';
const _ = require('lodash');

module.exports = function (maxInfo, secondInfo, total, playerMap, index) {
    if (maxInfo.score < 100) {
        if (secondInfo.name === 'fan') {
            return 100;
        } else {
            return 0;
        }
    }
    return 1;
};
