import {EventProcessor} from '../processor.js';

/**
 * Gamepad event processor
 */
class GamepadEventProcessor extends EventProcessor {
  /**
   * Constructor
   * @param {InputManager} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Process gamepad event
   * @param {Event} event
   */
  process(event) {
  }
}

export {GamepadEventProcessor};
