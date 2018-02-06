var test = require('tape')
var vec3 = require('../')
var EPSILON = 0.000001

test('add', function (t) {
  var result = vec3.add([], [0, 1, 2], [3, 4, 5])
  t.deepEqual(result, [3, 5, 7])
  t.end()
})

test('angle', function (t) {
  var result = vec3.angle([3, 4, 5], [6, 7, 8])
  t.ok(Math.abs(0.08523986989116927 - result) < EPSILON)
  t.end()
})

test('clone', function (t) {
  var result = vec3.clone([5, 6, 7])
  t.deepEqual(result, [5, 6, 7])
  t.end()
})

test('copy', function (t) {
  var result = vec3.copy([], [5, 6, 7])
  t.deepEqual(result, [5, 6, 7])
  t.end()
})

test('create', function (t) {
  var result = vec3.create()
  t.deepEqual(result, [0, 0, 0])
  t.end()
})

test('cross', function (t) {
  var result = vec3.cross([], [3, 4, 5], [6, 7, 8])
  t.deepEqual(result, [-3, 6, -3])
  t.end()
})

test('distance', function (t) {
  var result = vec3.distance([1, 2, 3], [4, 6, 7])
  t.ok(Math.abs(result - 6.4031242374328485) < EPSILON)
  t.end()
})

test('divide', function (t) {
  var result = vec3.divide([], [8, 4, 2], [2, 1, 0.5])
  t.deepEqual(result, [4, 4, 4])
  t.end()
})

test('div', function (t) {
  var result = vec3.div([], [8, 4, 2], [2, 1, 0.5])
  t.deepEqual(result, [4, 4, 4])
  t.end()
})

test('dot', function (t) {
  var result = vec3.dot([3, 4, 5], [6, 7, 8])
  t.deepEqual(result, 86)
  t.end()
})

test('forEach', function (t) {
  var a = [null,
    0, 1, 2, null,
    3, 4, 5, null
  ]

  function addConstant (out, a, val) {
    out[0] = a[0] + val
    out[1] = a[1] + val
    out[2] = a[2] + val
    return out
  }

  vec3.forEach(a, 4, 1, 2, addConstant, 7)

  t.deepEqual(a, [null, 7, 8, 9, null, 10, 11, 12, null])
  t.end()
})

test('fromValues', function (t) {
  var result = vec3.fromValues(2, 3, 4)
  t.deepEqual(result, [2, 3, 4])
  t.end()
})

test('inverse', function (t) {
  var result = vec3.inverse([], [2, 4, 8])
  t.deepEqual(result, [0.5, 0.25, 0.125])
  t.end()
})

test('length', function (t) {
  var result = vec3.length([3, 4, 5])
  t.ok(Math.abs(result - 7.0710678118654755) < EPSILON)
  t.end()
})

test('len', function (t) {
  var result = vec3.len([3, 4, 5])
  t.ok(Math.abs(result - 7.0710678118654755) < EPSILON)
  t.end()
})

test('lerp', function (t) {
  var result = vec3.lerp([], [3, 4, 5], [6, 7, 8], 0.25)
  t.deepEqual(result, [3.75, 4.75, 5.75])
  t.end()
})

test('max', function (t) {
  var result = vec3.max([], [3, 7, 2], [5, 6, 4])
  t.deepEqual(result, [5, 7, 4])
  t.end()
})

test('min', function (t) {
  var result = vec3.min([], [3, 7, 8], [5, 6, 2])
  t.deepEqual(result, [3, 6, 2])
  t.end()
})

test('multiply', function (t) {
  var result = vec3.multiply([], [3, 4, 5], [6, 7, 8])
  t.deepEqual(result, [18, 28, 40])
  t.end()
})

test('mul', function (t) {
  var result = vec3.mul([], [3, 4, 5], [6, 7, 8])
  t.deepEqual(result, [18, 28, 40])
  t.end()
})

