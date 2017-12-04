import * as THREE from 'three';

/**
 * Present character
 */
class PresentCharacter {
  /**
   * @param {number} characterId
   * @param {number} x
   * @param {number} y
   * @param {string} action
   */
  constructor(characterId, x, y, action = 'stand') {
    this.characterId = characterId;
    this.location = new THREE.Vector2(x, y);
    this.action = action; // stand | move | fight | die

    this.factionId = 0; // own | friend | neutral | enemy

    this.hp = 100;
  }
}

export {PresentCharacter};
