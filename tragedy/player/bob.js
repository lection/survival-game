'use strict';

module.exports = function (total, lastRecord) {
    const COUNT = (total/lastRecord.length);
    if(COUNT > 3) {
        return COUNT * 1.8;
    }else {
        return COUNT * 2/3;
    }
};
