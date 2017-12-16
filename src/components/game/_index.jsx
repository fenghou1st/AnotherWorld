// Requirements ////////////////////////////////////////////////////////////////
import React, {Component} from 'react';
import * as THREE from 'three';
import Stats from 'vendor/stats.js';

// import characterPresentations from 'assets/data/presentations.json';
// import characters from 'assets/data/index.json';
// import systemImages from 'assets/data/system_images.json';
// import terrains from 'assets/data/terrains.json';
// import texCharacters from 'assets/textures/characters.png';
// import texSystem from 'assets/textures/system.png';
// import texTiles0 from 'assets/textures/tiles0.png';

import styles from './index.scss';
import PresentCharacter from './logic/gameplay/character/character';

// Definitions /////////////////////////////////////////////////////////////////

// Classes /////////////////////////////////////////////////////////////////////

/**
 * Main component of the game
 */
export default class _GameComponent extends Component {
  // /**
  //  * Initialize data and events
  //  * @param {?Object} props
  //  */
  // constructor(props) {
  //   super(props);
  //
  //   this.root = null;
  //   this.stats = null;
  //   this.width = null;
  //   this.height = null;
  //
  //   this.camera = null;
  //   this.scene = null;
  //   this.renderer = null;
  //   this.geometry = null;
  //   this.material = null;
  //
  //   this.cursor = null;
  //   this.cursorTile = null;
  //
  //   this.terrainId = 16;
  //   this.sceneRows = terrains[this.terrainId].rows;
  //   this.sceneCols = terrains[this.terrainId].cols;
  //   this.tileInputWidth = 16;
  //   this.tileInputHeight = 16;
  //   this.tileInGameWidth = 128;
  //   this.tileInGameHeight = 128;
  //   this.sceneXMin = 0;
  //   this.sceneXMax = this.sceneCols * this.tileInGameWidth;
  //   this.sceneZMin = 0;
  //   this.sceneZMax = this.sceneRows * this.tileInGameHeight;
  //
  //   this.presentChars = [];
  //   this.presentCharMeshes = [];
  //
  //   this.initData();
  //
  //   this.animationFrame = null;
  //   this.initializeList = {
  //     onLoadSystemImages: false,
  //     onLoadTiles: false,
  //     onLoadCharacters: false,
  //   };
  //   this.mouseX = null;
  //   this.mouseY = null;
  //   this.currTime = null; // unit: ms
  //   this.deltaTime = null; // unit: ms
  //   this.initEvents();
  //
  //   //
  //   this.initElements = this.initElements.bind(this);
  //   this.animate = this.animate.bind(this);
  // }

  // /**
  //  * Initialize DOM elements
  //  * @param {Object} root - root element
  //  */
  // initElements(root) {
  //   this.root = root;
  //
  //   this.stats = new Stats();
  //   this.stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
  //   this.root.appendChild(this.stats.dom);
  //
  //   this.width = this.root.clientWidth;
  //   this.height = this.root.clientHeight;
  //
  //   //
  //   this.renderer = new THREE.WebGLRenderer({antialias: true});
  //   this.renderer.setClearColor(this.scene.fog.color);
  //   this.renderer.setPixelRatio(window.devicePixelRatio);
  //   this.renderer.setSize(this.width, this.height);
  //   this.renderer.autoClear = false;
  //
  //   this.root.appendChild(this.renderer.domElement);
  // }

