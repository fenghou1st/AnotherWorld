import * as Direction from 'game/common/math/direction.js';
import {EventProcessor} from 'game/input/processor/processor.js';
import EventType from 'game/input/event/type.js';
import {loadConfig} from 'src/base/js/config';

/**
 * Keyboard event processor
 */
class KeyboardEventProcessor extends EventProcessor {
  /**
   * Constructor
   * @param {Game} game
   */
  constructor(game) {
    super(game);

    /** @type {Object} */
    this.keyMap = loadConfig().input.keyboard.mapping;
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
   *
   * If you put in the pre-defined objects directly (instead of clone them),
   * these pre-defined objects will be modified in the functions.
   *
   * @param {string} code
   * @private
   */
  _processDown(code) {
    switch (code) {
      case this.keyMap.cursorUp:
        this.game.logic.gui.moveCursor(Direction.FRONT.clone());
        break;
      case this.keyMap.cursorDown:
        this.game.logic.gui.moveCursor(Direction.BACK.clone());
        break;
      case this.keyMap.cursorLeft:
        this.game.logic.gui.moveCursor(Direction.LEFT.clone());
        break;
      case this.keyMap.cursorRight:
        this.game.logic.gui.moveCursor(Direction.RIGHT.clone());
        break;
      case this.keyMap.cameraUp:
        this.game.logic.gui.moveCamera(Direction.UP.clone());
        break;
      case this.keyMap.cameraDown:
        this.game.logic.gui.moveCamera(Direction.DOWN.clone());
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
