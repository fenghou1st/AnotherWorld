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

    /** @type {Object} */
    this.player = null;
    /** @type {Scene} */
    this.scene = null;

    /** @type {Object} */
    this.config = loadConfig().logic.gameplay.world;

    /** @type {string} */
    this.sceneName = this.config.defaultScene;
  }

  /**
   * On game start
   */
  async onStart() {
    await this.onStartBegin();

    // TODO: load player
    this.player = null;
    // TODO: load scene
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

    this.onStopEnd();
  }
}

export {World};
