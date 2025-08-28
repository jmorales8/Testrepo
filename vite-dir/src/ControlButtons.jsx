import React from 'react';

export default function ControlButtons({ onStart, onReset, disabled }) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <button onClick={onStart} disabled={disabled}>
        Combine Lava + Water
      </button>
      <button onClick={onReset} style={{ marginLeft: '1rem' }}>
        Reset
      </button>
    </div>
  );
}
