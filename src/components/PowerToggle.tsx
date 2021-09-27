import React from 'react';

function PowerToggle({ powerSwitch }: { powerSwitch(): void }) {
  return (
    <div
      onChange={powerSwitch}
      className='PowerChange flex items-center justify-center w-full mb-2'
    >
      <label htmlFor='toogleA' className='flex items-center cursor-pointer'>
        {/* Toggle */}
        <div className='relative'>
          {/* Input */}
          <input id='toogleA' type='checkbox' className='sr-only' />
          {/* Line */}
          <div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner'></div>
          {/* <!-- dot --> */}
          <div className='dotA absolute w-6 h-6 bg-gray-200 rounded-full shadow -left-1 -top-1 transition'></div>
        </div>
        {/* <!-- label --> */}
        <div className='ml-2 text-gray-200 font-medium uppercase'>Power</div>
      </label>
    </div>
  );
}

export default PowerToggle;
