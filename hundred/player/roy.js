'use strict';
const _ = require('lodash');

module.exports = function (maxInfo, secondInfo, total, playerMap, index) {
    var count = 0
    var max = 0
    const keys = Object.keys(playerMap)
    keys.forEach( el => {
        if (el != 'roy')  max = Math.max(max, playerMap[el])
        if (playerMap[el]) count += 1
    })
    if (count > 3) {
        return 1
    }
    if (count > 2 && max < 10000) {
        return 1
    }
    return maxInfo.score + 1
};
