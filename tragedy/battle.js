'use strict';

const _ = require('lodash');
const TIMES = 10000;

const PLAYER_NAMES = [
    'boyce',
    '_boyce',
    'miki',
    '_miki',
    'fan01',
    'roy',
];

const players = _.map(PLAYER_NAMES, n => ({
    name: n,
    fn: require('./player/' + n)
}));

const recordList = [];
const playerMap = {};

let total = players.length * 10;
let lastRecord = _.map(players, p=>({count: 0, name: p.name}));
_.times(TIMES, i => {
    const MAX_COUNT = parseInt((total*2)/players.length);
    lastRecord = _.map(players, player => {
        const count = player.fn(total, _.clone(lastRecord), _.clone(playerMap));
        const record = {
            name: player.name,
            count: Math.max(Math.min(parseInt(count), MAX_COUNT), 1)
        };

        playerMap[player.name] = (playerMap[player.name] || 0) + record.count;
        return record;
    });

    const sum = _.sum(_.map(lastRecord, 'count'));
    if(sum > total) {
        total -= Math.max(parseInt((sum-total)/10), 1);
    }

    if(total <= players.length) {
        console.log("都死了！", i);
        printResult(total, playerMap, i);
        throw "";
    }
    recordList.push(lastRecord);
});

printResult(total, playerMap, TIMES);

function printResult(total, playerMap, times) {
    console.log("草场:", total);
    console.log("总分:", _.sum(_.map(playerMap)));
    console.log("平均:", _.sum(_.map(playerMap))/players.length);
    console.log("每轮平均:", (_.sum(_.map(playerMap))/players.length)/TIMES);
    const results = _.chain(playerMap).map((v,k)=>[k, v]).sortBy(arr=>-arr[1]).value();
    _.each(results, r=> {
        console.log(r[0], r[1], r[1]/times);
    });
}

