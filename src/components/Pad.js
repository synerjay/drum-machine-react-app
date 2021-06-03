import React, { useEffect, useRef } from 'react';

// Reference for keypress and active button
// https://stackoverflow.com/questions/51413364/apply-button-active-styles-on-keypress-in-react

// For future reference: Having useRef in an array of Elements
// https://mattclaffey.medium.com/adding-react-refs-to-an-array-of-items-96e9a12ab40c
function Pad({ audioFiles, handleClick, buttonRef, disabled }) {
  return (
    <div
      id='glow-blue'
      className='DrumPad p-6 h-80 w-96 grid grid-cols-3 gap-1 rounded-b-xl md:rounded-b-none md:rounded-r-xl'
    >
      {audioFiles.map((item) => (
        <button
          id={item.label}
          key={item.key}
          ref={(element) => buttonRef.current.push(element)}
          className='drum-pad rounded-lg bg-gray-300 text-gray-700 shadow-inner focus:outline-none transform focus:translate-y-1 focus:bg-opacity-10 | transition ease-out duration-300'
          onClick={() => handleClick(item.key)}
          disabled={disabled}
        >
          {item.key}
          <audio id={item.key} className='clip' src={item.url}></audio>
        </button>
      ))}
    </div>
  );
}

export default Pad;
