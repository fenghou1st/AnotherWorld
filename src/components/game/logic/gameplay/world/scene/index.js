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
    /** @type {Array} */
    this.characters = data.characters;

    /** @type {Terrain} */
    this.terrain = null;
  }
}

export {Scene};
