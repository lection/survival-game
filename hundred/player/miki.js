'use strict';

module.exports = function (maxInfo, secondInfo, total, playerMap, index) {
    if(maxInfo.score < 110) {
        return maxInfo.score + 1;
    }
    return 0;
};
