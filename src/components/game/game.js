import Input from './input';
import Assets from './assets';
import Logic from './logic';
import Output from './output';

/**
 * Main class of the game
 */
export default class Game {
  /**
   * Construct
   */
  constructor() {
    this.input = new Input(this);
    this.assets = new Assets(this);
    this.logic = new Logic(this);
    this.output = new Output(this);
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
