import React from 'react';

function Display({ display, powerToggle }) {
  const noGlowStyle = {
    '-webkitBoxShadow': null,
  };

  return (
    <div
      // style={powerToggle == false ? noGlowStyle : null}
      className={
        'Display rounded-xl ' +
        (powerToggle == false ? 'shadow-none' : 'shadow')
      }
    >
      <h2 className='DisplayText text-2xl text-gray-100 bg-black flex pt-2 justify-center uppercase text-center'>
        {display}
      </h2>
    </div>
  );
}

export default Display;
