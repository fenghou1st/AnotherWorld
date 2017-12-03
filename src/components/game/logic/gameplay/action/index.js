/**
 * Gameplay action
 */
export default class Action {
  /**
   * @param {number} type
   * @param {?Object} data
   */
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }
}
