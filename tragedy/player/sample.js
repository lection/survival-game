'use strict';

module.exports = function (total, lastRecord, playerMap) {
    return parseInt(total/lastRecord.length);
};
