'use strict';

module.exports = function (total, lastRecord) {
    const COUNT = (total/lastRecord.length);
    if(COUNT > 5) {
        return COUNT * 1.8;
    }else {
        return COUNT * 2/3;
    }
};
