'use strict';

const _ = require('lodash');
const TIMES = 10000;

const PLAYER_NAMES = [
    // 's1',
    // 's2',
    // 's3',
    'roy',
    'miki',
    'boyce',
    'bob',
    'fan',
];

let players = _.map(PLAYER_NAMES, n => ({
    name: n,
    fn: require('./player/' + n)
}));

const playerMap = {};
_.each(players, p=>{
    playerMap[p.name] = 10000;
});

_.times(TIMES, i => {
    let maxInfo = {score: 0};
    let secondInfo = {};

    let index = 0;
    while (true) {
        const player = players[index % players.length];
        if(player.name == maxInfo.name) {
            break;
        }
        const currentPlayerScore = playerMap[player.name];
        let payScore = parseInt(player.fn(_.clone(maxInfo), _.clone(secondInfo), currentPlayerScore, _.clone(playerMap), index) || 0);
        payScore = Math.min(currentPlayerScore, payScore);
        if(index == 0) {
            payScore = Math.max(1, payScore);
        }
        // if(players[0].name == 'fan') {
        //     console.log(player.name, payScore);
        // }

        if(payScore >= maxInfo.score) {
            secondInfo = maxInfo;
            maxInfo = {name: player.name, score: payScore};
        }

        index ++;
    }

    playerMap[maxInfo.name] += (100 - maxInfo.score);
    if(secondInfo.name) {
        playerMap[secondInfo.name] -= secondInfo.score;
    }else {
        // console.log('max', maxInfo);
        // console.log('second', secondInfo);
        // console.log('list', index, players, playerMap);
    }

    // console.log('##########################');
    players = _.filter(players, player => {
        if(playerMap[player.name] > 0) {
            return true;
        }else {
            console.log(player.name, '被淘汰', i);
            return false;
        }
    });
    players = _.shuffle(players);
});

function printResult() {
    const results = _.chain(playerMap).map((v,k)=>[k, v]).sortBy(arr=>-arr[1]).value();
    _.each(results, r=> {
        console.log(r[0], r[1]);
    });
}

console.log(playerMap);
printResult();