  // /**
  //  * Initialize data
  //  */
  // initData() {
  //   this.loadPresentCharacters();
  //
  //   //
  //   if (this.presentChars.length > 0) {
  //     this.cursor = new THREE.Vector3(
  //         (this.presentChars[0].location.x + 0.5) * this.tileInGameWidth,
  //         0,
  //         (this.presentChars[0].location.y + 0.5) * this.tileInGameHeight);
  //   } else {
  //     this.cursor = new THREE.Vector3(
  //         (Math.floor(this.sceneRows / 2) + 0.5) * this.tileInGameWidth,
  //         0,
  //         (Math.floor(this.sceneCols / 2) + 0.5) * this.tileInGameHeight);
  //   }
  //
  //   this.camera = new THREE.PerspectiveCamera(
  //       75, this.width / this.height, 1, 2000);
  //   this.camera.position.x = this.cursor.x;
  //   this.camera.position.y = 500;
  //   this.camera.position.z = this.cursor.z + 250;
  //
  //   //
  //   this.scene = new THREE.Scene();
  //
  //   this.scene.fog = new THREE.Fog(0xF2F7FF, 1, 2000);
  //
  //   this.scene.add(new THREE.AmbientLight(0x808080));
  //
  //   const light = new THREE.DirectionalLight(0xFFFFFF, 1);
  //   light.position.set(1, 1, 1);
  //   this.scene.add(light);
  //
  //   //
  //   const textureLoader = new THREE.TextureLoader();
  //   textureLoader.load(texSystem,
  //       (texture) => this.onLoadSystemImages(texture));
  //   textureLoader.load(texTiles0,
  //       (texture) => this.onLoadTiles(texture));
  //   textureLoader.load(texCharacters,
  //       (texture) => this.onLoadCharacters(texture));
  // }

  // /**
  //  * Initialize events
  //  */
  // initEvents() {
  //   window.addEventListener('resize',
  //       () => this.calcDimensions());
  //
  //   document.addEventListener('mousemove',
  //       (event) => this.onDocumentMouseMove(event),
  //       false);
  //
  //   document.addEventListener('keydown',
  //       (event) => this.onDocumentKeyDown(event),
  //       false);
  // }
  //
  // /**
  //  * Start the game
  //  */
  // start() {
  //   this.animate();
  // }
  //
  // /**
  //  * Pause the game
  //  */
  // pause() {
  //   window.cancelAnimationFrame(this.animationFrame);
  // }
  //
  // /**
  //  * A single frame of the game
  //  */
  // animate() {
  //   this.stats.begin();
  //   this.renderGame();
  //   this.stats.end();
  //
  //   this.animationFrame = window.requestAnimationFrame(this.animate);
  // }

  /**
   * Render the game
   */
  renderGame() {
    if (!this.isInitialized()) return;

    //
    this.camera.lookAt(this.cursor);

    //
    this.updatePresentCharacters();

    //
    this.renderer.clear();
    this.renderer.setScissorTest(true);

    this.renderer.setScissor(0, 0, this.width, this.height);
    this.renderer.render(this.scene, this.camera);

    this.renderer.setScissorTest(false);
  }

  // /**
  //  * Check whether all of the objects in the initialize-list are initialized
  //  * @return {boolean}
  //  */
  // isInitialized() {
  //   return !Object.values(this.initializeList).includes(false);
  // }

  /**
   * Update present characters
   */
  updatePresentCharacters() {
    for (let i = 0; i < this.presentChars.length; ++i) {
      const char = characters[this.presentChars[i].characterId];
      const present = characterPresentations[char['presentation_id']];
      const action = this.presentChars[i].action;

      //
      let actionTotalTime = 0;
      for (let j = 0; j < present.actions[action].length; ++j) {
        actionTotalTime += present.actions[action][j].duration;
      }

      const animationTime = this.currTime % actionTotalTime;
      let animationStep = 0;
      let testAnimationTime = 0;
      for (let j = 0; j < present.actions[action].length; ++j) {
        testAnimationTime += present.actions[action][j].duration;
        if (animationTime < testAnimationTime) {
          animationStep = j;
          break;
        }
      }

      //
      const textureId = present.actions[action][animationStep]['texture_id'];
      // const textureGroup = present['texture_group'];
      const textureRect = present.textures[textureId];

      const texture = this.presentCharMeshes[i].material.map;
      const geometry = this.presentCharMeshes[i].geometry;
      const epsilonU = 1.0 / texture.image.width * 0.1;
      const epsilonV = 1.0 / texture.image.height * 0.1;

      const x01 = textureRect[0] / texture.image.width + epsilonU;
      const x23 = (textureRect[0] + textureRect[2]) / texture.image.width
          - epsilonU;
      const y03 = 1 - textureRect[1] / texture.image.height - epsilonV;
      const y12 = 1 - (textureRect[1] + textureRect[3]) / texture.image.height
          + epsilonV;

      const rect = [
        new THREE.Vector2(x01, y03),
        new THREE.Vector2(x01, y12),
        new THREE.Vector2(x23, y12),
        new THREE.Vector2(x23, y03),
      ];

      geometry.faceVertexUvs[0][0][0].set(rect[0].x, rect[0].y);
      geometry.faceVertexUvs[0][0][1].set(rect[1].x, rect[1].y);
      geometry.faceVertexUvs[0][0][2].set(rect[3].x, rect[3].y);
      geometry.faceVertexUvs[0][1][0].set(rect[1].x, rect[1].y);
      geometry.faceVertexUvs[0][1][1].set(rect[2].x, rect[2].y);
      geometry.faceVertexUvs[0][1][2].set(rect[3].x, rect[3].y);
      geometry.uvsNeedUpdate = true;
    }
  }

