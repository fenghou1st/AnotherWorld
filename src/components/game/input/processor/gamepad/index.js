import {EventProcessor} from 'game/input/processor/processor.js';

/**
 * Gamepad event processor
 */
class GamepadEventProcessor extends EventProcessor {
  /**
   * Constructor
   * @param {Game} game
   */
  constructor(game) {
    super(game);
  }

  /**
   * Process gamepad event
   * @param {Event} event
   */
  process(event) {
  }
}

export {GamepadEventProcessor};
