import EventGroup from './event_group.js';
import EventType from './event_type.js';
import Event from './event.js';

/**
 * Input manager
 * - 搜集用户的各种输入，并转化为逻辑模块可直接处理的动作
 * - 为 AI 提供逻辑模块可直接处理的动作的输入接口
 */
class Input {
  /**
   * Construct
   * @param {Game} parent
   */
  constructor(parent) {
    this.parent = parent;
    this.eventsQueue = [];
  }

  /**
   * Initialize
   */
  init() {}

  /**
   * Add an input event to the events queue
   * @param {Event} event
   */
  addEvent(event) {
    this.eventsQueue.push(event);
  }

  /**
   * Add a gameplay action to the actions queue
   * @param {Action} action
   */
  addAction(action) {
    this.parent.logic.gameplay.addAction(action);
  }

  /**
   * Process queued input events
   */
  processEvents() {
    let event = this.eventsQueue.shift();
    while (event !== undefined) {
      this._processEvent(event);
      event = this.eventsQueue.shift();
    }
  }

  /**
   * Process single input event
   * @param {Event} event
   * @private
   */
  _processEvent(event) {
    if (!EventType.properties.has(event.type)) {
      throw new Error(`Invalid input event type: ${event.type}`);
    }
    const group = EventType.properties.get(event.type).group;
    switch (group) {
      case EventGroup.KEYBOARD:
        this._processKeyboardEvent(event);
        break;
      case EventGroup.MOUSE:
        this._processMouseEvent(event);
        break;
      case EventGroup.GAMEPAD:
        this._processGamepadEvent(event);
        break;
      case EventGroup.CONTAINER:
        this._processContainerEvent(event);
        break;
      case EventGroup.GUI:
        this._processGuiEvent(event);
        break;
      case EventGroup.GAME:
        this._processGameEvent(event);
        break;
      default:
        throw new Error(`Invalid input event group: ${group}`);
    }
  }

  /**
   * Process keyboard event
   * @param {Event} event
   * @private
   */
  _processKeyboardEvent(event) {
  }

  /**
   * Process mouse event
   * @param {Event} event
   * @private
   */
  _processMouseEvent(event) {
  }

  /**
   * Process gamepad event
   * @param {Event} event
   * @private
   */
  _processGamepadEvent(event) {
  }

  /**
   * Process container event
   * @param {Event} event
   * @private
   */
  _processContainerEvent(event) {
  }

  /**
   * Process in-game gui event
   * @param {Event} event
   * @private
   */
  _processGuiEvent(event) {
  }

  /**
   * Process game event
   * @param {Event} event
   * @private
   */
  _processGameEvent(event) {
  }
}

export default {
  Input: Input,
  InputEventType: EventType,
  InputEvent: Event,
};
