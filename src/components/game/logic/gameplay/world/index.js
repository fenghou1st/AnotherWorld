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
    // TODO: load player
    this.player = null;
    // TODO: load scene
    const sceneLoader = this.game.assets.scene;
    this.scene = await sceneLoader.loadByName(this.sceneName);
  }

  /**
   * On game stop
   */
  onStop() {
    // TODO: save player
    this.player = null;
    // TODO: save scene
    this.scene = null;
  }
}

export {World};
