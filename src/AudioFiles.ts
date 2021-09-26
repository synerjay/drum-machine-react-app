// import pikachu from './sounds/pokemon/pikachu.mp3';
// import baulbasaur from './sounds/pokemon/baulbasaur.mp3';
// import squirtle from './sounds/pokemon/squirtle.mp3';
// import charmander from './sounds/pokemon/charmander.mp3';
// import jigglypuff from './sounds/pokemon/jigglypuff.mp3';
// import slowpoke from './sounds/pokemon/slowpoke.mp3';
// import ashketchum from './sounds/pokemon/ashketchum.mp3';
// import congrats from './sounds/pokemon/congrats.mp3';
// import gottacatchemall from './sounds/pokemon/gottacatchemall.mp3';

//TypeScript style of importing files are as follows:
const pikachu = require('./sounds/pokemon/pikachu.mp3');
const baulbasaur = require('./sounds/pokemon/baulbasaur.mp3');
const squirtle = require('./sounds/pokemon/squirtle.mp3');
const charmander = require('./sounds/pokemon/charmander.mp3');
const jigglypuff = require('./sounds/pokemon/jigglypuff.mp3');
const slowpoke = require('./sounds/pokemon/slowpoke.mp3');
const ashketchum = require('./sounds/pokemon/ashketchum.mp3');
const congrats = require('./sounds/pokemon/congrats.mp3');
const gottacatchemall = require('./sounds/pokemon/gottacatchemall.mp3');

export const audioFiles = [
  {
    label: 'Heater 1',
    label2: 'Pikachu',
    keyCode: 81,
    key: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    file: pikachu,
  },
  {
    label: 'Heater 2',
    label2: 'Baulbasaur',
    keyCode: 87,
    key: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    file: baulbasaur,
  },
  {
    label: 'Heater 3',
    label2: 'Squirtle',
    keyCode: 69,
    key: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    file: squirtle,
  },
  {
    label: 'Chord 1',
    label2: 'Charmander',
    keyCode: 65,
    key: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    file: charmander,
  },
  {
    label: 'Disco Oh',
    label2: 'Jigglypuff',
    keyCode: 83,
    key: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    file: jigglypuff,
  },
  {
    label: 'Kick N Hat',
    label2: 'Slowpoke',
    keyCode: 68,
    key: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    file: slowpoke,
  },
  {
    label: 'RP4 Kick',
    label2: 'Ash Ketchum',
    keyCode: 90,
    key: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    file: ashketchum,
  },
  {
    label: 'Cev H2',
    label2: 'Professor Oak',
    keyCode: 88,
    key: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    file: congrats,
  },
  {
    label: 'Chord 2',
    label2: 'Pokemon Theme',
    keyCode: 67,
    key: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    file: gottacatchemall,
  },
];
