import {Gameplay} from './gameplay';
import {Gui} from './gui';

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
    this.gui = new Gui(this);
  }

  /**
   * Initialize
   */
  init() {}
}

export {LogicManager};
