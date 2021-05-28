import { Button } from '@material-ui/core';
import React from 'react';

function Pad({ audioFiles, handleClick }) {
  return (
    <div className='DrumPad'>
      {audioFiles.map((item) => (
        <Button
          id={item.label}
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
