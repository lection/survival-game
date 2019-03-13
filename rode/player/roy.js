'use strict';

module.exports = function (records) {
    if (records.lastIndexOf(false) != -1) {
        return false;
    }
    return true;
};
