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

    /** @type {Object} */
    this.systemObjects = require('assets/data/system_objects.json');
    /** @type {Mesh} */
    this.cursorMesh = null;

    /** @type {Array.<Object>} */
    this.charPresents = require('assets/data/character/presentations.json');
    /** @type {Map.<number, Mesh>} */
    this.charMeshes = new Map();
  }

  /**
   * On game create
   */
  async onCreate() {
    await this.onCreateBegin();

    this.width = this.game.domRoot.clientWidth;
    this.height = this.game.domRoot.clientHeight;

    this.camera = new THREE.PerspectiveCamera(
        75, this.width / this.height, 1, 2000);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xF2F7FF, 1, 2000);
    this.scene.add(new THREE.AmbientLight(0x808080));
    const light = new THREE.DirectionalLight(0xFFFFFF, 1);
    light.position.set(1, 1, 1);
    this.scene.add(light);

    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setClearColor(this.scene.fog.color);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.autoClear = false;
    this.game.domRoot.appendChild(this.renderer.domElement);

    this.onCreateEnd();
  }

  /**
   * On game start
   */
  async onStart() {
    await this.onStartBegin();

    //
    await this.game.logic.gui;
    const cursorPos = this.game.logic.gui.cursorPos;
    const cameraPos = this.game.logic.gui.cameraPos;

    this.camera.position = cameraPos;
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // load textures
    await this.game.logic.gameplay.world;
    await this._loadSystemMeshes(cursorPos);
    await this._loadTerrainMeshes();
    await this._loadCharacterMeshes();

    this.onStartEnd();
  }

  /**
   * Load system images
   *
   * Dependencies:
   *  - logic.gui: started
   *
   * @param {Position} cursorPos
   * @private
   */
  async _loadSystemMeshes(cursorPos) {
    const textureLoader = this.game.assets.texture;
    const texture = await textureLoader.loadByName('system');

    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });

    //
    const group = new THREE.Group();
    group.name = 'systemMeshes';

    this.cursorMesh = this._createCursorMesh(material, cursorPos);
    group.add(this.cursorMesh);

    this.scene.add(group);
  }

  /**
   * Load cursor
   * @param {MeshBasicMaterial} material
   * @param {Position} pos
   * @return {Mesh}
   */
  _createCursorMesh(material, pos) {
    /** @type {Array} */
    const texRect = this.systemObjects.cursor;

    const x01 = texRect[0] / material.map.image.width;
    const x23 = (texRect[0] + texRect[2]) / material.map.image.width;
    const y03 = 1 - texRect[1] / material.map.image.height;
    const y12 = 1 - (texRect[1] + texRect[3]) / material.map.image.height;

    const rect = [
      new THREE.Vector2(x01, y03),
      new THREE.Vector2(x01, y12),
      new THREE.Vector2(x23, y12),
      new THREE.Vector2(x23, y03),
    ];

    const tileInGameWidth = this.game.logic.gui.tileInGameWidth;
    const tileInGameHeight = this.game.logic.gui.tileInGameHeight;
    const geometry = new THREE.PlaneGeometry(tileInGameWidth, tileInGameHeight);

    geometry.faceVertexUvs[0] = [];
    geometry.faceVertexUvs[0][0] = [rect[0], rect[1], rect[3]];
    geometry.faceVertexUvs[0][1] = [rect[1], rect[2], rect[3]];

    //
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = pos.x;
    mesh.position.y = 1;
    mesh.position.z = pos.z;

    mesh.rotation.x = - Math.PI / 2;

    return mesh;
  }

  /**
   * Load terrain tiles
   *
   * Dependencies:
   *  - logic.gameplay.world: started
   *  - logic.gui: started
   *
   * @private
   */
  async _loadTerrainMeshes() {
    const textureLoader = this.game.assets.texture;
    const world = this.game.logic.gameplay.world;
    const tilesTextureName = world.scene.terrain.tilesTextureName;
    const texture = await textureLoader.loadByName(tilesTextureName);

    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;

    const material = new THREE.MeshBasicMaterial({map: texture});

    //
    const group = new THREE.Group();
    group.name = 'terrainMeshes';

    this._createTerrainMeshes(texture, material, group);

    this.scene.add(group);
  }

  /**
   * Create terrain tiles, and put them into the group
   * @param {Texture} texture
   * @param {MeshBasicMaterial} material
   * @param {Group} group
   * @private
   */
  _createTerrainMeshes(texture, material, group) {
    const tileInputWidth = this.game.logic.gui.tileInputWidth;
    const tileInputHeight = this.game.logic.gui.tileInputHeight;

    const columns = Math.floor(texture.image.width / tileInputWidth);
    const rows = Math.floor(texture.image.height / tileInputHeight);
    const unitWidth = tileInputWidth / texture.image.width;
    const unitHeight = tileInputHeight / texture.image.height;
    const epsilonU = 1.0 / texture.image.width * 0.1;
    const epsilonV = 1.0 / texture.image.height * 0.1;

    const world = this.game.logic.gameplay.world;
    const tiles = world.scene.terrain.tiles;
    const sceneRows = this.game.logic.gui.sceneRows;
    const sceneCols = this.game.logic.gui.sceneCols;
    const tileInGameWidth = this.game.logic.gui.tileInGameWidth;
    const tileInGameHeight = this.game.logic.gui.tileInGameHeight;

    for (let i = 0; i < sceneRows; ++i) {
      for (let j = 0; j < sceneCols; ++j) {
        const geometry = new THREE.PlaneGeometry(
            tileInGameWidth, tileInGameHeight);

        const tileId = tiles[i * sceneCols + j];
        const columnId = Math.floor(tileId % columns);
        const rowId = Math.floor(tileId / columns);

        const x01 = columnId * unitWidth + epsilonU;
        const x23 = (columnId + 1) * unitWidth - epsilonU;
        const y03 = (rows - rowId) * unitHeight - epsilonV;
        const y12 = (rows - rowId - 1) * unitHeight + epsilonV;

        const rect = [
          new THREE.Vector2(x01, y03),
          new THREE.Vector2(x01, y12),
          new THREE.Vector2(x23, y12),
          new THREE.Vector2(x23, y03),
        ];

        geometry.faceVertexUvs[0] = [];
        geometry.faceVertexUvs[0][0] = [rect[0], rect[1], rect[3]];
        geometry.faceVertexUvs[0][1] = [rect[1], rect[2], rect[3]];

        //
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.x = (j + 1 / 2) * tileInGameWidth;
        mesh.position.y = 0;
        mesh.position.z = (i + 1 / 2) * tileInGameHeight;

        mesh.rotation.x = - Math.PI / 2;

        group.add(mesh);
      }
    }
  }

  /**
   * Load characters
   *
   * Dependencies:
   *  - logic.gameplay.world: started
   *
   * @private
   */
  async _loadCharacterMeshes() {
    const textureLoader = this.game.assets.texture;
    const texture = await textureLoader.loadByName('characters');

    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });

    //
    const group = new THREE.Group();
    group.name = 'characterMeshes';

    this._createCharacterMeshes(texture, material, group);

    this.scene.add(group);
  }

  /**
   * Create terrain tiles, and put them into the group
   * @param {Texture} texture
   * @param {MeshBasicMaterial} material
   * @param {Group} group
   * @private
   */
  _createCharacterMeshes(texture, material, group) {
    const materialWidth = material.map.image.width;
    const materialHeight = material.map.image.height;
    const epsilonU = 1.0 / texture.image.width * 0.1;
    const epsilonV = 1.0 / texture.image.height * 0.1;

    const charsData = this.game.logic.gameplay.world.charsData;
    const sceneChars = this.game.logic.gameplay.world.scene.characters;
    const tileInGameWidth = this.game.logic.gui.tileInGameWidth;
    const tileInGameHeight = this.game.logic.gui.tileInGameHeight;

    sceneChars.forEach((char) => {
      const charData = charsData[char.id];
      const charPresent = this.charPresents[charData['presentation_id']];

      const textureId = charPresent.actions[char.action][0]['texture_id'];
      // const textureGroup = charPresent['texture_group'];
      const texRect = charPresent.textures[textureId];

      //
      const geometry = new THREE.PlaneGeometry(
          tileInGameWidth * charData['size'][0] / 100.0,
          tileInGameHeight * charData['size'][1] / 100.0,
      );

      const x01 = texRect[0] / materialWidth + epsilonU;
      const x23 = (texRect[0] + texRect[2]) / materialWidth - epsilonU;
      const y03 = 1 - texRect[1] / materialHeight - epsilonV;
      const y12 = 1 - (texRect[1] + texRect[3]) / materialHeight + epsilonV;

      const rect = [
        new THREE.Vector2(x01, y03),
        new THREE.Vector2(x01, y12),
        new THREE.Vector2(x23, y12),
        new THREE.Vector2(x23, y03),
      ];

      geometry.faceVertexUvs[0] = [];
      geometry.faceVertexUvs[0][0] = [rect[0], rect[1], rect[3]];
      geometry.faceVertexUvs[0][1] = [rect[1], rect[2], rect[3]];

      //
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (char.location.x + 1 / 2) * tileInGameWidth;
      mesh.position.y = tileInGameHeight / 2;
      mesh.position.z = (char.location.y + 1 / 2) * tileInGameHeight;

      mesh.rotation.x = - Math.PI / 4;

      //
      this.charMeshes.set(char.id, mesh);
      group.add(mesh);
    });
  }

  /**
   * On game stop
   */
  async onStop() {
    await this.onStopBegin();

    // remove character meshes from the scene
    this.scene.children
    .filer((child) => child.name === 'characterMeshes')
    .map((child) => this.scene.remove(child));

    this.charMeshes = null;

    // remove terrain meshes from the scene
    this.scene.children
    .filer((child) => child.name === 'terrainMeshes')
    .map((child) => this.scene.remove(child));

    // remove system meshes from the scene
    this.scene.children
    .filer((child) => child.name === 'systemMeshes')
    .map((child) => this.scene.remove(child));

    this.cursorMesh = null;

    this.onStopEnd();
  }

  /**
   * On game destroy
   */
  async onDestroy() {
    await this.onDestroyBegin();

    this.game.domRoot.removeChild(this.renderer.domElement);

    this.renderer = null;
    this.scene = null;
    this.camera = null;

    this.height = null;
    this.width = null;

    this.onDestroyEnd();
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
