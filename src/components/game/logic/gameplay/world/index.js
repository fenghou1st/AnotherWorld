import {loadConfig} from 'src/base/js/config';
import {GameModule} from 'game/common/module';

/**
 * World logic
 */
class World extends GameModule {
  /**
   * Construct
   * @param {Game} game
   */
  constructor(game) {
    super(game);

    /** @type {Array.<Object>} */
    this.charsData = require('assets/data/character/index.json');
    /** @type {Object} */
    this.player = null;
    /** @type {Scene} */
    this.scene = null;

    /** @type {Object} */
    this.config = loadConfig().logic.gameplay.world;

    /** @type {string} */
    this.sceneName = null;
  }

  /**
   * On game start
   */
  async onStart() {
    await this.onStartBegin();

    // TODO: load player
    this.player = null;

    // load scene
    this.sceneName = this.config.defaultScene;

    const sceneLoader = this.game.assets.scene;
    this.scene = await sceneLoader.loadByName(this.sceneName);

    this.onStartEnd();
  }

  /**
   * On game stop
   */
  async onStop() {
    await this.onStopBegin();

    // TODO: save player
    this.player = null;

    // TODO: save scene
    this.scene = null;

    this.sceneName = null;

    this.onStopEnd();
  }
}

export {World};
