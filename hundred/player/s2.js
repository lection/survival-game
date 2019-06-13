'use strict';

module.exports = function (maxInfo, secondInfo, total, playerMap, index) {
    if(Math.random() > 0.5) {
        return maxInfo.score + 1;
    }else {
        return 0;
    }
};
