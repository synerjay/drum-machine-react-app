import React, { useEffect, useRef, useState } from 'react';
import { audioFiles } from '../AudioFiles';
import ChangeToggle from '../components/ChangeToggle';
import Display from '../components/Display';
import Pad from '../components/Pad';
import PowerToggle from '../components/PowerToggle';
import Volume from '../components/Volume';

function DrumMachine() {
  // Display Key Press Sate
  const [display, setDisplay] = useState('');

  // Volume State
  const [volume, setVolume] = useState(0.5);
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    let volPercent = Math.round(e.target.value * 100);
    setDisplay(`VOLUME ${volPercent}%`);
  };

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
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
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

  const [soundChange, setSoundChange] = useState(false);

  const changeSound = () => {
    setSoundChange(!soundChange);
  };

  return (
    <div className='DrumMachine flex flex-col justify-center w-96 md:flex-row md:w-full md:items-center'>
      <div className='Panel bg-yellow-700 flex flex-wrap md:flex-col justify-center space-y-4 md:space-y-7 md:content-center md:h-80 md:max-w-md'>
        <PowerToggle powerSwitch={powerSwitch} />
        <Display display={display} />
        <Volume
          handleVolumeChange={handleVolumeChange}
          volume={volume}
          disabled={!powerToggle}
        />
        <ChangeToggle disabled={!powerToggle} soundChange={soundChange} />
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
