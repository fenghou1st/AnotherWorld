/**
 * Base class of input event processor
 */
export class EventProcessor {
  /**
   * Constructor
   * @param {InputManager} parent
   */
  constructor(parent) {
    this.parent = parent;
  }

  /**
   * Process input event
   * @param {Event} event
   */
  process(event) {}
}
