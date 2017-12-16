import {Position} from 'game/common/math/position.js';

/**
 * Character
 */
class Character {
  /**
   * @param {number} id
   * @param {Array.<number>} location
   * @param {string} action
   */
  constructor(id, location, action = 'stand') {
    this.id = id;
    this.location = new Position(location[0], location[1], location[2]);
    this.action = action; // stand | move | fight | die

    this.factionId = 0; // own | friend | neutral | enemy

    this.hp = 100;
  }
}

export {Character};
