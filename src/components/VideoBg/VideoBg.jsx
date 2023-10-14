import React from 'react';
import videoBg from './moonBg.mp4';
import { Video } from './moonBg.styled';

export const BackgroundVideo = () => {
  return (
    <div>
      <Video
        autoPlay
        loop
        muted
        playsinline
        preload="yes"
        poster={videoBg}
        src={videoBg}
      />
    </div>
  );
};
