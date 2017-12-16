import createLruCache from 'lru-cache';

import {loadConfig} from 'src/base/js/config';
import {AssetsLoader} from 'game/assets/loader.js';
import {Terrain} from 'game/logic/gameplay/world/terrain';

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
   *
   * Note: Here we save the Promise object to the cache.
   * If you first await the request, and then save the asset to the cache,
   * it will probably cause multiple requests to the same data
   *
   * @param {string} name
   * @return {Promise.<Terrain>}
   */
  loadByName(name) {
    let terrain = this.cache.get(name);

    if (terrain === undefined) {
      terrain = this._loadTerrain(name);
      this.cache.set(name, terrain);
    }

    return terrain;
  }

  /**
   * Clear the entire cache
   */
  clear() {
    this.cache.reset();
  }

  /**
   * Load terrain data and create terrain
   * @param {string} name
   * @return {Promise.<Terrain>}
   * @private
   */
  async _loadTerrain(name) {
    const data = await import(`assets/data/terrain/${name}.json`);
    return new Terrain(name, data);
  }
}

export {TerrainLoader};
