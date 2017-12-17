import {GameModule} from 'game/common/module';
import {loadConfig} from 'src/base/js/config';
import {Position} from 'game/common/math/position.js';

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
   * On game start
   */
  async onStart() {
    await this.onStartBegin();

    this.panelVisible = true;

    await this.game.logic.gameplay.world.synced;
    this._onWorldStarted();

    this.onStartEnd();
  }

  /**
   * On world started
   * @private
   */
  _onWorldStarted() {
    // const player = this.game.logic.gameplay.world.player;
    const scene = this.game.logic.gameplay.world.scene;

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
      /** @type {Position} */
      const location = scene.characters[0].location;
      this.cursorPos = new Position(
          (location.x + 0.5) * this.tileInGameWidth,
          0,
          (location.z + 0.5) * this.tileInGameHeight);
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
   * On game stop
   */
  async onStop() {
    await this.onStopBegin();

    this.sceneRows = null;
    this.sceneCols = null;
    this.sceneXMin = null;
    this.sceneXMax = null;
    this.sceneZMin = null;
    this.sceneZMax = null;

    this.cursorType = null;
    this.cursorPos = null;
    this.cameraPos = null;
    this.panelVisible = null;

    this.onStopEnd();
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
    const movement = direction.multiplyScalar(this.tileInGameWidth * intensity);
    this.cursorPos.add(movement);

    if (this.cursorPos.z < this.sceneZMin) {
      this.cursorPos.z = this.sceneZMin + this.tileInGameHeight / 2;
    }

    if (this.cursorPos.z > this.sceneZMax) {
      this.cursorPos.z = this.sceneZMax - this.tileInGameHeight / 2;
    }

    if (this.cursorPos.x < this.sceneXMin) {
      this.cursorPos.x = this.sceneXMin + this.tileInGameWidth / 2;
    }

    if (this.cursorPos.x > this.sceneXMax) {
      this.cursorPos.x = this.sceneXMax - this.tileInGameWidth / 2;
    }

    this.cameraPos.x = this.cursorPos.x;
    this.cameraPos.z = this.cursorPos.z + 250;
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
    const movement = direction.multiplyScalar(100 * intensity);
    this.cameraPos.add(movement);

    if (this.cameraPos.y > 1000) {
      this.cameraPos.y = 1000;
    }

    if (this.cameraPos.y < 100) {
      this.cameraPos.y = 100;
    }
  }
}

export {Gui};
