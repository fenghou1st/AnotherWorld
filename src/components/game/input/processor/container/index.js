import {EventProcessor} from 'game/input/processor/processor.js';
// import EventType from 'game/input/event/type.js';

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
