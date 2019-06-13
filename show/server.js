'use strict';
const Koa = require('koa');
const Router = require('koa2-router');
const mock = require('./mock');

const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const app = new Koa();
const router = new Router({});

router.get('/', ctx => {
    ctx.body = fs.readFileSync(path.join(__dirname, 'index.html'), {encoding: 'utf-8'});
});

router.get('/love', ctx => {
    ctx.body = fs.readFileSync(path.join(__dirname, 'love.html'), {encoding: 'utf-8'});
});

router.get('/hello', ctx => {
    ctx.body = 'Hello world.';
});

router.get('/mock', ctx => {
    const _query = _.chain(ctx.query).map((v,k) => [k, parseInt(v)]).unzip().value();
    const playerAmount = _.zipObject(_query[0], _query[1]);
    // const result = mock(playerAmount, {
    //     gamePath: 'rode',
    //     fightTimes: 50,
    // });
    const result = mock(playerAmount, {
        gamePath: 'love_game',
        fightTimes: 1,
    });
    ctx.body = {data: result};
});

app.use(router);

app.listen(3600);
console.log('start 3600');
