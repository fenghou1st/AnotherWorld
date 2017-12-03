/**
 * Input event
 */
export default class Event {
  /**
   * @param {number} type
   * @param {?Object} data
   */
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }
}
