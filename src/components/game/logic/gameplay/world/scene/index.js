import {Character} from 'game/logic/gameplay/character/character.js';

/**
 * Scene logic
 */
class Scene {
  /**
   * Construct
   * @param {string} name
   * @param {Object} data
   */
  constructor(name, data) {
    this.name = name;

    /** @type {string} */
    this.terrainName = data.terrainName;
    /** @type {Array} */
    this.decorations = data.decorations;
    /** @type {Array} */
    this.entities = data.entities;
    /** @type {Array.<Character>} */
    this.characters = Scene._initCharacters(data.characters);

    /** @type {Terrain} */
    this.terrain = null;
  }

  /**
   * Initialize characters
   * @param {Array.<Object>} charData
   * @return {Array.<Character>}
   * @private
   */
  static _initCharacters(charData) {
    return charData.map((data) => {
      return new Character(data['id'], data['location']);
    });
  }
}

export {Scene};
