import React from 'react';

interface IChevronProps {
  height: string;
  width: string;
  color: string;
}
const Chevron: React.FC<IChevronProps> = ({ height, width, color }) => {
  return (
    <svg
      id="Capa_1"
      enableBackground="new 0 0 551.13 551.13"
      height={height}
      viewBox="0 0 551.13 551.13"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z" />
    </svg>
  );
};

export default Chevron;
