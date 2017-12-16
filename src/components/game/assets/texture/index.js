import * as THREE from 'three';
import createLruCache from 'lru-cache';

import {AssetsLoader} from 'game/assets/loader.js';
import {loadConfig} from 'src/base/js/config';

/**
 * Texture loader
 */
class TextureLoader extends AssetsLoader {
  /**
   * Constructor
   * @param {Game} game
   */
  constructor(game) {
    super(game);

    this.loader = new THREE.TextureLoader();

    /** @type {Object} */
    this.config = loadConfig().assets.texture;

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
   * @return {Promise.<Texture>}
   */
  loadByName(name) {
    let texture = this.cache.get(name);

    if (texture === undefined) {
      texture = this._loadTexture(name);
      this.cache.set(name, texture);
    }

    return texture;
  }

  /**
   * Clear the entire cache
   */
  clear() {
    this.cache.reset();
  }

  /**
   * Load texture
   * @param {string} name
   * @return {Promise.<Texture>}
   * @private
   */
  _loadTexture(name) {
    const url = require(`assets/textures/${name}.png`);

    return new Promise((resolve, reject) => {
      this.loader.load(url,
          (texture) => resolve(texture),
          null,
          (event) => reject(event));
    });
  }
}

export {TextureLoader};
