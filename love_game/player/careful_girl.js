'use strict';

/*
    records 女方提出分数的历史记录 不包括本次
 */
function step1(records) {
    if(records.length > 5) {
        return 0;
    }
    return 3;
}

/*
    records 历史行为记录
    1 约会
    2 约炮
 */
function step2(action, records) {
    return action == 1;
}

/*
    time 剩余次数
    gap 差的分数
    records 对方历史出分记录
 */
function step3(time, gap, records) {
    return (gap/time)/2;
}

module.exports = {
    gender: 'female',
    step1,
    step2,
    step3,
};
