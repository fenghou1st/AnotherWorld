import assert from 'assert';

/**
 * Terrain logic
 * It will not contain data for output modules (for example, texture bitmaps).
 */
class Terrain {
  /**
   * Construct
   * @param {string} name
   * @param {Object} data
   */
  constructor(name, data) {
    this.name = name;

    /** @type {number} */
    this.numRows = data.numRows;
    /** @type {number} */
    this.numCols = data.numCols;
    /** @type {string} */
    this.tilesTextureName = data.tilesTextureName;
    /** @type {Array.<number>} */
    this.tiles = data.tiles;

    assert(data.tiles.length === data.numRows * data.numCols,
        `Terrain ${name}: number of tiles not equal to row * col`);
  }
}

export {Terrain};
