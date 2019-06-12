'use strict';

const play = require('./play');
const goodBoy = require('./player/good_boy');
const badBoy = require('./player/bad_boy');
const sbBoy = require('./player/sb_boy');
const carefulGirl = require('./player/careful_girl');
const romanticGirl = require('./player/romantic_girl');

const r1 = play({}, goodBoy, carefulGirl);
const r2 = play({}, goodBoy, romanticGirl);
const r3 = play({}, badBoy, carefulGirl);
const r4 = play({}, badBoy, romanticGirl);
const r5 = play({}, sbBoy, carefulGirl);
const r6 = play({}, sbBoy, romanticGirl);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
console.log(r6);
