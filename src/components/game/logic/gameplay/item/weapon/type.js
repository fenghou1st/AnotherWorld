/**
 * To generate these types, you only need to remove the non-weapon-attacks
 * from the attack types
 */
export default {
  // hand.1h.melee.blunt: [0, 100)
  CLUB_1H: 2,
  HAMMER_1H: 3,
  MACE: 4,
  WAND: 5,
  WHIP: 6,

  // hand.1h.melee.sharp: [100, 200)
  AXE_1H: 101,
  SWORD_1H: 102,
  KNIFE: 103,
  KATAR: 104,

  // hand.2h.melee.blunt: [200, 300)
  CLUB_2H: 200,
  HAMMER_2H: 201,
  STAFF: 202,
  MOP: 203,

  // hand.2h.melee.sharp: [300, 400)
  AXE_2H: 300,
  SWORD_2H: 301,
  SPEAR: 302,
  POLE_ARM: 303,
  UMBRELLA: 304,

  // hand.1h.missile.blunt: [400, 500)
  SLING: 401,

  // hand.1h.missile.sharp: [500, 600)
  DART: 500,
  THROWING_AXE: 501,
  JAVELIN: 502,
  FLYWHEEL: 503,

  // hand.2h.missile.blunt: [600, 700)

  // hand.2h.missile.sharp: [700, 800)
  BOW: 700,
  CROSSBOW: 701,
  CHAIN_WHEEL: 702,

  // leg.melee.blunt: [1000, 2000)

  // head.melee.blunt: [2000, 3000)

  // torso.melee.blunt: [3000, 4000)

  properties: new Map([
    [2, {name: 'one-handed club'}],
    [3, {name: 'one-handed hammer'}],
    [4, {name: 'mace'}],
    [5, {name: 'wand'}],
    [6, {name: 'whip'}],
    [101, {name: 'one-handed axe'}],
    [102, {name: 'one-handed sword'}],
    [103, {name: 'knife'}],
    [104, {name: 'katar'}],
    [200, {name: 'two-handed club'}],
    [201, {name: 'two-handed hammer'}],
    [202, {name: 'staff'}],
    [203, {name: 'mop'}],
    [300, {name: 'two-handed axe'}],
    [301, {name: 'two-handed sword'}],
    [302, {name: 'spear'}],
    [303, {name: 'pole_arm'}],
    [304, {name: 'umbrella'}],
    [401, {name: 'sling'}],
    [500, {name: 'dart'}],
    [501, {name: 'throwing axe'}],
    [502, {name: 'javelin'}],
    [503, {name: 'flywheel'}],
    [700, {name: 'bow'}],
    [701, {name: 'crossbow'}],
    [702, {name: 'chain wheel'}],
  ]),
};
