import {EventProcessor} from '../processor.js';
// import EventType from '../../event/type.js';

/**
 * Container event processor
 */
class ContainerEventProcessor extends EventProcessor {
  /**
   * Constructor
   * @param {InputManager} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Process container event
   * @param {Event} event
   */
  process(event) {
  }
}

export {ContainerEventProcessor};
