import createLruCache from 'lru-cache';

import {loadConfig} from 'src/base/js/config';
import {AssetsLoader} from 'game/assets/loader.js';
import {Scene} from 'game/logic/gameplay/world/scene';

/**
 * Terrain loader
 */
class TerrainLoader extends AssetsLoader {
  /**
   * Constructor
   * @param {Game} game
   */
  constructor(game) {
    super(game);

    /** @type {Object} */
    this.config = loadConfig().assets.terrain;

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
   * @param {string} name
   * @return {Scene}
   */
  loadByName(name) {
    let scene = this.cache.get(name);
    if (scene === undefined) {
      scene = new Scene(name);
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
}

export {TerrainLoader};
