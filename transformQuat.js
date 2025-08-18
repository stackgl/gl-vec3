module.exports = transformQuat;

/**
 * Transforms the vec3 with a quat
 *
 * Note: the quaternion must be a unit quaternion (|q| = 1) in
 * order for this operation to be valid.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q unit quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
    // Fast Vector Rotation using Quaternions by Robert Eisele
    // https://raw.org/proof/vector-rotation-using-quaternions/

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3]

    // t = q x v
    var tx = qy * z - qz * y
    var ty = qz * x - qx * z
    var tz = qx * y - qy * x

    // t = 2t
    tx *= 2
    ty *= 2
    tz *= 2

    // v + w t + q x t
    out[0] = x + qw * tx + qy * tz - qz * ty
    out[1] = y + qw * ty + qz * tx - qx * tz
    out[2] = z + qw * tz + qx * ty - qy * tx

    return out
}
