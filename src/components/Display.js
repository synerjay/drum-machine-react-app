import React from 'react';

function Display({ display }) {
  return (
    <div className='Display rounded-xl '>
      <h2 className='DisplayText text-2xl text-gray-100 bg-black flex pt-2 justify-center uppercase text-center'>
        {display}
      </h2>
    </div>
  );
}

export default Display;
