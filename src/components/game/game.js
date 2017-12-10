import {GameModule} from './module';
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
  onCreate() {
    if (__DEV__) console.info('On create game...');
    super.onCreate();
  }

  /**
   * On start game
   */
  onStart() {
    if (__DEV__) console.info('On start game...');
    super.onStart();
  }

  /**
   * On resume game
   */
  onResume() {
    if (__DEV__) console.info('On resume game...');
    super.onResume();
  }

  /**
   * On pause game
   */
  onPause() {
    if (__DEV__) console.info('On pause game...');
    super.onPause();
  }

  /**
   * On stop game
   */
  onStop() {
    if (__DEV__) console.info('On stop game...');
    super.onStop();
  }

  /**
   * On destroy game
   */
  onDestroy() {
    if (__DEV__) console.info('On destroy game...');
    super.onDestroy();
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
