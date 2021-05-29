import React from 'react';

function Display({ display }) {
  return (
    <div className='Display'>
      <h2 className='DisplayText text-5xl flex justify-center mb-10'>
        {display}
      </h2>
    </div>
  );
}

export default Display;
