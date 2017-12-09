import {GameModule} from 'src/components/game/module';
import {Gameplay} from './gameplay';
import {Gui} from './gui';

/**
 * Logic manager
 */
class LogicManager extends GameModule {
  /**
   * Construct
   * @param {Game} game
   */
  constructor(game) {
    super(game);

    this.gameplay = new Gameplay(game);
    this.gui = new Gui(game);

    this.registerSubModules([this.gameplay, this.gui]);
  }
}

export {LogicManager};
