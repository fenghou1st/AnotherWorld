import {InputManager} from './input';
import {AssetsManager} from './assets';
import {LogicManager} from './logic';
import {OutputManager} from './output';

/**
 * Main class of the game
 */
class Game {
  /**
   * Construct
   */
  constructor() {
    this.input = new InputManager(this);
    this.assets = new AssetsManager(this);
    this.logic = new LogicManager(this);
    this.output = new OutputManager(this);
  }

  /**
   * Initialize
   */
  init() {
    this.input.init();
    this.assets.init();
    this.logic.init();
    this.output.init();
  }

  /**
   * Process logic
   */
  processLogic() {}

  /**
   * Process output
   */
  processOutput() {}
}

export {Game};
