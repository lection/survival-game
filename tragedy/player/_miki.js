'use strict';

module.exports = function (total, lastRecords) {
    let players = lastRecords.length;
    if (players === 0) return 10;

    let overs = lastRecords.map(it => it.count > 10).reduce((a, b) => a+b, 0);
    let __overs__ = Math.floor(overs / players);

    let can = Math.floor(total / players);
    return (10 + __overs__) > can * 2 ? can * 2 : (10 + __overs__);
};
