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
  async onStop() {
    await this.onStopBegin();
    this.clear();
    this.onStopEnd();
  }

  /**
   * Load the specified asset by its name
   *
   * Note: Here we save the Promise object to the cache.
   * If you first await the request, and then save the asset to the cache,
   * it will probably cause multiple requests to the same data
   *
   * @param {string} name
   * @return {Promise.<Scene>}
   */
  loadByName(name) {
    let scene = this.cache.get(name);

    if (scene === undefined) {
      scene = this._loadScene(name);
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
   * Load scene data and create scene
   * @param {string} name
   * @return {Promise.<Scene>}
   * @private
   */
  async _loadScene(name) {
    const data = await import(`assets/data/scene/${name}.json`);
    const scene = new Scene(name, data);
    const terrainLoader = this.game.assets.terrain;
    scene.terrain = await terrainLoader.loadByName(scene.terrainName);
    return scene;
  }
}

export {SceneLoader};
