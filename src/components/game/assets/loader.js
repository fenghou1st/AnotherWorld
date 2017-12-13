import {GameModule} from 'game/common/module';

/**
 * Base class of assets loader
 */
export class AssetsLoader extends GameModule {
  /**
   * Constructor
   * @param {Game} game
   */
  constructor(game) {
    super(game);
  }

  /**
   * Load the specified asset by its id
   * @param {number} id
   * @return {Promise}
   */
  loadById(id) {
    if (id === null) return null;
    throw new Error('Not implement!');
  }

  /**
   * Load the specified asset by its name
   * @param {string} name
   * @return {Promise}
   */
  loadByName(name) {
    if (name === null) return null;
    throw new Error('Not implement!');
  }

  /**
   * Clear the entire cache
   */
  clear() {
    throw new Error('Not implement!');
  }
}
