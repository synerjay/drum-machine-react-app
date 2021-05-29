import { Button } from '@material-ui/core';
import React from 'react';

function Pad({ audioFiles, handleClick }) {
  return (
    <div className='DrumPad grid grid-cols-3 gap-4'>
      {audioFiles.map((item) => (
        <button
          color='secondary'
          key={item.label}
          className='drum-pad h-32 w-32 focus:outline-none bg-gray-300 text-gray-50 shadow-inner'
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
