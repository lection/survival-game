'use strict';
const _ = require('lodash');

let times = 0;
let minOtherTotal = null;
module.exports = function (maxInfo, secondInfo, total, playerMap, index) {
    if(index == 0) {
        times++;
    }
    const otherTotal = _.chain(playerMap)
        .filter((v, k) => {
            return k!='bob';
        })
        .map((v,k) => {
            return v;
        }).sum().value();

    const otherMax = _.chain(playerMap)
        .filter((v, k) => {
            return k!='bob';
        })
        .max().value();

    if(!minOtherTotal) {
        minOtherTotal = otherTotal;
    }
    if(secondInfo.name == 'bob' && maxInfo.score < 500 && total > 5000) {
        return maxInfo.score + 1;
    }
    if(maxInfo.score < 100 && total > 5000) {
        return maxInfo.score + 1;
    }
    if(otherMax < (total - 100)) {
        return maxInfo.score + 1;
    }

    if(otherTotal < total) {
        return maxInfo.score + 1;
    }
    return 1;
};