import React from "react";

export const Hamburguer = (props) => {
  return (
    <svg onClick={props.onClick} viewBox="0 0 100 80" width="40" height="40">
      <rect fill={props.color} width="80" height="10"></rect>
      <rect fill={props.color} y="30" width="80" height="10"></rect>
      <rect fill={props.color} y="60" width="80" height="10"></rect>
    </svg>
  );
};
