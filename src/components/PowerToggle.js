import React from 'react';

function PowerToggle({ powerSwitch }) {
  return (
    <div
      onChange={powerSwitch}
      className='flex items-center justify-center w-full mb-12'
    >
      <label for='toogleA' className='flex items-center cursor-pointer'>
        {/* Toggle */}
        <div className='relative'>
          {/* Input */}
          <input id='toogleA' type='checkbox' className='sr-only' />
          {/* Line */}
          <div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner'></div>
          {/* <!-- dot --> */}
          <div className='dot absolute w-6 h-6 bg-green-500 rounded-full shadow -left-1 -top-1 transition'></div>
        </div>
        {/* <!-- label --> */}
        <div className='ml-3 text-gray-700 font-medium'>Power</div>
      </label>
    </div>
  );
}

export default PowerToggle;
