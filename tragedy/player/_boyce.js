'use strict';

module.exports = function (total, lastRecords) {
    let players = lastRecords.length;
    if (players === 0) return 10;

    let counts = lastRecords.map(it => it.count);
    let lastCount = counts.reduce((a, b) => a + b, 0);

    let lastTotal = lastCount > total
        ? Math.floor((total * 10 + lastCount ) / 9)
        : total;

    let can = Math.floor(total / players);
    let lastAvg = Math.ceil(lastCount / players);
    let lastCan = Math.floor(lastTotal / players);

    return lastCan - lastAvg + can + 1;
};
