'use strict';

const _ = require('lodash');

const GOOD = 3;
const SUCCESS = 5;
const SIMPLE = 0;
const BAD = -1;

function play(options, playerFn, foeFn) {
    const times = options.fightTimes;
    const playerResults = [];
    const foeResults = [];
    let playerScore = 0;
    let foeScore = 0;
    _.times(times, t => {
        const r1 = playerFn(foeResults, playerResults);
        const r2 = foeFn(playerResults, foeResults);
        playerResults.push(r1);
        foeResults.push(r2);
        if(r1) {
            if(r2) {
                playerScore += GOOD;
                foeScore += GOOD;
            }else {
                playerScore += SIMPLE;
                foeScore += SUCCESS;
            }
        }else {
            if(r2) {
                playerScore += SUCCESS;
                foeScore += SIMPLE;
            }else {
                playerScore += BAD;
                foeScore += BAD;
            }
        }
    });

    return {
        playerScore: playerScore,
        foeScore: foeScore,
    }
}

module.exports = play;
