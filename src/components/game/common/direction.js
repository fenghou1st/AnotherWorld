import * as THREE from 'three';

/**
 * 3D direction
 */
class Direction extends THREE.Vector3 {}

const FRONT = new Direction();
const BACK = new Direction();
const LEFT = new Direction();
const RIGHT = new Direction();
const UP = new Direction();
const DOWN = new Direction();

export {Direction, FRONT, BACK, LEFT, RIGHT, UP, DOWN};
