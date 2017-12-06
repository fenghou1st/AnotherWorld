// import Command from './command';

/**
 * Gameplay logic
 */
class Gameplay {
  /**
   * Construct
   * @param {LogicManager} parent
   */
  constructor(parent) {
    this.parent = parent;
    this.commands = [];
  }

  /**
   * Initialize
   */
  init() {}

  /**
   * Add a gameplay command to the commands queue
   * @param {Command} command
   */
  addCommand(command) {
    this.commands.push(command);
  }

  /**
   * Process queued gameplay commands
   */
  processCommands() {
    let command = this.commands.shift();
    while (command !== undefined) {
      this._processCommand(command);
      command = this.commands.shift();
    }
  }

  /**
   * Process single gameplay command
   * @param {Command} command
   * @private
   */
  _processCommand(command) {
    // const type = command.type;
    // const data = command.data;
  }
}

export {Gameplay};
