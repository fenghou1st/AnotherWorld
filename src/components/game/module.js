/**
 * Base class of game module
 */
export class GameModule {
  /**
   * Constructor
   * @param {?Game} game
   */
  constructor(game) {
    this.game = game;
    this.subModules = [];
  }

  /**
   * Register sub-modules
   * @param {Array.<GameModule>} subModules
   */
  registerSubModules(subModules) {
    this.subModules = subModules;
  }

  /**
   * On game create
   */
  onCreate() {
    for (let subModule of this.subModules) {
      subModule.onCreate();
    }
  }

  /**
   * On game start
   */
  onStart() {
    for (let subModule of this.subModules) {
      subModule.onStart();
    }
  }

  /**
   * On game resume
   */
  onResume() {
    for (let subModule of this.subModules) {
      subModule.onResume();
    }
  }

  /**
   * On game pause
   */
  onPause() {
    for (let subModule of this.subModules) {
      subModule.onPause();
    }
  }

  /**
   * On game stop
   */
  onStop() {
    for (let subModule of this.subModules) {
      subModule.onStop();
    }
  }

  /**
   * On game destroy
   */
  onDestroy() {
    for (let subModule of this.subModules) {
      subModule.onDestroy();
    }
  }
}
