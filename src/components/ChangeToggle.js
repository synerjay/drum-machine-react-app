import React from 'react';

function ChangeToggle({ soundChange, disabled }) {
  return (
    <div
      onChange={soundChange}
      className='SoundChange flex items-center justify-center w-full mb-2'
      disabled={disabled}
    >
      <label for='toggleB' className='flex items-center cursor-pointer'>
        {/* <!-- toggle --> */}
        <div className='relative'>
          {/* <!-- input --> */}
          <input id='toggleB' type='checkbox' className='sr-only' />
          {/* <!-- line --> */}
          <div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner'></div>
          {/* <!-- dot --> */}
          <div className='dotB absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition'></div>
        </div>
        {/* <!-- label --> */}
        <div className='ml-2 text-gray-200 uppercase font-medium'>Bank</div>
      </label>
    </div>
  );
}

export default ChangeToggle;
