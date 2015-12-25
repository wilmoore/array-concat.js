'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var concat = require('./')

/*!
 * tests.
 */

var list1 = ['a', 'b']
var list2 = ['c', 'd']
var lists = [ ['b'], ['c'], ['d'] ]

/*!
 * tests.
 */

test('concat()', function (t) {
  t.deepEqual(concat(list1, list2), ['a', 'b', 'c', 'd'])
  t.deepEqual(lists.map(concat(['a'])), [['a', 'b'], ['a', 'c'], ['a', 'd']])
  t.end()
})
