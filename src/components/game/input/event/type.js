import EventGroup from './group.js';

export default {
  // container: [0, 100)
  CONTAINER_FULL_SCREEN: 1,
  CONTAINER_RESIZE: 2,
  CONTAINER_MAXIMIZE: 3,
  CONTAINER_MINIMIZE: 4,

  // keyboard: [100, 200)
  KEYBOARD_DOWN: 100,
  KEYBOARD_UP: 101,
  KEYBOARD_PRESS: 102,

  // mouse: [200, 300)
  MOUSE_MOVE: 200,
  MOUSE_DOWN: 201,
  MOUSE_UP: 202,
  MOUSE_CLICK: 203,
  MOUSE_WHEEL_MOVE: 204,

  // gamepad: [300, 400)

  properties: new Map([
    [1, {
      name: 'container full screen',
      group: EventGroup.CONTAINER,
      metaData: {
        'enable': 'boolean',
      },
    }],
    [2, {
      name: 'container resize',
      group: EventGroup.CONTAINER,
      metaData: {
        'width': 'number',
        'height': 'number',
      },
    }],
    [3, {
      name: 'container maximize',
      group: EventGroup.CONTAINER,
      metaData: {
        'enable': 'boolean',
      },
    }],
    [4, {
      name: 'container minimize',
      group: EventGroup.CONTAINER,
      metaData: {
        'enable': 'boolean',
      },
    }],
    [100, {
      name: 'keyboard down',
      group: EventGroup.KEYBOARD,
      metaData: {
        'code': 'string',
      },
    }],
    [101, {
      name: 'keyboard up',
      group: EventGroup.KEYBOARD,
      metaData: {
        'code': 'string',
      },
    }],
    [102, {
      name: 'keyboard press',
      group: EventGroup.KEYBOARD,
      metaData: {
        'code': 'string',
        'key': 'string',
      },
    }],
    [200, {
      name: 'mouse move',
      group: EventGroup.MOUSE,
      metaData: {
        'x': 'number',
        'y': 'number',
        'movementX': 'number',
        'movementY': 'number',
      },
    }],
    [201, {
      name: 'mouse down',
      group: EventGroup.MOUSE,
      metaData: {
        'button': 'number',
      },
    }],
    [202, {
      name: 'mouse up',
      group: EventGroup.MOUSE,
      metaData: {
        'button': 'number',
      },
    }],
    [203, {
      name: 'mouse click',
      group: EventGroup.MOUSE,
      metaData: {
        'button': 'number',
      },
    }],
    [204, {
      name: 'mouse wheel move',
      group: EventGroup.MOUSE,
      metaData: {
        'delta': 'number',
      },
    }],
  ]),
};
