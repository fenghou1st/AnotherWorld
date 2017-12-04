import {Gameplay} from './gameplay';

/**
 * Logic manager
 */
class LogicManager {
  /**
   * Construct
   * @param {Game} parent
   */
  constructor(parent) {
    this.parent = parent;
    this.gameplay = new Gameplay(this);
  }

  /**
   * Initialize
   */
  init() {}
}

export {LogicManager};
