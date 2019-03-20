'use strict';

module.exports = function (records) {
    const falseArray = records.filter(x => x == false);
    const falseCounts = falseArray.length
    const trueCounts = records.length - falseCounts;
    if (trueCounts / falseCounts > 1) {
       return true;
    }
    return false; 
};
