'use strict';

const _ = require('lodash');
const TIMES = 200;

const GOOD = 3;
const SUCCESS = 5;
const SIMPLE = 0;
const BAD = -1;

const PLAYER_NAMES = [
    'sb',
    'bob',
    'beader',
    'cc',
    'big_sb',
    'good',
    'bad',
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
            const r1 = player.fn(foeResults, playerResults);
            const r2 = foe.fn(playerResults, foeResults);
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

console.log(['name', 'my score', 'foe score'].join('\t'));
console.log(
    _.chain(results).sortBy(p=>-p.playerAvg)
        .map(p=>[p.player.name, p.playerAvg.toFixed(2), p.foeAvg.toFixed(2)]
        .join('\t')).value().join('\n')
);

console.log('##############################################');
console.log(['name', 'max score', 'foe score'].join('\t'));
console.log(
    _.chain(results).sortBy(p=>-p.playerMax)
        .map(p=>[p.player.name, p.playerMax.toFixed(2), p.foeAvg.toFixed(2)]
            .join('\t')).value().join('\n')
);

console.log('##############################################');
_.each(results, result => {
    console.log(`### ${result.player.name} ###`);
    console.log(['name', 'avg score', 'foe score'].join('\t'));
    _.each(result.results, r=>{
        console.log([r.foe.name, r.playerScore, r.foeScore].join('\t'));
    });
});
