'use strict';

module.exports = function (maxInfo, secondInfo, total, playerMap, index) {
    if(maxInfo.score < 50) {
        return maxInfo.score + 1;
    }else {
        return 0;
    }
};
