'use strict';

/*
    score 女方提出的分数
    records 女方提出分数的历史记录 不包括本次
 */
function step1(score, records) {
    if (score < 60) {
        return true;
    }
}

/*
    records 历史行为记录
    1 约会
    2 约炮
 */
function step2(records) {
    if (records.length < 8) {
        return 1;
    }
    else {
        return Math.round(Math.random()) + 1;
    }
}

/*
    time 剩余次数
    gap 差的分数
    records 对方历史出分记录
 */
function step3(time, gap, records) {
    return gap/time*2/3;
}

function step0() {
    return true;
}

module.exports = {
    gender: 'male',
    step1,
    step2,
    step3,
    step0,
};
