import * as THREE from 'three';

/**
 * 3D direction
 */
class Direction extends THREE.Vector3 {
  /**
   * Constructor
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  constructor(x, y, z) {
    super(x, y, z);
  }
}

const FRONT = new Direction(0, 0, -1);
const BACK = new Direction(0, 0, 1);
const LEFT = new Direction(-1, 0, 0);
const RIGHT = new Direction(1, 0, 0);
const UP = new Direction(0, 1, 0);
const DOWN = new Direction(0, -1, 0);

export {Direction, FRONT, BACK, LEFT, RIGHT, UP, DOWN};
