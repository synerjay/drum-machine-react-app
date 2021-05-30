import React, { useEffect, useRef, useState } from 'react';
import { audioFiles } from '../AudioFiles';
import Display from '../components/Display';
import Pad from '../components/Pad';

function DrumMachine() {
  // Display Key Press Sate
  const [display, setDisplay] = useState('Press any key');



  useEffect(() => {
    //ComponentWillMount
    document.addEventListener('keydown', handleKeyPress);

    //ComponentWillUnMount
    return () => document.removeEventListener('keydown', handleKeyPress);
  });

  // Button Ref
  const buttonRef = useRef(new Array());

  // Play Sound Function

  const playSound = (id) => {
    document.getElementById(id).currentTime = 0;
    document.getElementById(id).play();
  };

  const handleClick = (id) => {
    playSound(id);
    const foundLabel = audioFiles.find((item) => item.key === id);
    setDisplay(foundLabel.label);
    const idArray = buttonRef.current.find((element) => element.id === foundLabel.label)
    idArray.focus()
    setTimeout(() => idArray.blur(), 5)
    console.log(foundLabel.keyCode)
  };

  const handleKeyPress = (e) => {
    const target = audioFiles.find((item) => item.keyCode === e.keyCode);
    const idArray = buttonRef.current.find((element) => element.id === target.label)
    idArray.focus()
    setTimeout(() => idArray.blur(), 100)
    playSound(String.fromCharCode(e.keyCode));
    setDisplay(target.label);
  };


  return (
    <div className='DrumMachine flex flex-col justify-center w-96'>
      <Display display={display} />
      <Pad
        audioFiles={audioFiles}
        buttonRef={buttonRef}
        handleClick={handleClick}
      />
    </div>
  );
}

export default DrumMachine;
