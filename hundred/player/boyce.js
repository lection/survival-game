'use strict';

module.exports = function (maxInfo, secondInfo, total, playerMap, index) {
    let { score: max_score, name: max_name } = maxInfo;
    let { score: sec_score, name: sec_name } = secondInfo;

    return max_score >= 101 ? sec_score - 1 : max_score + 1;
};

