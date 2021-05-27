import React from 'react';

function DrumPad({ label, handleClick, key, url }) {
  return (
    <div className='drumPadContainer'>
      <button id={label} className='drum-pad' onClick={handleClick}>
        {key}
        <audio id={key} className='clip' src={url}></audio>
      </button>
    </div>
  );
}

export default DrumPad;
