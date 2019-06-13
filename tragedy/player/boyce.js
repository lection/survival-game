'use strict';

module.exports = function (total, lastRecords) {
    let players = lastRecords.length;
    if (players === 0) return 10;

    let can = Math.floor(total / players);
    return can + can * 0.5;
};
