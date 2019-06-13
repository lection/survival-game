'use strict';
const _ = require('lodash');

module.exports = function (total, records) {
    if (total <= 5) return 1;
    const players = records.length;
    const avg = Math.floor(total / players);
    const aboveAvgPlayers = _.filter(records, r => r >= avg).length;
    return Math.floor(avg * 2) + aboveAvgPlayers;
};