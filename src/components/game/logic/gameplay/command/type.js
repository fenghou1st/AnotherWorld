import CommandGroup from './group.js';

export default {
  // character: [0, 1000)
  CHARACTER_CHANGE_MOVE_TYPE: 1,
  CHARACTER_CHANGE_DIRECTION: 2,
  CHARACTER_MOVE: 3,
  CHARACTER_JUMP: 4,
  CHARACTER_INSPECT: 5,
  CHARACTER_TALK: 6,
  CHARACTER_ATTACK: 7,
  CHARACTER_PICK_UP: 8,
  CHARACTER_DEFAULT_MISC_INTERACT: 9,

  // world: [1000, 2000)

  properties: new Map([
    [1, {
      name: 'change move type',
      group: CommandGroup.CHARACTER,
      metaData: {
        'sourceId': 'number',
        'moveType': 'number',
        'intensity': 'number',
      },
    }],
    [2, {
      name: 'change direction',
      group: CommandGroup.CHARACTER,
      metaData: {
        'sourceId': 'number',
        'direction': 'Direction',
        'intensity': 'number',
      },
    }],
    [3, {
      name: 'move',
      group: CommandGroup.CHARACTER,
      metaData: {
        'sourceId': 'number',
        'direction': 'Direction',
        'intensity': 'number',
      },
    }],
    [4, {
      name: 'jump',
      group: CommandGroup.CHARACTER,
      metaData: {
        'sourceId': 'number',
        'direction': 'Direction',
        'intensity': 'number',
      },
    }],
    [5, {
      name: 'inspect',
      group: CommandGroup.CHARACTER,
      metaData: {
        'sourceId': 'number',
        'targetId': 'number',
        'intensity': 'number',
      },
    }],
    [6, {
      name: 'talk',
      group: CommandGroup.CHARACTER,
      metaData: {
        'sourceId': 'number',
        'targetId': 'number',
        'attitude': 'number',
        'intensity': 'number',
      },
    }],
    [7, {
      name: 'attack',
      group: CommandGroup.CHARACTER,
      metaData: {
        'sourceId': 'number',
        'direction': 'Direction',
        'attackType': 'number',
        'intensity': 'number',
      },
    }],
    [8, {
      name: 'pick up',
      group: CommandGroup.CHARACTER,
      metaData: {
        'sourceId': 'number',
        'targetId': 'number',
        'intensity': 'number',
      },
    }],
    [9, {
      name: 'default misc interact',
      group: CommandGroup.CHARACTER,
      metaData: {
        'sourceId': 'number',
        'targetId': 'number',
        'intensity': 'number',
      },
    }],
  ]),
};
