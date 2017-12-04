import {EventProcessor} from '../processor.js';
// import EventType from '../../event/type.js';

/**
 * Game event processor
 */
class GameEventProcessor extends EventProcessor {
  /**
   * Constructor
   * @param {InputManager} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Process game event
   * @param {Event} event
   */
  process(event) {
  }
}

export {GameEventProcessor};
