import SourceType from './source/type.js';
import WeaponType from '../../../weapon/type.js';
import RangeType from './range/type.js';
import DamageType from './damage/type.js';

export default {
  // hand.1h.melee.blunt: [0, 100)
  FIST: 1,
  CLUB_1H: 2,
  HAMMER_1H: 3,
  MACE: 4,
  WAND: 5,
  WHIP: 6,

  // hand.1h.melee.sharp: [100, 200)
  CLAW: 100,
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
  SMALL_OBJECTS: 400,
  SLING: 401,

  // hand.1h.missile.sharp: [500, 600)
  DART: 500,
  THROWING_AXE: 501,
  JAVELIN: 502,
  FLYWHEEL: 503,

  // hand.2h.missile.blunt: [600, 700)
  BIG_OBJECTS: 600,

  // hand.2h.missile.sharp: [700, 800)
  BOW: 700,
  CROSSBOW: 701,
  CHAIN_WHEEL: 702,

  // leg.melee.blunt: [1000, 2000)
  KICK: 1000,

  // head.melee.blunt: [2000, 3000)
  HEAD: 2000,

  // torso.melee.blunt: [3000, 4000)
  TORSO: 3000,

  // TODO: complete all properties
  properties: new Map([
    [1, {
      name: 'fist',
      sourceType: SourceType.HAND,
      numSources: 1,
      weaponType: null,
      rangeType: RangeType.MELEE,
      damageType: DamageType.BLUNT,
    }],
    [2, {
      name: 'one-handed club',
      sourceType: SourceType.HAND,
      numSources: 1,
      weaponType: WeaponType.CLUB_1H,
      rangeType: RangeType.MELEE,
      damageType: DamageType.BLUNT,
    }],

    // ...

    [100, {
      name: 'claw',
      sourceType: SourceType.HAND,
      numSources: 1,
      weaponType: null,
      rangeType: RangeType.MELEE,
      damageType: DamageType.SHARP,
    }],

    // ...

    [102, {
      name: 'one-handed sword',
      sourceType: SourceType.HAND,
      numSources: 1,
      weaponType: WeaponType.SWORD_1H,
      rangeType: RangeType.MELEE,
      damageType: DamageType.SHARP,
    }],

    // ...

    [400, {
      name: 'throw small objects',
      sourceType: SourceType.HAND,
      numSources: 1,
      weaponType: null,
      ammoType: 'object_1h_throwable',
      rangeType: RangeType.MISSILE,
      damageType: DamageType.BLUNT,
    }],

    // ...

    [700, {
      name: 'bow',
      sourceType: SourceType.HAND,
      numSources: 2,
      weaponType: WeaponType.BOW,
      ammoType: 'arrow',
      rangeType: RangeType.MISSILE,
      damageType: DamageType.SHARP,
    }],
    [701, {
      name: 'crossbow',
      sourceType: SourceType.HAND,
      numSources: 2,
      weaponType: WeaponType.CROSSBOW,
      ammoType: 'bolt',
      rangeType: RangeType.MISSILE,
      damageType: DamageType.SHARP,
    }],

    // ...

    [1000, {
      name: 'kick',
      sourceType: SourceType.LEG,
      weaponType: null,
      rangeType: RangeType.MELEE,
      damageType: DamageType.BLUNT,
    }],
  ]),
};
