/**
 * MATH
 * MAthematical Tools & Hacks
 * @author Martin DEQUATREMARE
 * @link https://github.com/MD4
 */

/**
 * Compute the angle between two (2D) points
 * @param {Object} p1 First point (x,y).
 * @param {Object} p2 Second point (x,y).
 * @returns {Number} Computed angle.
 */
Math.angle = function (p1, p2) {
	return Math.atan2(p2.y - p1.y, p2.x - p1.x);
};

/**
 * Compute the distance between two (2D) points
 * @param {Object} p1 First point {x,y}.
 * @param {Object} p2 Second point {x,y}.
 * @returns {Number} Computed distance.
 */
Math.distance = function (p1, p2) {
	return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

/**
 * Check if a (2D) point is contained in a (2D) polygon
 * @author Jonas Raoni Soares Silva
 * @link http://jsfromhell.com/math/is-point-in-poly [rev. #0]
 * @param {Object[]} polygonPath Polygon path : 2D point list !
 * @param {Object} point Point to check {x,y}.
 * @returns {Boolean}
 */
Math.isPointInPoly = function (polygonPath, point) {
	for (var c = false, i = -1, l = polygonPath.length, j = l - 1; ++i < l; j = i)
		((polygonPath[i].y <= point.y && point.y < polygonPath[j].y) || (polygonPath[j].y <= point.y && point.y < polygonPath[i].y))
				&& (point.x < (polygonPath[j].x - polygonPath[i].x) * (point.y - polygonPath[i].y) / (polygonPath[j].y - polygonPath[i].y) + polygonPath[i].x)
				&& (c = !c);
	return c;
};

/**
 * Perform a fast round on a float.
 * @param {type} float The float to round.
 * @returns {Number} Rounded float.
 */
Math.hackRound = function (float) {
	return (0.5 + float) << 0;
};

/**
 * Wrap an angle between 0 and PI
 * @param angle Angle to wrap
 * @returns {Number}
 */
Math.wrapAngle = function (angle) {
    return angle + Math.PI2 * Math.floor((Math.PI - angle) / Math.PI2);
}

/**
 * Angular linear interpolation
 * @param current
 * @param target
 * @param delta
 * @returns {Number}
 */
Math.lerpAngle = function (current, target, delta) {
    current = Math.wrapAngle(current);
    target = Math.wrapAngle(target);
    if (current > Math.PI / 2 && target < -Math.PI / 2) {
        return current + ((target + Math.PI) - (current - Math.PI)) / delta;
    }
    if (current < -Math.PI / 2 && target > Math.PI / 2) {
        return current + ((target - Math.PI) - (current + Math.PI)) / delta;
    }
    return current + Math.wrapAngle((target - current) / delta);
};
