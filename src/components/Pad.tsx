import React from 'react';

// Reference for keypress and active button
// https://stackoverflow.com/questions/51413364/apply-button-active-styles-on-keypress-in-react

// For future reference: Having useRef in an array of Elements
// https://mattclaffey.medium.com/adding-react-refs-to-an-array-of-items-96e9a12ab40c
function Pad({ audioFiles, handleClick, buttonRef, powerToggle, soundChange }) {
  return (
    <div
      id='glow-blue'
      className={
        'DrumPad p-6 h-80 w-96 grid grid-cols-3 gap-1 rounded-b-xl md:rounded-b-none md:rounded-r-xl transition ease-out duration-300 ' +
        (soundChange ? 'bg-red-800' : 'bg-gray-800')
      }
    >
      {audioFiles.map((item) => (
        <button
          id={soundChange ? item.label2 : item.label}
          key={item.key}
          ref={(element) => buttonRef.current.push(element)}
          className={
            'drum-pad rounded-lg bg-gray-300 text-gray-700 focus:outline-none transform focus:translate-y-1 focus:bg-opacity-10 | transition ease-out duration-300 ' +
            (powerToggle === false ? 'shadow-none' : 'shadow')
          }
          onClick={() => handleClick(item.key)}
          disabled={!powerToggle}
        >
          {item.key}
          <audio
            id={item.key}
            className='clip'
            src={soundChange ? item.file : item.url}
          ></audio>
        </button>
      ))}
    </div>
  );
}

export default Pad;
