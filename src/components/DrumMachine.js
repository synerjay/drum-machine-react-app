import React, { useEffect, useState } from 'react';
import { audioFiles } from '../AudioFiles';
import Display from './Display';
import Pad from './Pad';

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

  const handleClick = (id) => {
    playSound(id);
    const foundLabel = audioFiles.find((item) => item.key == id);
    console.log(foundLabel.label);
    setDisplay(foundLabel.label);
  };

  const handleKeyPress = (e) => {
    const target = audioFiles.find((item) => item.keyCode == e.keyCode);
    playSound(String.fromCharCode(e.keyCode));
    setDisplay(target.label);
  };

  return (
    <div className='DrumMachine'>
      <Display display={display} />
      <Pad audioFiles={audioFiles} handleClick={handleClick} />
    </div>
  );
}

export default DrumMachine;
