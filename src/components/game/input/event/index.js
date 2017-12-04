import EventGroup from './group.js';
import EventType from './type.js';

/**
 * Input event
 */
class Event {
  /**
   * @param {number} type
   * @param {?Object} data
   */
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }
}

export {Event, EventGroup, EventType};
