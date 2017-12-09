/**
 * Scene logic
 */
class Scene {
  /**
   * Construct
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.terrain = null;
    this.decorations = null;
    this.entities = null;
    this.characters = null;
  }
}

export {Scene};
