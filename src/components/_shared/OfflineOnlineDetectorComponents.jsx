import React from "react";

export const Offline = ({ children }) => {
  if (window.navigator.onLine === false && children) {
    return <div className="offline">{children}</div>;
  } else return null;
};

export const Online = ({ children }) => {
  if (window.navigator.onLine && children) {
    return <div className="online">{children}</div>;
  } else return null;
};
