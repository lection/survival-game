'use strict';

const _ = require('lodash');

const OPTIONS = {
    fightTimes: 100,
    foeCount: 1,
};

function initPlayers(playerAmount, gamePath) {
    const players = [];
    _.each(playerAmount, (amount, name) => {
        const fn = require(`../${gamePath}/player/`+name);
        _.times(amount, ()=>{
            players.push({
                name,
                fn,
                score: 0
            });
        });
    });
    return players;
}

function fight(playFn, players, foeCount, options) {
    _.each(players, player => {
        let time = 0;
        while (time < foeCount) {
            const foe = _.sample(players);
            if(foe == player) {
                continue;
            }
            time++;
            const {playerScore, foeScore} = playFn(options, player.fn, foe.fn);
            player.score += playerScore;
            foe.score += foeScore;
        }
    });
}

function mock(playerAmount, options) {
    const {
        gamePath,
        fightTimes,
        foeCount,
    } = Object.assign(options, OPTIONS);

    const players = initPlayers(playerAmount, gamePath);
    const playFn = require(`../${gamePath}/play`);

    fight(playFn, players, foeCount, options);

    return _.chain(players).groupBy('name').map((list, name) => {
        return {
            name,
            score: _.sum(_.map(list, 'score'))
        }
    }).value();
};


module.exports = mock;
