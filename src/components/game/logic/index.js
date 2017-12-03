import Gameplay from './gameplay';

/**
 * Logic manager
 */
export default class Logic {
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
