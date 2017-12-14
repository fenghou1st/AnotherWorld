import React, {Component} from 'react';
import Stats from 'vendor/stats.js';

import styles from './index.scss';
import * as Game from './game.js';

/**
 * Main component of the game
 */
class GameComponent extends Component {
  /**
   * Initialize data and events
   * @param {?Object} props
   */
  constructor(props) {
    super(props);

    /** @type {Element} */
    this.domRoot = null;
    /** @type {Stats} */
    this.stats = null;
    /** @type {Game} */
    this.game = null;
    /** @type {number} */
    this.animationFrame = null;

    this.animate = this.animate.bind(this);
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
  async start() {
    await this.game.start();
    await this.resume();
  }

  /**
   * Resume the game
   */
  async resume() {
    await this.game.resume();
    this.animate();
  }

  /**
   * Pause the game
   */
  async pause() {
    window.cancelAnimationFrame(this.animationFrame);
    await this.game.pause();
  }

  /**
   * Stop the game
   */
  async stop() {
    await this.game.stop();
  }

  /**
   * A single frame of the game
   */
  animate() {
    this.stats.begin();
    this.game.processLogic();
    this.game.processOutput();
    this.stats.end();

    this.animationFrame = window.requestAnimationFrame(this.animate);
  }

  /**
   * Calculate dimensions
   */
  calcDimensions() {
    this.game.output.onResize();
  }

  /**
   * On document mouse move
   * @param {Object} event
   */
  onDocumentMouseMove(event) {
    // this.mouseX = event.clientX;
    // this.mouseY = event.clientY;
  }

  /**
   * On document key down
   * @param {Object} event
   */
  onDocumentKeyDown(event) {
    this.game.input.processEvent(
        new Game.Event(Game.EventType.KEYBOARD_DOWN, {code: event.code})
    );
  }

  /**
   * Render the game component
   * @return {*}
   */
  render() {
    return (
        <div className={styles.game}
             ref={(element) => this.domRoot = element} />
    );
  }

  /**
   * Initialize the components, start the game
   */
  async componentDidMount() {
    this.stats = new Stats();
    this.stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    this.domRoot.appendChild(this.stats.dom);

    this.game = new Game.Game(this.domRoot);

    await this.game.create();

    this.initEvents();

    await this.start();
  }
}

export {GameComponent};
