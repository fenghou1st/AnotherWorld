import * as THREE from 'three';

/**
 * 3D position
 */
class Position extends THREE.Vector3 {
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

export {Position};
