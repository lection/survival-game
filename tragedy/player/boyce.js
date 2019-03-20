'use strict';

module.exports = function (total, lastRecords) {
    let players = lastRecords.length;
    if (players === 0) return 10;
    return Math.floor(total / players) + 1;
};
