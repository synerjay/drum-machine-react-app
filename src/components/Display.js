import React from 'react';

function Display({ display, powerToggle }) {
  return (
    <div
      className={
        'Display rounded-xl transition ease-out duration-300 ' +
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
