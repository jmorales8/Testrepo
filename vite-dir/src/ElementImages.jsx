import React from 'react';
import './App'; // optional: separate CSS

export default function ElementImages({ start, finished }) {
  return (
    <div className="image-container">
      {!finished && (
        <>
          <img
            src="/mclava.jpeg"\
            
            alt="lava"
            className={`image ${start ? 'move-lava' : ''}`}
          />
          <img
            src="/mcwater.jpeg"
            alt="water"
            className={`image ${start ? 'move-water' : ''}`}
          />
        </>
      )}
      {finished && (
        <img
          src="/mcobsidian.jpeg"
          alt="obsidian"
          className="obsidian show-obsidian"
        />
      )}
    </div>
  );
}
