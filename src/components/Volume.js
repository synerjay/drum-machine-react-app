import React, { Fragment } from 'react';

function Volume({ handleVolumeChange, volume }) {
  return (
    <Fragment>
      <input
        type='range'
        onChange={handleVolumeChange}
        name='volume'
        class='VolumeSlider'
        min='0'
        max='1'
        step='0.05'
        value={volume}
      />
    </Fragment>
  );
}

export default Volume;
