# gl-vec3

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Part of a fork of [@toji](http://github.com/toji)'s
[gl-matrix](http://github.com/toji/gl-matrix) split into smaller pieces: this
package contains `glMatrix.vec3`.

## Usage

[![NPM](https://nodei.co/npm/gl-vec3.png)](https://nodei.co/npm/gl-vec3/)

### `vec3 = require('gl-vec3')`

Will load all of the module's functionality and expose it on a single
object. Note that any of the methods may also be required directly
from their files.

For example, the following are equivalent:

``` javascript
var scale = require('gl-vec3').scale
var scale = require('gl-vec3/scale')
```

## API

  - [add()](#addoutvec3avec3bvec3)
  - [angle()](#angleavec3bvec3)
  - [clone()](#cloneavec3)
  - [ceil()](#ceiloutvec3-avec3)
  - [copy()](#copyoutvec3avec3)
  - [create()](#create)
  - [cross()](#crossoutvec3avec3bvec3)
  - [distance()](#distanceavec3bvec3)
  - [dist()](#distanceavec3bvec3)
  - [divide()](#divideoutvec3avec3bvec3)
  - [div()](#divideoutvec3avec3bvec3)
  - [dot()](#dotavec3bvec3)
  - [equals()](#equalsavec3-bvec3)
  - [exactEquals()](#exactequalsavec3-bvec3)
  - [floor()](#flooroutvec3-avec3)
  - [forEach()](#foreachaarraystridenumberoffsetnumbercountnumberfnfunctionargobject)
  - [fromValues()](#fromvaluesxnumberynumberznumber)
  - [inverse()](#inverseoutvec3avec3)
  - [length()](#lengthavec3)
  - [len()](#lengthavec3)
  - [lerp()](#lerpoutvec3avec3bvec3tnumber)
  - [max()](#maxoutvec3avec3bvec3)
  - [min()](#minoutvec3avec3bvec3)
  - [multiply()](#multiplyoutvec3avec3bvec3)
  - [mul()](#multiplyoutvec3avec3bvec3)
  - [negate()](#negateoutvec3avec3)
  - [normalize()](#normalizeoutvec3avec3)
  - [random()](#randomoutvec3scalenumber)
  - [rotateX()](#rotatexoutvec3avec3bvec3cnumber)
  - [rotateY()](#rotateyoutvec3avec3bvec3cnumber)
  - [rotateZ()](#rotatezoutvec3avec3bvec3cnumber)
  - [round()](#roundoutvec3-avec3)
  - [scale()](#scaleoutvec3avec3bnumber)
  - [scaleAndAdd()](#scaleandaddoutvec3avec3bvec3scalenumber)
  - [set()](#setoutvec3xnumberynumberznumber)
  - [squaredDistance()](#squareddistanceavec3bvec3)
  - [sqrDist()](#squareddistanceavec3bvec3)
  - [squaredLength()](#squaredlengthavec3)
  - [sqrLen()](#squaredlengthavec3)
  - [subtract()](#subtractoutvec3avec3bvec3)
  - [sub()](#subtractoutvec3avec3bvec3)
  - [transformMat3()](#transformmat3outvec3avec3mmat4)
  - [transformMat4()](#transformmat4outvec3avec3mmat4)
  - [transformQuat()](#transformquatoutvec3avec3qquat)

## add(out:vec3, a:vec3, b:vec3)

  Adds two vec3's

## angle(a:vec3, b:vec3)

  Get the angle between two 3D vectors

## ceil(out:vec3, a:vec3)

  `Math.ceil` the components of a vec3

## clone(a:vec3)

  Creates a new vec3 initialized with values from an existing vector

## copy(out:vec3, a:vec3)

  Copy the values from one vec3 to another

## create()

  Creates a new, empty vec3

## cross(out:vec3, a:vec3, b:vec3)

  Computes the cross product of two vec3's

## distance(a:vec3, b:vec3)

  Calculates the euclidian distance between two vec3's. Aliased as `dist`

## divide(out:vec3, a:vec3, b:vec3)

  Divides two vec3's. Aliased as `div`

## dot(a:vec3, b:vec3)

  Calculates the dot product of two vec3's

## equals(a:vec3, b:vec3)

  Returns whether or not the vectors have approximately the same elements in the same position.

## exactEquals(a:vec3, b:vec3)

  Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)

## floor(out:vec3, a:vec3)

  `Math.floor` the components of a vec3

## forEach(a:Array, stride:Number, offset:Number, count:Number, fn:Function, [arg]:Object)

  Perform some operation over an array of vec3s.

## fromValues(x:Number, y:Number, z:Number)

  Creates a new vec3 initialized with the given values

## inverse(out:vec3, a:vec3)

  Returns the inverse of the components of a vec3

## length(a:vec3)

  Calculates the length of a vec3. Aliased as `len`

## lerp(out:vec3, a:vec3, b:vec3, t:Number)

  Performs a linear interpolation between two vec3's

## max(out:vec3, a:vec3, b:vec3)

  Returns the maximum of two vec3's

## min(out:vec3, a:vec3, b:vec3)

  Returns the minimum of two vec3's

## multiply(out:vec3, a:vec3, b:vec3)

  Multiplies two vec3's. Aliased as `mul`

## negate(out:vec3, a:vec3)

  Negates the components of a vec3

## normalize(out:vec3, a:vec3)

  Normalize a vec3

## random(out:vec3, [scale]:Number)

  Generates a random vector with the given scale

## rotateX(out:vec3, a:vec3, b:vec3, c:Number)

  Rotate a 3D vector around the x-axis

## rotateY(out:vec3, a:vec3, b:vec3, c:Number)

  Rotate a 3D vector around the y-axis

## rotateZ(out:vec3, a:vec3, b:vec3, c:Number)

  Rotate a 3D vector around the z-axis

## round(out:vec3, a:vec3)

  `Math.round` the components of a vec3

## scale(out:vec3, a:vec3, b:Number)

  Scales a vec3 by a scalar number

## scaleAndAdd(out:vec3, a:vec3, b:vec3, scale:Number)

  Adds two vec3's after scaling the second operand by a scalar value

## set(out:vec3, x:Number, y:Number, z:Number)

  Set the components of a vec3 to the given values

## squaredDistance(a:vec3, b:vec3)

  Calculates the squared euclidian distance between two vec3's. Aliased as `sqrDist`

## squaredLength(a:vec3)

  Calculates the squared length of a vec3. Aliased as `sqrLen`

## subtract(out:vec3, a:vec3, b:vec3)

  Subtracts vector b from vector a. Aliased as `sub`

## transformMat3(out:vec3, a:vec3, m:mat3)

  Transforms the vec3 with a mat3.

## transformMat4(out:vec3, a:vec3, m:mat4)

  Transforms the vec3 with a mat4.
  4th vector component is implicitly '1'

## transformQuat(out:vec3, a:vec3, q:quat)

  Transforms the vec3 with a quat

## License

[zlib](http://en.wikipedia.org/wiki/Zlib_License). See [LICENSE.md](https://github.com/stackgl/gl-vec3/blob/master/LICENSE.md) for details.
