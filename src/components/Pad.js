import React from 'react';

// Reference for keypress and active button
// https://stackoverflow.com/questions/51413364/apply-button-active-styles-on-keypress-in-react

// Having useRef in an array of Elements
// https://mattclaffey.medium.com/adding-react-refs-to-an-array-of-items-96e9a12ab40c
function Pad({ audioFiles, handleClick, buttonRef, padStyle }) {
  return (
    <div className='DrumPad grid grid-cols-3 gap-4'>
      {audioFiles.map((item) => (
        <button
          color='secondary'
          id={item.label}
          key={item.key}
          ref={(element) => buttonRef.current.push(element)}
          className='drum-pad h-32 w-32 bg-gray-300 text-gray-50 shadow-inner focus:outline-none'
          onClick={() => handleClick(item.key)}
        >
          {item.key}
          <audio id={item.key} className='clip' src={item.url}></audio>
        </button>
      ))}
    </div>
  );
}

export default Pad;
