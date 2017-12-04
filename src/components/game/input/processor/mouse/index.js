import {EventProcessor} from '../processor.js';
// import EventType from '../../event/type.js';

/**
 * Mouse event processor
 */
class MouseEventProcessor extends EventProcessor {
  /**
   * Constructor
   * @param {InputManager} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Process mouse event
   * @param {Event} event
   */
  process(event) {
  }
}

export {MouseEventProcessor};
