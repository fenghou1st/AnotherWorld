import {loadConfig} from 'src/base/js/config';
import {GameModule} from 'src/components/game/module';

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

    this.player = null;
    this.scene = null;

    /** @type {Object} */
    this.config = loadConfig().logic.gameplay.world;

    /** @type {string} */
    this.sceneName = this.config.defaultScene;
  }

  /**
   * On game start
   */
  onStart() {
    // TODO: load player
    this.scene = this.game.assets.scene.loadByName(this.sceneName);
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
