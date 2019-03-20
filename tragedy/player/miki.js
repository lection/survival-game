'use strict';

module.exports = function (total, lastRecords) {
    let players = lastRecords.length;
    if (players === 0) return 10;

    let overs = lastRecords.filter(it => it.count > (total/players)).length;

    let can = Math.floor(total / players);
    return (10 + overs) > can * 2 ? can * 2 : (10 + overs);
};
