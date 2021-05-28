import React from 'react';

function Pad({ audioFiles, handleClick }) {
  return (
    <div className='DrumPad'>
      {audioFiles.map((item) => (
        <button id={item.label} className='drum-pad' onClick={handleClick}>
          {item.key}
          <audio id={item.key} className='clip' src={item.url}></audio>
        </button>
      ))}
    </div>
  );
}

export default Pad;
