import React from 'react';

function Display({ display }) {
  return (
    <div className='Display'>
      <h2 className='DisplayText text-2xl text-gray-100 bg-black flex p-1 justify-center mb-10 uppercase text-center'>
        {display}
      </h2>
    </div>
  );
}

export default Display;
