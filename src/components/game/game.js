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

    this.input = new InputManager(this);
    this.assets = new AssetsManager(this);
    this.logic = new LogicManager(this);
    this.output = new OutputManager(this);

    this.registerSubModules([this.input, this.assets, this.logic, this.output]);
  }

  /**
   * On create game
   */
  async onCreate() {
    if (__DEV__) console.info('Game creating...');
    await this.onCreateBegin();
    this.onCreateEnd();
    if (__DEV__) console.info('Game created');
  }

  /**
   * On start game
   */
  async onStart() {
    if (__DEV__) console.info('Game starting...');
    await this.onStartBegin();
    this.onStartEnd();
    if (__DEV__) console.info('Game started');
  }

  /**
   * On resume game
   */
  async onResume() {
    if (__DEV__) console.info('Game resuming...');
    await this.onResumeBegin();
    this.onResumeEnd();
    if (__DEV__) console.info('Game resumed');
  }

  /**
   * On pause game
   */
  async onPause() {
    if (__DEV__) console.info('Game pausing...');
    await this.onPauseBegin();
    this.onPauseEnd();
    if (__DEV__) console.info('Game paused');
  }

  /**
   * On stop game
   */
  async onStop() {
    if (__DEV__) console.info('Game stopping...');
    await this.onStopBegin();
    this.onStopEnd();
    if (__DEV__) console.info('Game stopped');
  }

  /**
   * On destroy game
   */
  async onDestroy() {
    if (__DEV__) console.info('Game destroying...');
    await this.onDestroyBegin();
    this.onDestroyEnd();
    if (__DEV__) console.info('Game destroyed');
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

export {Game, EventType, Event};
