import React from "react";

const Close = ({ color, stroke }) => {
  return (
    <svg viewBox="0 0 315.4 315.4">
      <path
        d="M276 39.5L157.7 157.7M276 276L157.7 157.7M157.7 157.7L39.4 39.5M157.7 157.7L39.4 276"
        style={{ stroke: color, strokeWidth: stroke }}
      />
    </svg>
  );
};

export default Close;
