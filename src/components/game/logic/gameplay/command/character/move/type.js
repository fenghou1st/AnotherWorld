export default {
  STAND: 1,
  CROUCH: 2,
  CRAWL: 3,
  FLY: 4,
  RIDE: 5,

  properties: new Map([
    [1, {name: 'stand', speedRatio: 1.0}],
    [2, {name: 'crouch', speedRatio: 0.5}],
    [3, {name: 'crawl', speedRatio: 0.1}],
    [4, {name: 'fly', peedRatio: 0.0}],
    [5, {name: 'ride', speedRatio: 0.0}],
  ]),
};
