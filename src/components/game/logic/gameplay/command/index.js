/**
 * Gameplay command
 */
class Command {
  /**
   * @param {number} type
   * @param {?Object} data
   */
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }
}

export {Command};
