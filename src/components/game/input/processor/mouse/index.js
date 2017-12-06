import {EventProcessor} from 'game/input/processor/processor.js';
// import EventType from 'game/input/event/type.js';

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
