import {Event, EventGroup, EventType} from './event';
import {
  KeyboardEventProcessor,
  MouseEventProcessor,
  GamepadEventProcessor,
  ContainerEventProcessor,
  GuiEventProcessor,
  GameEventProcessor,
} from './processor';

/**
 * Input manager
 * - 搜集用户的各种输入，并转化为逻辑模块可直接处理的动作
 * - 为 AI 提供逻辑模块可直接处理的动作的输入接口
 */
class InputManager {
  /**
   * Construct
   * @param {Game} parent
   */
  constructor(parent) {
    this.parent = parent;

    this.eventsQueue = [];

    this.keyboardProcessor = new KeyboardEventProcessor(this);
    this.mouseProcessor = new MouseEventProcessor(this);
    this.gamepadProcessor = new GamepadEventProcessor(this);
    this.containerProcessor = new ContainerEventProcessor(this);
    this.guiProcessor = new GuiEventProcessor(this);
    this.gameProcessor = new GameEventProcessor(this);
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
        this.keyboardProcessor.process(event);
        break;
      case EventGroup.MOUSE:
        this.mouseProcessor.process(event);
        break;
      case EventGroup.GAMEPAD:
        this.gamepadProcessor.process(event);
        break;
      case EventGroup.CONTAINER:
        this.containerProcessor.process(event);
        break;
      case EventGroup.GUI:
        this.guiProcessor.process(event);
        break;
      case EventGroup.GAME:
        this.gameProcessor.process(event);
        break;
      default:
        throw new Error(`Invalid input event group: ${group}`);
    }
  }
}

export {InputManager, EventType, Event};
