import React from 'react';

function DrumPad({ label, handleClick, key, url }) {
  return (
    <button id={label} className='drum-pad' onClick={handleClick}>
      {key}
      <audio id={key} className='clip' src={url}></audio>
    </button>
  );
}

export default DrumPad;
