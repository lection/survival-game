'use strict';

const _ = require('lodash');
const TIMES = 100;

const PLAYER_NAMES = [
    'sb',
    // 's1',
    // 's2',
    // 'bad',
    'roy'
];

const players = _.map(PLAYER_NAMES, n => ({
    name: n,
    fn: require('./player/' + n)
}));

const recordList = [];
const playerMap = {};

let total = players.length * 10;
let lastRecord = [];
_.times(TIMES, i => {
    lastRecord = _.map(players, player => {
        const record = {
            name: player.name,
            count: Math.min(parseInt(
                player.fn(total, _.clone(lastRecord), _.clone(playerMap))
            ), parseInt((total*2)/players.length))
        };

        playerMap[player.name] = (playerMap[player.name] || 0) + record.count;
        return record;
    });

    const sum = _.sum(_.map(lastRecord, 'count'));
    if(sum > total) {
        total -= Math.max(parseInt((sum-total)/10), 1);
    }

    if(total <= players.length) {
        console.log("都死了！", i, playerMap);
        throw "";
    }
    recordList.push(lastRecord);
});

console.log(playerMap);

