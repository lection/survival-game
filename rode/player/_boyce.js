'use strict';

/**
 *
 1. 都合作：都加3分。
 2. 我背叛：加5分。
 3. 被背叛：我0分。
 4. 都背叛：都减1分。

 11： 3  => 3  =>  0
 01： 5  => 0  =>  5
 10： 0  => 5  =>  -5
 00： -1 => -1 => -1

 1 => 3: 8
 0 => 4: -1
 * @param records
 * @returns {boolean}
 */
module.exports = function (records) {
    let length = records.length;
    if (!length) return false;

    let nihao = records.filter(it => it).length;
    let nihao_probability = (nihao / length).toFixed(2);

    return nihao_probability < (3/7).toFixed(2);
};
