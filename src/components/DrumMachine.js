import React, { useEffect, useState } from 'react';
import { audioFiles } from '../AudioFiles';

function DrumMachine() {
  // Display Key Press Sate
  const [display, setDisplay] = useState('Press any key');

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