  // /**
  //  * On load system images
  //  * @param {Texture} texture
  //  */
  // onLoadSystemImages(texture) {
  //   texture.magFilter = THREE.NearestFilter;
  //   texture.minFilter = THREE.NearestFilter;
  //
  //   const material = new THREE.MeshBasicMaterial({
  //     map: texture,
  //     transparent: true,
  //   });
  //
  //   this.loadCursor(material, systemImages.cursor);
  //
  //   this.initializeList.onLoadSystemImages = true;
  // }

  // /**
  //  * On load tiles
  //  * @param {Texture} texture
  //  */
  // onLoadTiles(texture) {
  //   texture.magFilter = THREE.NearestFilter;
  //   texture.minFilter = THREE.NearestFilter;
  //
  //   const material = new THREE.MeshBasicMaterial({map: texture});
  //
  //   const columns = Math.floor(texture.image.width / this.tileInputWidth);
  //   const rows = Math.floor(texture.image.height / this.tileInputHeight);
  //   const unitWidth = this.tileInputWidth / texture.image.width;
  //   const unitHeight = this.tileInputHeight / texture.image.height;
  //   const epsilonU = 1.0 / texture.image.width * 0.1;
  //   const epsilonV = 1.0 / texture.image.height * 0.1;
  //
  //   const tiles = terrains[this.terrainId]['tiles'];
  //
  //   for (let i = 0; i < this.sceneRows; ++i) {
  //     for (let j = 0; j < this.sceneCols; ++j) {
  //       const geometry = new THREE.PlaneGeometry(
  //           this.tileInGameWidth, this.tileInGameHeight);
  //
  //       const tileId = tiles[i * this.sceneCols + j];
  //       const columnId = Math.floor(tileId % columns);
  //       const rowId = Math.floor(tileId / columns);
  //
  //       const x01 = columnId * unitWidth + epsilonU;
  //       const x23 = (columnId + 1) * unitWidth - epsilonU;
  //       const y03 = (rows - rowId) * unitHeight - epsilonV;
  //       const y12 = (rows - rowId - 1) * unitHeight + epsilonV;
  //
  //       const rect = [
  //         new THREE.Vector2(x01, y03),
  //         new THREE.Vector2(x01, y12),
  //         new THREE.Vector2(x23, y12),
  //         new THREE.Vector2(x23, y03),
  //       ];
  //
  //       geometry.faceVertexUvs[0] = [];
  //       geometry.faceVertexUvs[0][0] = [rect[0], rect[1], rect[3]];
  //       geometry.faceVertexUvs[0][1] = [rect[1], rect[2], rect[3]];
  //
  //       //
  //       const tile = new THREE.Mesh(geometry, material);
  //
  //       tile.position.x = (j + 1 / 2) * this.tileInGameWidth;
  //       tile.position.y = 0;
  //       tile.position.z = (i + 1 / 2) * this.tileInGameHeight;
  //
  //       tile.rotation.x = - Math.PI / 2;
  //
  //       this.scene.add(tile);
  //     }
  //   }
  //
  //   this.initializeList.onLoadTiles = true;
  // }

