import React from "react";
import "./cirlce.css";
export interface CircleProps {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  width: number;
  height: number;
  transform: string;
}

export const Circle: React.FC<CircleProps> = (props) => {
  return <div className={"circle"} style={{ ...props }}></div>;
};
