import { Button } from '@material-ui/core';
import React from 'react';

function Pad({ audioFiles, handleClick }) {
  return (
    <div className='DrumPad grid grid-cols-3 gap-4'>
      {audioFiles.map((item) => (
        <Button
          key={item.label}
          className='drum-pad'
          onClick={() => handleClick(item.key)}
        >
          {item.key}
          <audio id={item.key} className='clip' src={item.url}></audio>
        </Button>
      ))}
    </div>
  );
}

export default Pad;
