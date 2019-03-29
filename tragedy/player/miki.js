'use strict';

module.exports = function (total, lastRecords) {
    let players = lastRecords.length;
    if (players === 0) return 10;

    let avg = total/players;
    let overs = lastRecords.filter(it => it.count > avg).length;

    let can = Math.floor(total / players);
    return (avg + overs) > can * 2 ? can * 2 : (avg + overs);
};
