import React from "react";

const Display = ({ setVol, volume, display }) => (
  <div id="display">
    <div className="display__monitor">{display}</div>
    <div className="display__box--volume">
      <input
        type="range"
        className="display__box--input"
        min="0"
        max="1"
        step="0.02"
        onChange={setVol}
        value={volume}
      />
    </div>
  </div>
);

export default Display;
