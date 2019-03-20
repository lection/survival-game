'use strict';

const _ = require('lodash');
const TIMES = 5000;

const PLAYER_NAMES = [
    'sb',
    'big_sb',
    'good',
    'bad',
    'roy',
    'miki'
];

const players = _.map(PLAYER_NAMES, n => ({
    name: n,
    fn: require('./player/' + n)
}));

const results = _.map(players, player=> {
    const playerResults = _.map(players, foe => {
        const playerResults = [];
        const foeResults = [];
        let playerScore = 0;
        let foeScore = 0;
        _.times(TIMES, t => {
            const r1 = player.fn(foeResults);
            const r2 = foe.fn(playerResults);
            playerResults.push(r1);
            foeResults.push(r2);
            if(r1) {
                if(r2) {
                    playerScore += 3;
                    foeScore += 3;
                }else {
                    playerScore += 0;
                    foeScore += 5;
                }
            }else {
                if(r2) {
                    playerScore += 5;
                    foeScore += 0;
                }else {
                    playerScore += -1;
                    foeScore += -1;
                }
            }
        });
        return {
            foe: foe,
            playerScore: playerScore/TIMES,
            foeScore: foeScore/TIMES
        }
    });

    const playerMaxFoe = _.chain(playerResults).maxBy(r=>r.playerScore).value();
    const foeMaxFoe = _.chain(playerResults).maxBy(r=>r.foeScore).value();

    return {
        player: player,
        results: playerResults,
        playerAvg: _.chain(playerResults).map('playerScore').sum().value()/players.length,
        foeAvg: _.chain(playerResults).map('foeScore').sum().value()/players.length,
        playerMax: playerMaxFoe.playerScore,
        playerMaxFoe: playerMaxFoe.foe.name,
        foeMax: foeMaxFoe.playerScore,
        foeMaxFoe: foeMaxFoe.foe.name,
    }
});

console.log(['name', 'score', 'foe score'].join('\t'));
console.log(
    _.chain(results).sortBy(p=>-p.playerAvg)
        .map(p=>[p.player.name, p.playerAvg.toFixed(2), p.foeAvg.toFixed(2)]
        .join('\t')).value().join('\n')
);
