import React, { useEffect, useState } from 'react';

function DrumMachine() {
  // Display Key Press Sate
  const [display, setDisplay] = useState('Press any key');

  const audioFiles = [
    {
      label: 'Heater 1',
      keyCode: 81,
      key: 'Q',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      label: 'Heater 2',
      keyCode: 87,
      key: 'W',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      label: 'Heater 3',
      keyCode: 69,
      key: 'E',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      label: 'Chord 1',
      keyCode: 65,
      key: 'A',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    },
    {
      label: 'Disco Oh',
      keyCode: 83,
      key: 'S',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      label: 'Kick N Hat',
      keyCode: 68,
      key: 'D',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      label: 'RP4 Kick',
      keyCode: 90,
      key: 'Z',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      label: 'Cev H2',
      keyCode: 67,
      key: 'X',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
    {
      label: 'Chord 2',
      keyCode: 88,
      key: 'C',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    },
  ];

  useEffect(() => {
    //ComponentWillMount
    document.addEventListener('keydown', handleKeyPress);

    //ComponentWillUnMount
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Play Sound Function

  const playSound = (id) => {
    document.getElementById(id).currentTime = 0;
    document.getElementById(id).play();
    console.log(id);
  };

  const handleClick = (e) => {
    playSound(e.target.innerText);
    setDisplay(e.target.id);
  };

  const handleKeyPress = (e) => {
    const target = audioFiles.find((item) => item.keyCode == e.keyCode);
    playSound(String.fromCharCode(e.keyCode));
    setDisplay(target.label);
  };

  return (
    <div className='DrumMachine'>
      {audioFiles.map((item) => (
        <button id={item.label} className='drum-pad' onClick={handleClick}>
          {item.key}
          <audio id={item.key} className='clip' src={item.url}></audio>
        </button>
      ))}
    </div>
  );
}

export default DrumMachine;
