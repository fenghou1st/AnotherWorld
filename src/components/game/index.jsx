// Requirements ////////////////////////////////////////////////////////////////
import React, {Component} from 'react';
import Stats from 'vendor/stats.js';

import styles from './index.scss';

// Definitions /////////////////////////////////////////////////////////////////

// Classes /////////////////////////////////////////////////////////////////////

/**
 * Main component of the game
 */
export default class GameComponent extends Component {
  /**
   * Initialize data and events
   * @param {?Object} props
   */
  constructor(props) {
    super(props);

    this.root = null;
    this.stats = null;

    this.width = null;
    this.height = null;
    this.mouseX = null;
    this.mouseY = null;

    this.animationFrame = null;

    this.initEvents();

    //
    this.initElements = this.initElements.bind(this);
    this.animate = this.animate.bind(this);
  }

  /**
   * Initialize DOM elements
   * @param {Object} root - root element
   */
  initElements(root) {
    this.root = root;

    this.stats = new Stats();
    this.stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    this.root.appendChild(this.stats.dom);

    this.width = this.root.clientWidth;
    this.height = this.root.clientHeight;

    // //
    // this.renderer = new THREE.WebGLRenderer({antialias: true});
    // this.renderer.setClearColor(this.scene.fog.color);
    // this.renderer.setPixelRatio(window.devicePixelRatio);
    // this.renderer.setSize(this.width, this.height);
    // this.renderer.autoClear = false;
    //
    // this.root.appendChild(this.renderer.domElement);
  }

  /**
   * Initialize events
   */
  initEvents() {
    window.addEventListener('resize',
        () => this.calcDimensions());

    document.addEventListener('mousemove',
        (event) => this.onDocumentMouseMove(event),
        false);

    document.addEventListener('keydown',
        (event) => this.onDocumentKeyDown(event),
        false);
  }

  /**
   * Start the game
   */
  start() {
    this.animate();
  }

  /**
   * Pause the game
   */
  pause() {
    window.cancelAnimationFrame(this.animationFrame);
  }

  /**
   * A single frame of the game
   */
  animate() {
    this.stats.begin();
    // this.renderGame();
    this.stats.end();

    this.animationFrame = window.requestAnimationFrame(this.animate);
  }

  /**
   * Calculate dimensions
   */
  calcDimensions() {
    this.width = this.root.clientWidth;
    this.height = this.root.clientHeight;

    // this.camera.aspect = this.width / this.height;
    // this.camera.updateProjectionMatrix();
    //
    // this.renderer.setSize(this.width, this.height);
  }

  /**
   * On document mouse move
   * @param {Object} event
   */
  onDocumentMouseMove(event) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  /**
   * On document key down
   * @param {Object} event
   */
  onDocumentKeyDown(event) {}

  /**
   * @return {*}
   */
  render() {
    return (
        <div className={styles.game}
             ref={(element) => this.initElements(element)} />
    );
  }

  /**
   * Start the game after DOM created
   */
  componentDidMount() {
    this.start();
  }
}

// Functions ///////////////////////////////////////////////////////////////////

// Initializations /////////////////////////////////////////////////////////////
