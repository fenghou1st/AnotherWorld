export default {
  // [0, 1000)
  CHARACTER: {
    CHANGE_MOVE_TYPE: 1,
    CHANGE_DIRECTION: 2,
    MOVE: 3,
    JUMP: 4,
    INSPECT: 5,
    TALK: 6,
    ATTACK: 7,
    PICK_UP: 8,
    DEFAULT_MISC_INTERACT: 9,
  },
  // [1000, 2000)
  WORLD: {
  },

  properties: new Map([
    [1, {
      name: 'change move type',
      metaData: {
        'moveType': 'number',
      },
    }],
    [2, {
      name: 'change direction',
      metaData: {
        'direction': 'Direction',
      },
    }],
    [3, {
      name: 'move',
      metaData: {
        'direction': 'Direction',
        'moveType': 'number',
        'intensity': 'number',
      },
    }],
    [4, {
      name: 'jump',
      metaData: {
        'direction': 'Direction',
        'intensity': 'number',
      },
    }],
    [5, {
      name: 'inspect',
      metaData: {
        'target': 'number',
      },
    }],
    [6, {
      name: 'talk',
      metaData: {
        'target': 'number',
        'attitude': 'number',
      },
    }],
    [7, {
      name: 'attack',
      metaData: {
        'direction': 'Direction',
        'attackType': 'number',
        'intensity': 'number',
      },
    }],
    [8, {
      name: 'pick up',
      metaData: {
        'target': 'number',
      },
    }],
    [9, {
      name: 'default misc interact',
      metaData: {
        'target': 'number',
      },
    }],
  ]),
};
