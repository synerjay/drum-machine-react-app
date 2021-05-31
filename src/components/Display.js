import React from 'react';

function Display({ display }) {
  return (
    <div className='Display'>
      <h2 className='DisplayText text-2xl flex justify-center mb-2 uppercase text-center'>
        {display}
      </h2>
    </div>
  );
}

export default Display;
