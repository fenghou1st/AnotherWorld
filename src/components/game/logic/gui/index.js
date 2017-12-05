/**
 * GUI logic
 */
class Gui {
  /**
   * Construct
   * @param {LogicManager} parent
   */
  constructor(parent) {
    this.parent = parent;
  }

  /**
   * Initialize
   */
  init() {}

  /**
   * Set visibility
   * @param {boolean} visible
   */
  setVisibility(visible) {
  }

  /**
   * Move cursor
   * @param {Direction} direction
   * @param {number} intensity
   */
  moveCursor(direction, intensity = 1.0) {
  }

  /**
   * Move camera
   * @param {Direction} direction
   * @param {number} intensity
   */
  moveCamera(direction, intensity = 1.0) {
  }
}

export {Gui};
