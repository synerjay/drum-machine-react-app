import React, { useEffect, useRef, useState } from 'react';
import { audioFiles } from '../AudioFiles';
import ChangeToggle from '../components/ChangeToggle';
import Display from '../components/Display';
import Pad from '../components/Pad';
import PowerToggle from '../components/PowerToggle';

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
    const idArray = buttonRef.current.find(
      (element) => element.id === foundLabel.label
    );
    idArray.focus();
    setTimeout(() => idArray.blur(), 5);
  };

  const handleKeyPress = (e) => {
    const target = audioFiles.find((item) => item.keyCode === e.keyCode);
    if (target) {
      const idArray = buttonRef.current.find(
        (element) => element.id === target.label
      );

      if (powerToggle) {
        idArray.focus();
        setTimeout(() => idArray.blur(), 100);
        playSound(String.fromCharCode(e.keyCode));
        setDisplay(target.label);
      }
    }
  };

  // Power Toggle

  const [powerToggle, setPowerToggle] = useState(true);

  const powerSwitch = () => {
    setPowerToggle(!powerToggle);
    setDisplay(powerToggle ? 'POWER OFF' : 'POWER ON');
  };

  useEffect(() => {
    console.log(powerToggle);
  }, [powerToggle]);

  const [soundChange, setSoundChange] = useState(false);

  const changeSound = () => {
    setSoundChange(!soundChange);
  };

  useEffect(() => {
    console.log(soundChange);
  }, [soundChange]);

  return (
    <div className='DrumMachine flex flex-col justify-center w-96 md:flex-row md:w-full md:space-x-2 md:items-center'>
      <div className='Panel md:flex md:flex-wrap md:justify-center md:content-center md:h-96 md:max-w-md'>
        <Display display={display} />
        <ChangeToggle soundChange={soundChange} />
        <PowerToggle powerSwitch={powerSwitch} />
      </div>
      <Pad
        audioFiles={audioFiles}
        buttonRef={buttonRef}
        handleClick={handleClick}
        disabled={!powerToggle}
      />
    </div>
  );
}

export default DrumMachine;
