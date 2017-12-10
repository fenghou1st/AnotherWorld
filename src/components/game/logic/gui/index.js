import {GameModule} from 'src/components/game/module';
import {loadConfig} from 'src/base/js/config';
import {Position} from 'game/common/position.js';

/**
 * GUI logic
 */
class Gui extends GameModule {
  /**
   * Construct
   * @param {Game} game
   */
  constructor(game) {
    super(game);

    /** @type {Object} */
    this.config = loadConfig().logic.gui;

    /** @type {number} */
    this.tileInputWidth = this.config.tile.inputWidth;
    /** @type {number} */
    this.tileInputHeight = this.config.tile.inputHeight;
    /** @type {number} */
    this.tileInGameWidth = this.config.tile.inGameWidth;
    /** @type {number} */
    this.tileInGameHeight = this.config.tile.inGameHeight;

    /** @type {number} */
    this.sceneRows = null;
    /** @type {number} */
    this.sceneCols = null;
    /** @type {number} */
    this.sceneXMin = null;
    /** @type {number} */
    this.sceneXMax = null;
    /** @type {number} */
    this.sceneZMin = null;
    /** @type {number} */
    this.sceneZMax = null;

    /** @type {number} */
    this.cursorType = null;
    /** @type {Position} */
    this.cursorPos = null;
    /** @type {Position} */
    this.cameraPos = null;
    /** @type {boolean} */
    this.panelVisible = null;
  }

  /**
   * On create game
   */
  onCreate() {
    super.onCreate();
  }

  /**
   * On start game
   */
  onStart() {
    this.panelVisible = true;

    Promise.all([
      this.game.logic.gameplay.world.player,
      this.game.logic.gameplay.world.scene,
    ]).then(this._onLoadWorld);

    super.onStart();
  }

  /**
   * On resume game
   */
  onResume() {
    super.onResume();
  }

  /**
   * On pause game
   */
  onPause() {
    super.onPause();
  }

  /**
   * On stop game
   */
  onStop() {
    super.onStop();
  }

  /**
   * On destroy game
   */
  onDestroy() {
    super.onDestroy();
  }

  /**
   * On load scene
   * @param {Object} player
   * @param {Scene} scene
   * @private
   */
  _onLoadWorld([player, scene]) {
    // TODO: Set player info

    // Set scene info
    this.sceneRows = scene.terrain.numRows;
    this.sceneCols = scene.terrain.numCols;
    this.sceneXMin = 0;
    this.sceneXMax = this.sceneCols * this.tileInGameWidth;
    this.sceneZMin = 0;
    this.sceneZMax = this.sceneRows * this.tileInGameHeight;

    // Set cursor type & position
    this.cursorType = 0;

    if (scene.characters.length > 0) {
      /** @type {Array.<number>} */
      const location = scene.characters[0].location;
      this.cursorPos = new Position(
          (location[0] + 0.5) * this.tileInGameWidth,
          0,
          (location[1] + 0.5) * this.tileInGameHeight);
    } else {
      this.cursorPos = new Position(
          (Math.floor(this.sceneRows / 2) + 0.5) * this.tileInGameWidth,
          0,
          (Math.floor(this.sceneCols / 2) + 0.5) * this.tileInGameHeight);
    }

    // Set Camera position
    this.cameraPos = new Position(
        this.cursorPos.x, 500, this.cursorPos.z + 250);
  }

  /**
   * Set visibility of the operation panel
   * @param {boolean} visible
   */
  setVisibility(visible) {
  }

  /**
   * Set cursor type & position
   * @param {number} type
   * @param {Position} position
   */
  setCursor(type, position) {
    this.cursorType = type;
    this.cursorPos = position;
  }

  /**
   * Move cursor
   * @param {Direction} direction
   * @param {number} intensity
   */
  moveCursor(direction, intensity = 1.0) {
    console.log('Move cursor: dir: ' +
        `${direction.x}, ${direction.y}, ${direction.z}`);
  }

  /**
   * Set Camera position
   * @param {Position} position
   */
  setCamera(position) {
    this.cameraPos = position;
  }

  /**
   * Move camera
   * @param {Direction} direction
   * @param {number} intensity
   */
  moveCamera(direction, intensity = 1.0) {
    console.log('Move camera: dir: ' +
        `${direction.x}, ${direction.y}, ${direction.z}`);
  }
}

export {Gui};
