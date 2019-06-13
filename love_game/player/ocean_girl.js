'use strict';
const _ = require('lodash');
/*
    records 女方提出分数的历史记录 不包括本次
 */
function step1(records) {
    if (records.length == 1) {
        return 10
    }
    if (records.length == 2) {
        return 20
    }
    return 0;
}

/*
    records 历史行为记录
    1 约会
    2 约炮
 */
function step2(action, records) {
    let ac2 = _.countBy(action);
    if (ac2['2'] > 2) {
        return false;
    }
    if (records.length < 7 && action == 2) {
        return false;
    }
    return true;
}

/*
    time 剩余次数
    gap 差的分数
    records 对方历史出分记录
 */
function step3(time, gap, records) {
    return (gap/time)*2/3;
}

module.exports = {
    gender: 'female',
    step1,
    step2,
    step3,
};
