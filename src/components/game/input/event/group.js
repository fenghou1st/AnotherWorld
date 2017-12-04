export default {
  KEYBOARD: 1,
  MOUSE: 2,
  GAMEPAD: 3,
  CONTAINER: 4,
  GUI: 5,
  GAME: 6,

  properties: new Map([
    [1, {name: 'keyboard'}],
    [2, {name: 'mouse'}],
    [3, {name: 'gamepad'}],
    [4, {name: 'container'}],
    [5, {name: 'gui'}],
    [6, {name: 'game'}],
  ]),
};
