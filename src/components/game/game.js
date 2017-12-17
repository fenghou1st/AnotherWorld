import {GameModule} from './common/module';
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
class Game extends GameModule {
  /**
   * Construct
   * @param {Element} domRoot
   */
  constructor(domRoot) {
    super(null);
    this.game = this;
    this.domRoot = domRoot;
    this.currTime = null;

    this.input = new InputManager(this);
    this.assets = new AssetsManager(this);
    this.logic = new LogicManager(this);
    this.output = new OutputManager(this);

    this.registerSubModules([this.input, this.assets, this.logic, this.output]);
  }

  /**
   * Create the game
   */
  async create() {
    if (__DEV__) console.info('Game creating...');
    this.synced = await this.onCreate();
    if (__DEV__) console.info('Game created');
  }

  /**
   * Start the game
   */
  async start() {
    if (__DEV__) console.info('Game starting...');
    this.synced = await this.onStart();
    if (__DEV__) console.info('Game started');
  }

  /**
   * Resume the game
   */
  async resume() {
    if (__DEV__) console.info('Game resuming...');
    this.synced = await this.onResume();
    if (__DEV__) console.info('Game resumed');
  }

  /**
   * Pause the game
   */
  async pause() {
    if (__DEV__) console.info('Game pausing...');
    this.synced = await this.onPause();
    if (__DEV__) console.info('Game paused');
  }

  /**
   * Stop the game
   */
  async stop() {
    if (__DEV__) console.info('Game stopping...');
    this.synced = await this.onStop();
    if (__DEV__) console.info('Game stopped');
  }

  /**
   * Destroy the game
   */
  async destroy() {
    if (__DEV__) console.info('Game destroying...');
    this.synced = await this.onDestroy();
    if (__DEV__) console.info('Game destroyed');
  }

  /**
   * Update logic (when game resumed)
   * @param {number} currTime
   */
  updateLogic(currTime) {
    this.currTime = currTime;
    this.logic.update();
  }

  /**
   * Update output (when game resumed)
   * @param {number} currTime
   */
  updateOutput(currTime) {
    this.currTime = currTime;
    this.output.update();
  }
}

export {Game, EventType, Event};
