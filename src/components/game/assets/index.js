import {GameModule} from 'game/common/module';
import {SceneLoader} from './scene';
import {TerrainLoader} from './terrain';
import {TextureLoader} from './texture';

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
    this.texture = new TextureLoader(game);

    this.registerSubModules([this.scene, this.terrain, this.texture]);
  }
}

export {AssetsManager};
