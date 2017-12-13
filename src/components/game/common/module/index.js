import Status from './status.js';

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
    this.status = Status.INITIALIZED;
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
  async onCreate() {
    await this.onCreateBegin();
    this.onCreateEnd();
  }

  /**
   * On game create: begin
   * @return {Promise}
   */
  onCreateBegin() {
    if (this.status !== Status.INITIALIZED
        && this.status !== Status.DESTROYED) {
      throw new Error(`Wrong module status: ${this.status}`);
    }

    this.status = Status.CREATING;

    const promises = [];
    for (let subModule of this.subModules) {
      subModule.synced = subModule.onCreate();
      promises.push(subModule.synced);
    }
    return Promise.all(promises);
  }

  /**
   * On game create: end
   */
  onCreateEnd() {
    this.status = Status.CREATED;
  }

  /**
   * On game start
   */
  async onStart() {
    await this.onStartBegin();
    this.onStartEnd();
  }

  /**
   * On game start: begin
   * @return {Promise}
   */
  onStartBegin() {
    if (this.status !== Status.CREATED
        && this.status !== Status.STOPPED) {
      throw new Error(`Wrong module status: ${this.status}`);
    }

    this.status = Status.STARTING;

    const promises = [];
    for (let subModule of this.subModules) {
      subModule.synced = subModule.onStart();
      promises.push(subModule.synced);
    }
    return Promise.all(promises);
  }

  /**
   * On game start: end
   */
  onStartEnd() {
    this.status = Status.STARTED;
  }

  /**
   * On game resume
   */
  async onResume() {
    await this.onResumeBegin();
    this.onResumeEnd();
  }

  /**
   * On game resume: begin
   * @return {Promise}
   */
  onResumeBegin() {
    if (this.status !== Status.STARTED
        && this.status !== Status.PAUSED) {
      throw new Error(`Wrong module status: ${this.status}`);
    }

    this.status = Status.RESUMING;

    const promises = [];
    for (let subModule of this.subModules) {
      subModule.synced = subModule.onResume();
      promises.push(subModule.synced);
    }
    return Promise.all(promises);
  }

  /**
   * On game resume: end
   */
  onResumeEnd() {
    this.status = Status.RESUMED;
  }

  /**
   * On game pause
   */
  async onPause() {
    await this.onPauseBegin();
    this.onPauseEnd();
  }

  /**
   * On game pause: begin
   * @return {Promise}
   */
  onPauseBegin() {
    if (this.status !== Status.RESUMED) {
      throw new Error(`Wrong module status: ${this.status}`);
    }

    this.status = Status.PAUSING;

    const promises = [];
    for (let subModule of this.subModules) {
      subModule.synced = subModule.onPause();
      promises.push(subModule.synced);
    }
    return Promise.all(promises);
  }

  /**
   * On game pause: end
   */
  onPauseEnd() {
    this.status = Status.PAUSED;
  }

  /**
   * On game stop
   */
  async onStop() {
    await this.onStopBegin();
    this.onStopEnd();
  }

  /**
   * On game stop: begin
   * @return {Promise}
   */
  onStopBegin() {
    if (this.status !== Status.PAUSED) {
      throw new Error(`Wrong module status: ${this.status}`);
    }

    this.status = Status.STOPPING;

    const promises = [];
    for (let subModule of this.subModules) {
      subModule.synced = subModule.onStop();
      promises.push(subModule.synced);
    }
    return Promise.all(promises);
  }

  /**
   * On game stop: end
   */
  onStopEnd() {
    this.status = Status.STOPPED;
  }

  /**
   * On game destroy
   */
  async onDestroy() {
    await this.onDestroyBegin();
    this.onDestroyEnd();
  }

  /**
   * On game destroy: begin
   * @return {Promise}
   */
  onDestroyBegin() {
    if (this.status !== Status.STOPPED) {
      throw new Error(`Wrong module status: ${this.status}`);
    }

    this.status = Status.DESTROYING;

    const promises = [];
    for (let subModule of this.subModules) {
      subModule.synced = subModule.onDestroy();
      promises.push(subModule.synced);
    }
    return Promise.all(promises);
  }

  /**
   * On game destroy: end
   */
  onDestroyEnd() {
    this.status = Status.DESTROYED;
  }
}
