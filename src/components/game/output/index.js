import {GameModule} from 'src/components/game/module';
import {Graphic} from './graphic';

/**
 * Output manager
 */
class OutputManager extends GameModule {
  /**
   * Construct
   * @param {Game} game
   */
  constructor(game) {
    super(game);

    this.graphic = new Graphic(game);

    this.registerSubModules([this.graphic]);
  }
}

export {OutputManager};
