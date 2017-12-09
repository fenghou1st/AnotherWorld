import {GameModule} from 'game/module';
import {SceneLoader} from './scene';
import {TerrainLoader} from './terrain';

/**
 * Assets manager
 */
class AssetsManager extends GameModule {
  /**
   * Construct
   * @param {Game} game
   */
  constructor(game) {
    super(game);

    this.scene = new SceneLoader(game);
    this.terrain = new TerrainLoader(game);

    this.registerSubModules([this.scene, this.terrain]);
  }
}

export {AssetsManager};
