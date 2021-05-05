import React from "react";

const Previous = ({ color, stroke }) => {
  return (
    <svg viewBox="0 0 315.4 315.4">
      <path
        d="M236.6 0L78.8 157.7M236.6 315.4L78.8 157.7"
        style={{ stroke: color, strokeWidth: stroke }}
      />
    </svg>
  );
};

export default Previous;
