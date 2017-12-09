import {GameModule} from 'src/components/game/module';

/**
 * Graphic output
 */
class Graphic extends GameModule {
  /**
   * Construct
   * @param {Game} game
   */
  constructor(game) {
    super(game);

    this.width = null;
    this.height = null;

    this.camera = null;
    this.scene = null;
    this.renderer = null;
    this.geometry = null;
    this.material = null;

    this.cursor = null;
    this.cursorTile = null;

    this.currTerrainId = null;
    this.tileRows = null;
    this.tileCols = null;
    this.tileImageWidth = null;
    this.tileImageHeight = null;
    this.tileWidth = null;
    this.tileHeight = null;
    this.mapXMin = null;
    this.mapXMax = null;
    this.mapZMin = null;
    this.mapZMax = null;

    this.presentChars = [];
    this.presentCharMeshes = [];
  }

  /**
   * On create game
   */
  onCreate() {
    super.onCreate();
  }

  /**
   * On start game
   */
  onStart() {
    super.onStart();
  }

  /**
   * On resume game
   */
  onResume() {
    super.onResume();
  }

  /**
   * On pause game
   */
  onPause() {
    super.onPause();
  }

  /**
   * On stop game
   */
  onStop() {
    super.onStop();
  }

  /**
   * On destroy game
   */
  onDestroy() {
    super.onDestroy();
  }
}

export {Graphic};