test('negate', function (t) {
  var result = vec3.negate([], [3, 4, 5])
  t.deepEqual(result, [-3, -4, -5])
  t.end()
})

test('normalize', function (t) {
  var result = vec3.normalize([], [3, 4, 5])
  t.ok(Math.abs(result[0] - 0.4242640687119285) < EPSILON)
  t.ok(Math.abs(result[1] - 0.565685424949238) < EPSILON)
  t.ok(Math.abs(result[2] - 0.7071067811865475) < EPSILON)
  t.end()
})

test('random', function (t) {
  var result = vec3.random([], 5)
  for (var i = 0; i < 10; i++) {
    var len = Math.sqrt(result[0] * result[0] + result[1] * result[1] + result[2] * result[2])
    t.ok(Math.abs(5 - len) <= EPSILON)
  }
  t.end()
})

test('rotateX', function (t) {
  var result = vec3.rotateX([], [3, 4, 5], [6, 7, 8], Math.PI)
  t.deepEqual(result, [3, 10, 11])
  t.end()
})

test('rotateY', function (t) {
  var result = vec3.rotateY([], [3, 4, 5], [6, 7, 8], Math.PI)
  t.deepEqual(result, [9, 4, 11])
  t.end()
})

test('rotateZ', function (t) {
  var result = vec3.rotateZ([], [3, 4, 5], [6, 7, 8], Math.PI)
  t.deepEqual(result, [9, 10, 5])
  t.end()
})

test('scale', function (t) {
  var result = vec3.scale([], [3, 4, 5], 2)
  t.deepEqual(result, [6, 8, 10])
  t.end()
})

test('scaleAndAdd', function (t) {
  var result = vec3.scaleAndAdd([], [3, 4, 5], [6, 7, 8], 2)
  t.deepEqual(result, [15, 18, 21])
  t.end()
})

test('set', function (t) {
  var result = vec3.set([], 3, 4, 5)
  t.deepEqual(result, [3, 4, 5])
  t.end()
})

test('squaredDistance', function (t) {
  var result = vec3.squaredDistance([3, 4, 5], [6, 7, 8])
  t.deepEqual(result, 27)
  t.end()
})

test('sqrDist', function (t) {
  var result = vec3.sqrDist([3, 4, 5], [6, 7, 8])
  t.deepEqual(result, 27)
  t.end()
})

test('squaredLength', function (t) {
  var result = vec3.squaredLength([3, 4, 5])
  t.deepEqual(result, 50)
  t.end()
})

test('sqrLen', function (t) {
  var result = vec3.sqrLen([3, 4, 5])
  t.deepEqual(result, 50)
  t.end()
})

test('subtract', function (t) {
  var result = vec3.subtract([], [3, 4, 5], [6, 7, 8])
  t.deepEqual(result, [-3, -3, -3])
  t.end()
})

test('sub', function (t) {
  var result = vec3.subtract([], [3, 4, 5], [6, 7, 8])
  t.deepEqual(result, [-3, -3, -3])
  t.end()
})

test('transformMat3', function (t) {
  var result = vec3.transformMat3([], [3, 4, 5], [
    5, 6, 7,
    8, 9, 10,
    11, 12, 13
  ])
  t.deepEqual(result, [102, 114, 126])
  t.end()
})

test('transformMat4', function (t) {
  var result = vec3.transformMat4([], [3, 4, 5], [
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16,
    17, 18, 19, 20
  ])
  t.ok(Math.abs(0.7732558139534884 - result[0]) < EPSILON)
  t.ok(Math.abs(0.8488372093023255 - result[1]) < EPSILON)
  t.ok(Math.abs(0.9244186046511628 - result[2]) < EPSILON)
  t.end()
})

test('transformQuat', function (t) {
  var result = vec3.transformQuat([], [3, 4, 5], [6, 7, 8, 9])
  t.deepEqual(result, [882, 824, 1090])
  t.end()
})
