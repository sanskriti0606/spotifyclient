

import React, { useState, useRef } from 'react';

interface songsProps {
  preview_url: string;
}

const Songs = ({ preview_url }: songsProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center">
      <audio ref={audioRef} src={preview_url} />
      <button
        onClick={togglePlay}
        className="bg-green-500 text-white px-4 py-2 rounded-full"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Songs;
