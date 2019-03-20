'use strict';

module.exports = function (total, lastRecord) {
    if((total/lastRecord.length) > 6) {
        return 20;
    }else {
        return parseInt((total/2)/lastRecord.length);
    }
};
