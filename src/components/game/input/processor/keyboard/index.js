import {EventProcessor} from '../processor.js';
import EventType from '../../event/type.js';

/**
 * Keyboard event processor
 */
class KeyboardEventProcessor extends EventProcessor {
  /**
   * Constructor
   * @param {InputManager} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Process keyboard event
   * @param {Event} event
   */
  process(event) {
    switch (event.type) {
      case EventType.KEYBOARD_DOWN:
        break;
      case EventType.KEYBOARD_UP:
        break;
      case EventType.KEYBOARD_PRESS:
        break;
      default:
        throw new Error(`Invalid input event type: ${event.type}`);
    }
  }
}

export {KeyboardEventProcessor};
