import inputConfig from 'assets/data/config.input.json';
import * as Direction from 'game/common/direction.js';

import {EventProcessor} from '../processor.js';
import EventType from '../../event/type.js';

/**
 * Keyboard event processor
 */
class KeyboardEventProcessor extends EventProcessor {
  /**
   * Constructor
   * @param {InputManager} parent
   */
  constructor(parent) {
    super(parent);

    this.keyMap = inputConfig.keyboard;
  }

  /**
   * Process keyboard event
   * @param {Event} event
   */
  process(event) {
    switch (event.type) {
      case EventType.KEYBOARD_DOWN:
        this._processDown(event.data.code);
        break;
      case EventType.KEYBOARD_UP:
        this._processUp(event.data.code);
        break;
      case EventType.KEYBOARD_PRESS:
        this._processPress(event.data.code, event.data.key);
        break;
      default:
        throw new Error(`Invalid input event type: ${event.type}`);
    }
  }

  /**
   * Process keyboard down event
   * @param {string} code
   * @private
   */
  _processDown(code) {
    switch (code) {
      case this.keyMap.cursorUp:
        this.parent.parent.logic.gui.moveCursor(Direction.FRONT);
        break;
      case this.keyMap.cursorDown:
        this.parent.parent.logic.gui.moveCursor(Direction.BACK);
        break;
      case this.keyMap.cursorLeft:
        this.parent.parent.logic.gui.moveCursor(Direction.LEFT);
        break;
      case this.keyMap.cursorRight:
        this.parent.parent.logic.gui.moveCursor(Direction.RIGHT);
        break;
      case this.keyMap.cameraUp:
        this.parent.parent.logic.gui.moveCamera(Direction.UP);
        break;
      case this.keyMap.cameraDown:
        this.parent.parent.logic.gui.moveCamera(Direction.DOWN);
        break;
    }
  }

  /**
   * Process keyboard up event
   * @param {string} code
   * @private
   */
  _processUp(code) {}

  /**
   * Process keyboard press event
   * @param {string} code
   * @param {string} key
   * @private
   */
  _processPress(code, key) {}

  /**
   * Get keyboard states
   * @return {Array}
   * @private
   */
  _getStates() {
    return [];
  }
}

export {KeyboardEventProcessor};
