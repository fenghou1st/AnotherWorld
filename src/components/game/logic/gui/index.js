import {GameModule} from 'src/components/game/module';

/**
 * GUI logic
 */
class Gui extends GameModule {
  /**
   * Construct
   * @param {Game} game
   */
  constructor(game) {
    super(game);
  }

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
    console.log('Move cursor: dir: ' +
        `${direction.x}, ${direction.y}, ${direction.z}`);
  }

  /**
   * Move camera
   * @param {Direction} direction
   * @param {number} intensity
   */
  moveCamera(direction, intensity = 1.0) {
    console.log('Move camera: dir: ' +
        `${direction.x}, ${direction.y}, ${direction.z}`);
  }
}

export {Gui};
