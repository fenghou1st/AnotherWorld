import {GameModule} from 'src/components/game/module';

/**
 * Base class of input event processor
 */
export class EventProcessor extends GameModule {
  /**
   * Constructor
   * @param {Game} game
   */
  constructor(game) {
    super(game);
  }

  /**
   * Process input event
   * @param {Event} event
   */
  process(event) {
    throw new Error('Not implement!');
  }
}