  // /**
  //  * On load characters
  //  * @param {Texture} texture
  //  */
  // onLoadCharacters(texture) {
  //   texture.magFilter = THREE.NearestFilter;
  //   texture.minFilter = THREE.NearestFilter;
  //
  //   const material = new THREE.MeshBasicMaterial({
  //     map: texture,
  //     transparent: true,
  //   });
  //
  //   const epsilonU = 1.0 / texture.image.width * 0.1;
  //   const epsilonV = 1.0 / texture.image.height * 0.1;
  //
  //   for (let i = 0; i < this.presentChars.length; ++i) {
  //     const char = characters[this.presentChars[i].characterId];
  //     const present = characterPresentations[char['presentation_id']];
  //     const location = this.presentChars[i].location;
  //     const action = this.presentChars[i].action;
  //
  //     const textureId = present.actions[action][0]['texture_id'];
  //     // const textureGroup = present['texture_group'];
  //     const textureRect = present.textures[textureId];
  //
  //     //
  //     const geometry = new THREE.PlaneGeometry(
  //         this.tileInGameWidth * char.size[0] / 100.0,
  //         this.tileInGameHeight * char.size[1] / 100.0);
  //
  //     const x01 = textureRect[0] / material.map.image.width + epsilonU;
  //     const x23 = (textureRect[0] + textureRect[2]) / material.map.image.width
  //         - epsilonU;
  //     const y03 = 1 - textureRect[1] / material.map.image.height - epsilonV;
  //     const y12 = 1
  //         - (textureRect[1] + textureRect[3]) / material.map.image.height
  //         + epsilonV;
  //
  //     const rect = [
  //       new THREE.Vector2(x01, y03),
  //       new THREE.Vector2(x01, y12),
  //       new THREE.Vector2(x23, y12),
  //       new THREE.Vector2(x23, y03),
  //     ];
  //
  //     geometry.faceVertexUvs[0] = [];
  //     geometry.faceVertexUvs[0][0] = [rect[0], rect[1], rect[3]];
  //     geometry.faceVertexUvs[0][1] = [rect[1], rect[2], rect[3]];
  //
  //     //
  //     const mesh = new THREE.Mesh(geometry, material);
  //
  //     mesh.position.x = (location.x + 1 / 2) * this.tileInGameWidth;
  //     mesh.position.y = this.tileInGameHeight / 2;
  //     mesh.position.z = (location.y + 1 / 2) * this.tileInGameHeight;
  //
  //     mesh.rotation.x = - Math.PI / 4;
  //
  //     //
  //     this.presentCharMeshes[i] = mesh;
  //     this.scene.add(mesh);
  //   }
  //
  //   this.initializeList.onLoadCharacters = true;
  // }

  // /**
  //  * Load cursor
  //  * @param {MeshBasicMaterial} material
  //  * @param {Array} textureRect
  //  */
  // loadCursor(material, textureRect) {
  //   const geometry = new THREE.PlaneGeometry(this.tileInGameWidth, this.tileInGameHeight);
  //
  //   const x01 = textureRect[0] / material.map.image.width;
  //   const x23 = (textureRect[0] + textureRect[2]) / material.map.image.width;
  //   const y03 = 1 - textureRect[1] / material.map.image.height;
  //   const y12 = 1
  //       - (textureRect[1] + textureRect[3]) / material.map.image.height;
  //
  //   const rect = [
  //     new THREE.Vector2(x01, y03),
  //     new THREE.Vector2(x01, y12),
  //     new THREE.Vector2(x23, y12),
  //     new THREE.Vector2(x23, y03),
  //   ];
  //
  //   geometry.faceVertexUvs[0] = [];
  //   geometry.faceVertexUvs[0][0] = [rect[0], rect[1], rect[3]];
  //   geometry.faceVertexUvs[0][1] = [rect[1], rect[2], rect[3]];
  //
  //   //
  //   this.cursorTile = new THREE.Mesh(geometry, material);
  //
  //   this.cursorTile.position.x = this.cursor.x;
  //   this.cursorTile.position.y = 1;
  //   this.cursorTile.position.z = this.cursor.z;
  //
  //   this.cursorTile.rotation.x = - Math.PI / 2;
  //
  //   this.scene.add(this.cursorTile);
  // }

