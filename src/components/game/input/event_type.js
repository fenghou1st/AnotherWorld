import EventGroup from './event_group.js';

export default {
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

  // container: [1000, 1100)
  CONTAINER_FULL_SCREEN: 1000,
  CONTAINER_RESIZE: 1001,
  CONTAINER_MAXIMIZE: 1002,
  CONTAINER_MINIMIZE: 1003,

  // GUI: [1100, 1200)
  GUI_VISIBILITY: 1100,

  // game: [1200, 1300)
  GAME_CREATE: 1200,
  GAME_START: 1201,
  GAME_RESUME: 1202,
  GAME_PAUSE: 1203,
  GAME_STOP: 1204,
  GAME_DESTROY: 1205,

  properties: new Map([
    [100, {name: 'keyboard down', group: EventGroup.KEYBOARD}],
    [101, {name: 'keyboard up', group: EventGroup.KEYBOARD}],
    [102, {name: 'keyboard press', group: EventGroup.KEYBOARD}],
    [200, {name: 'mouse move', group: EventGroup.MOUSE}],
    [201, {name: 'mouse down', group: EventGroup.MOUSE}],
    [202, {name: 'mouse up', group: EventGroup.MOUSE}],
    [203, {name: 'mouse click', group: EventGroup.MOUSE}],
    [204, {name: 'mouse wheel move', group: EventGroup.MOUSE}],
    [1000, {name: 'container full screen', group: EventGroup.CONTAINER}],
    [1001, {name: 'container resize', group: EventGroup.CONTAINER}],
    [1002, {name: 'container maximize', group: EventGroup.CONTAINER}],
    [1003, {name: 'container minimize', group: EventGroup.CONTAINER}],
    [1100, {name: 'in-game GUI visibility', group: EventGroup.GUI}],
    [1200, {name: 'game create', group: EventGroup.GAME}],
    [1201, {name: 'game start', group: EventGroup.GAME}],
    [1202, {name: 'game resume', group: EventGroup.GAME}],
    [1203, {name: 'game pause', group: EventGroup.GAME}],
    [1204, {name: 'game stop', group: EventGroup.GAME}],
    [1205, {name: 'game destroy', group: EventGroup.GAME}],
  ]),
};
