import {InputManager, EventType, Event} from './input';
import {AssetsManager} from './assets';
import {LogicManager} from './logic';
import {OutputManager} from './output';

/**
 * Main class of the game
 *
 * Game activities:
 *  - create
 *  - start
 *  - resume
 *  - pause
 *  - stop
 *  - destroy
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
   * Create
   */
  create() {
    this.input.init();
    this.assets.init();
    this.logic.init();
    this.output.init();
  }

  /**
   * Start
   */
  start() {}

  /**
   * Resume
   */
  resume() {}

  /**
   * Pause
   */
  pause() {}

  /**
   * Stop
   */
  stop() {}

  /**
   * Destroy
   */
  destroy() {}

  /**
   * Process logic
   */
  processLogic() {}

  /**
   * Process output
   */
  processOutput() {}
}

export {Game, EventType, Event};
