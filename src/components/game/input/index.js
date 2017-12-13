import {GameModule} from 'game/common/module';
import {Event, EventGroup, EventType} from './event';
import {
  ContainerEventProcessor,
  KeyboardEventProcessor,
  MouseEventProcessor,
  GamepadEventProcessor,
} from './processor';

/**
 * Input manager
 */
class InputManager extends GameModule {
  /**
   * Construct
   * @param {Game} game
   */
  constructor(game) {
    super(game);

    this.containerProcessor = new ContainerEventProcessor(game);
    this.keyboardProcessor = new KeyboardEventProcessor(game);
    this.mouseProcessor = new MouseEventProcessor(game);
    this.gamepadProcessor = new GamepadEventProcessor(game);

    this.registerSubModules([
      this.containerProcessor,
      this.keyboardProcessor,
      this.mouseProcessor,
      this.gamepadProcessor,
    ]);
  }

  /**
   * Process single input event
   * @param {Event} event
   */
  processEvent(event) {
    if (!EventType.properties.has(event.type)) {
      throw new Error(`Invalid input event type: ${event.type}`);
    }
    const group = EventType.properties.get(event.type).group;
    switch (group) {
      case EventGroup.CONTAINER:
        this.containerProcessor.process(event);
        break;
      case EventGroup.KEYBOARD:
        this.keyboardProcessor.process(event);
        break;
      case EventGroup.MOUSE:
        this.mouseProcessor.process(event);
        break;
      case EventGroup.GAMEPAD:
        this.gamepadProcessor.process(event);
        break;
      default:
        throw new Error(`Invalid input event group: ${group}`);
    }
  }
}

export {InputManager, EventType, Event};
