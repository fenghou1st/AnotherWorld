import {GameModule} from 'game/common/module';
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

  /**
   * On viewport resize
   */
  onResize() {
    this.graphic.onResize();
  }
}

export {OutputManager};
