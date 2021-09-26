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
  const buttonRef = useRef([]);

  // Play Sound Function
  const playSound = (id: string) => {
    const audio = document.getElementById(id) as HTMLAudioElement;

    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
  };

  const handleClick = (id: string) => {
    playSound(id);
    const target = audioFiles.find((item) => item.key === id);
    if (target) {
      const label = soundChange ? target.label2 : target.label;
      setDisplay(label);
      const idArray = buttonRef.current.find((element) => element.id === label);
      idArray.focus();
      setTimeout(() => idArray.blur(), 5);
    }
  };

  const handleKeyPress = (e) => {
    const target = audioFiles.find((item) => item.keyCode === e.keyCode);
    if (target) {
      const label = soundChange ? target.label2 : target.label;
      const idArray = buttonRef.current.find((element) => element.id === label);

      if (powerToggle) {
        idArray.focus();
        setTimeout(() => idArray.blur(), 100);
        playSound(String.fromCharCode(e.keyCode));
        setDisplay(label);
      }
    }
  };

  // Power Toggle
  const [powerToggle, setPowerToggle] = useState(true);

  const powerSwitch = () => {
    setPowerToggle(!powerToggle);
    setDisplay(powerToggle ? 'POWER OFF' : 'POWER ON');
  };

  // Change button sounds state to Pokemon and vice versa
  const [soundChange, setSoundChange] = useState(false);

  const changeSound = () => {
    setSoundChange(!soundChange);
    if (!soundChange) {
      setDisplay('POKEMON');
    } else {
      setDisplay('DRUM KIT');
    }
  };

  return (
    <div
      className='DrumMachine flex flex-col justify-center w-96 md:flex-row md:w-full md:items-center'
      id='glow-blue'
    >
      <div
        className={
          'Panel flex flex-wrap rounded-t-xl md:rounded-t-none md:flex-col justify-center space-y-5 p-7 md:rounded-l-xl md:p-12 md:space-y-8 md:content-center md:h-80 md:max-w-md transition ease-out duration-300 ' +
          (soundChange ? 'bg-red-800' : 'bg-gray-800')
        }
        id='glow-blue'
      >
        <PowerToggle powerSwitch={powerSwitch} />
        <Display powerToggle={powerToggle} display={display} />
        <Volume
          handleVolumeChange={handleVolumeChange}
          volume={volume}
          disabled={!powerToggle}
        />
        <ChangeToggle disabled={!powerToggle} changeSound={changeSound} />
      </div>
      <Pad
        audioFiles={audioFiles}
        buttonRef={buttonRef}
        handleClick={handleClick}
        powerToggle={powerToggle}
        soundChange={soundChange}
      />
    </div>
  );
}

export default DrumMachine;
