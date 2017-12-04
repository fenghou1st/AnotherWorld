import {EventProcessor} from '../processor.js';
// import EventType from '../../event/type.js';

/**
 * GUI event processor
 */
class GuiEventProcessor extends EventProcessor {
  /**
   * Constructor
   * @param {InputManager} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Process GUI event
   * @param {Event} event
   */
  process(event) {
  }
}

export {GuiEventProcessor};
