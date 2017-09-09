var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-pull');

describe('next/pull', function () {

  it('pull from pull array', function () {
    var array = [1, 2, 3, 1, 2, 3];

    nx.pull(array, 2, 3);


    assert.equal(array.length, 2);
    assert.deepEqual(array, [1,1]);
  });

});
