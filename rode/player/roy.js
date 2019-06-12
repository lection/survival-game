'use strict';

module.exports = function (records) {
    if (records.length > 0 && records.lastIndexOf(false) != -1) {
        return false;
    }
    return true;
};
