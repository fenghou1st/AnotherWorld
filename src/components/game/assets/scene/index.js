import createLruCache from 'lru-cache';

import {loadConfig} from 'src/base/js/config';
import {AssetsLoader} from 'game/assets/loader.js';
import {Scene} from 'game/logic/gameplay/world/scene';

/**
 * Scene loader
 */
class SceneLoader extends AssetsLoader {
  /**
   * Constructor
   * @param {Game} game
   */
  constructor(game) {
    super(game);

    /** @type {Object} */
    this.config = loadConfig().assets.scene;

    /** @type {LRUCache} */
    this.cache = createLruCache({
      max: this.config.cache.maxSize,
    });
  }

  /**
   * On game stop
   */
  onStop() {
    this.clear();
  }

  /**
   * Load the specified asset by its name
   *
   * Note: Here we save the Promise object to the cache.
   * If you first await the request, and then save the asset to the cache,
   * it will probably cause multiple requests of the same data
   *
   * @param {string} name
   * @return {Promise}
   */
  loadByName(name) {
    let scene = this.cache.get(name);

    if (scene === undefined) {
      scene = async () => {
        const data = await SceneLoader._loadSceneData(name);
        const newScene = new Scene(name, data);
        newScene.terrain =
            await this.game.assets.terrain.loadByName(newScene.terrainName);
        return newScene;
      };
      this.cache.set(name, scene);
    }

    return scene;
  }

  /**
   * Clear the entire cache
   */
  clear() {
    this.cache.reset();
  }

  /**
   * Load scene data
   * @param {string} name
   * @return {Promise}
   * @private
   */
  static _loadSceneData(name) {
    return import(`assets/data/scene/${name}.json`);
  }
}

export {SceneLoader};
