import {GameModule} from 'game/common/module';
import * as THREE from 'three';

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

    /** @type {number} */
    this.width = null;
    /** @type {number} */
    this.height = null;

    /** @type {PerspectiveCamera} */
    this.camera = null;
    /** @type {Scene} */
    this.scene = null;
    /** @type {WebGLRenderer} */
    this.renderer = null;

    /** @type {Mesh} */
    this.cursorTile = null;
    /** @type {Array.<Mesh>} */
    this.characterMeshes = [];
  }

  /**
   * On create game
   */
  onCreate() {
    this.width = this.game.domRoot.clientWidth;
    this.height = this.game.domRoot.clientHeight;

    // TODO: create camera
    // this.camera = new THREE.PerspectiveCamera(
    //     75, this.width / this.height, 1, 2000);
    // this.camera.position.x = this.cursor.x;
    // this.camera.position.y = 500;
    // this.camera.position.z = this.cursor.z + 250;

    // TODO: create scene
    // this.scene = new THREE.Scene();
    //
    // this.scene.fog = new THREE.Fog(0xF2F7FF, 1, 2000);
    //
    // this.scene.add(new THREE.AmbientLight(0x808080));
    //
    // const light = new THREE.DirectionalLight(0xFFFFFF, 1);
    // light.position.set(1, 1, 1);
    // this.scene.add(light);

    //
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setClearColor(this.scene.fog.color);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.autoClear = false;

    this.root.appendChild(this.renderer.domElement);

    super.onCreate();
  }

  /**
   * On start game
   */
  onStart() {
    // TODO: load textures
    // const textureLoader = new THREE.TextureLoader();
    // textureLoader.load(texSystem,
    //     (texture) => this.onLoadSystemImages(texture));
    // textureLoader.load(texTiles0,
    //     (texture) => this.onLoadTiles(texture));
    // textureLoader.load(texCharacters,
    //     (texture) => this.onLoadCharacters(texture));

    // TODO: loadCursor

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

  /**
   * On viewport resize
   */
  onResize() {
    this.width = this.game.domRoot.clientWidth;
    this.height = this.game.domRoot.clientHeight;

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.width, this.height);
  }
}

export {Graphic};
