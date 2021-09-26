import React from 'react';

function Display({ display, powerToggle }) {
  return (
    <div
      className={
        'Display rounded-xl transition ease-out duration-300 ' +
        (!powerToggle ? 'shadow-none' : 'shadow')
      }
    >
      <h2
        className={
          'DisplayText text-2xl bg-black flex pt-2 justify-center uppercase text-center ' +
          (!powerToggle ? 'text-red-600' : 'text-blue-400')
        }
      >
        {display}
      </h2>
    </div>
  );
}

export default Display;