  // /**
  //  * Load present characters
  //  */
  // loadPresentCharacters() {
  //   this.presentChars = [];
  //   this.presentChars.push(new Character(40, 4, 10));
  //   this.presentChars.push(new Character(42, 4, 11));
  //   this.presentChars.push(new Character(18, 4, 12));
  //   this.presentChars.push(new Character(36, 4, 13));
  //   this.presentChars.push(new Character(34, 4, 14));
  //
  //   this.presentChars.push(new Character(37, 6, 2));
  //   this.presentChars.push(new Character(31, 5, 2));
  //   this.presentChars.push(new Character(31, 7, 2));
  //   this.presentChars.push(new Character(43, 6, 3));
  //   this.presentChars.push(new Character(25, 3, 6));
  //   this.presentChars.push(new Character(25, 9, 6));
  //   this.presentChars.push(new Character(7, 8, 10));
  //   this.presentChars.push(new Character(7, 8, 11));
  //   this.presentChars.push(new Character(7, 8, 12));
  //   this.presentChars.push(new Character(7, 8, 13));
  //   this.presentChars.push(new Character(7, 8, 14));
  // }
  //
  // /**
  //  * Calculate dimensions
  //  */
  // calcDimensions() {
  //   this.width = this.root.clientWidth;
  //   this.height = this.root.clientHeight;
  //
  //   this.camera.aspect = this.width / this.height;
  //   this.camera.updateProjectionMatrix();
  //
  //   this.renderer.setSize(this.width, this.height);
  // }
  //
  // /**
  //  * On document mouse move
  //  * @param {Object} event
  //  */
  // onDocumentMouseMove(event) {
  //   this.mouseX = event.clientX;
  //   this.mouseY = event.clientY;
  // }

  /**
   * On document key down
   * @param {Object} event
   */
  onDocumentKeyDown(event) {
    switch (event.which) {
      case 38: // cursor up
        if (this.cursor.z - this.tileInGameHeight >= this.sceneZMin) {
          this.cursor.z -= this.tileInGameHeight;
          this.camera.position.z -= this.tileInGameHeight;
          this.cursorTile.position.z = this.cursor.z;
        }
        break;
      case 40: // cursor down
        if (this.cursor.z + this.tileInGameHeight < this.sceneZMax) {
          this.cursor.z += this.tileInGameHeight;
          this.camera.position.z += this.tileInGameHeight;
          this.cursorTile.position.z = this.cursor.z;
        }
        break;
      case 37: // cursor left
        if (this.cursor.x - this.tileInGameWidth >= this.sceneXMin) {
          this.cursor.x -= this.tileInGameWidth;
          this.camera.position.x -= this.tileInGameWidth;
          this.cursorTile.position.x = this.cursor.x;
        }
        break;
      case 39: // cursor right
        if (this.cursor.x + this.tileInGameWidth < this.sceneXMax) {
          this.cursor.x += this.tileInGameWidth;
          this.camera.position.x += this.tileInGameWidth;
          this.cursorTile.position.x = this.cursor.x;
        }
        break;
      case 33: // page up
        if (this.camera.position.y + 100 <= 1000) {
          this.camera.position.y += 100;
        }
        break;
      case 34: // page down
        if (this.camera.position.y - 100 >= 100) {
          this.camera.position.y -= 100;
        }
        break;
    }
  }
  //
  // /**
  //  * @return {*}
  //  */
  // render() {
  //   return (
  //       <div className={styles.game}
  //            ref={(element) => this.initElements(element)} />
  //   );
  // }
  //
  // /**
  //  * Start the game after DOM created
  //  */
  // componentDidMount() {
  //   this.start();
  // }
}

// Functions ///////////////////////////////////////////////////////////////////

// Initializations /////////////////////////////////////////////////////////////
