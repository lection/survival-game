'use strict';

const _ = require('lodash');

function play(options, playerFn, foeFn) {

    _.assign(options, {
        dateScore: 2,
        sexScore: 7,
        abortScore: 100,
        marriedLimitScore: 150,
        marriedScore: 150,
    });

    if(playerFn.gender == foeFn.gender) {
        // console.log('暂不支持同性交友');
        return { playerScore: 0, foeScore: 0 };
    }

    playerFn.score = foeFn.score = 0;
    const [male, female] = playerFn.gender == 'male' ? [playerFn, foeFn]:[foeFn, playerFn];
    step1(male, female) && step2(male, female, options) && step3(male, female, options);
    return { playerScore: playerFn.score, foeScore: foeFn.score }
}

function step1(male, female) {
    const records = female.recordList1 = [];
    for(let i=0;i<200;i++) {
        const score =parseInt(female.step1(records));
        if(!score) {
            // console.log('step1', i, '到手');
            return true;
        }
        //@TODO 讨论 追求的时候女的是不是占便宜
        if(male.step1(score, records)) {
            male.score -= score * 2;
            female.score += score;
            // console.log('step1', i, '同意', score);
        }else {
            // console.log('step1', i, '拒绝');
            return false;
        }
        records.push(score);
    }
    // console.log('step1', 200, '超时');
    return false;
}

function step2(male, female, {dateScore, sexScore, abortScore}) {
    // console.log('step1', '完成', male.score, female.score);
    const records = female.recordList2 = [];
    for(let i=0;i<10;i++) {
        const action = male.step2(records) == 1 ? 1 : 2;
        // console.log('step2', i, action);
        if(female.step2(action, records)) {
            //2016年结婚 1143万 流产平均每年1300万 平均每人结婚前交往5次
            if(action == 2 && Math.random() <= 0.1) {
                // console.log('step2', i, '意外怀孕');
                if(male.step0(records)) {
                    // console.log('step2', i, '奉子成婚');
                    return true;
                }else {
                    // console.log('step2', i, '无痛人流');
                    female.score -= abortScore;
                    return false;
                }
            }
            records.push(action);
            male.score += action == 1 ? dateScore : sexScore;
            female.score += dateScore;
        }else {
            // console.log('step2', i, '拒绝');
            return false;
        }
    }
    return true;
}

function step3(male, female, {marriedLimitScore, marriedScore}) {
    // console.log('step2', '完成', male.score, female.score);
    let total = 0;
    let maleRecords = [];
    let femaleRecords = [];
    _.times(10, time => {
        const ms = Math.max(Math.ceil(male.step3(10 - time, marriedLimitScore - total, femaleRecords)), 0);
        const fs = Math.max(Math.ceil(female.step3(10 - time, marriedLimitScore - total, maleRecords)), 0);
        // console.log('step3', time, ms, fs);
        total += ms;
        total += fs;
        male.score -= ms;
        female.score -= fs;
        maleRecords.push(ms);
        femaleRecords.push(fs);
    });
    if(total >= marriedLimitScore) {
        // console.log('step3', '成功', total);
        male.score += marriedScore;
        female.score += marriedScore;
    }
    // console.log('step3', '完成', male.score, female.score);
}

module.exports = play;
