// import Action from './action';

/**
 * Gameplay manager
 */
class Gameplay {
  /**
   * Construct
   * @param {LogicManager} parent
   */
  constructor(parent) {
    this.parent = parent;
    this.actionsQueue = [];
  }

  /**
   * Initialize
   */
  init() {}

  /**
   * Add a gameplay action to the actions queue
   * @param {Action} action
   */
  addAction(action) {
    this.actionsQueue.push(action);
  }

  /**
   * Process queued gameplay actions
   */
  processActions() {
    let action = this.actionsQueue.shift();
    while (action !== undefined) {
      this._processAction(action);
      action = this.actionsQueue.shift();
    }
  }

  /**
   * Process single gameplay action
   * @param {Action} action
   * @private
   */
  _processAction(action) {
    // const type = action.type;
    // const data = action.data;
  }
}

export {Gameplay};
