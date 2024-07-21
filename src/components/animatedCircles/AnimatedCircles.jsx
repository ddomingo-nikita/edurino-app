import React from "react";
import { animated, useTransition } from "@react-spring/web";
import "./animated-circles.css";
const circlePosition = [
  [
    {
      x_start: "442px",
      y_start: "503px",
      x_end: "61px",
      y_end: "231px",
      size: 50,
    },
    {
      x_start: "469px",
      y_start: "839px",
      x_end: "114px",
      y_end: "780px",
      size: 41,
    },
    {
      x_start: "642px",
      y_start: "904px",
      x_end: "315px",
      y_end: "971px",
      size: 41,
    },
    {
      x_start: "980px",
      y_start: "1151px",
      x_end: "986px",
      y_end: "780px",
      size: 31,
    },
  ],
  [
    {
      x_start: "61px",
      y_start: "231px",
      x_end: "133px",
      y_end: "105px",
      size: 50,
    },
    {
      x_start: "114px",
      y_start: "780px",
      x_end: "673px",
      y_end: "951px",
      size: 41,
    },
    {
      x_start: "315px",
      y_start: "971px",
      x_end: "672px",
      y_end: "274px",
      size: 41,
    },
    {
      x_start: "780px",
      y_start: "986px",
      x_end: "1061px",
      y_end: "878",
      size: 31,
    },
  ],
  [
    {
      x_start: "133px",
      y_start: "105px",
      x_end: "1511px",
      y_end: "130px",
      size: 50,
    },
    {
      x_start: "673px",
      y_start: "951px",
      x_end: "304px",
      y_end: "705px",
      size: 41,
    },
    {
      x_start: "672px",
      y_start: "274px",
      x_end: "505px",
      y_end: "1007px",
      size: 41,
    },
    {
      x_start: "1061px",
      y_start: "878px",
      x_end: "758px",
      y_end: "1007px",
      size: 31,
    },
  ],
  [
    {
      x_start: "1311px",
      y_start: "111px",
      x_end: "454px",
      y_end: "139px",
      size: 50,
    },
    {
      x_start: "304px",
      y_start: "705px",
      x_end: "285px",
      y_end: "283px",
      size: 41,
    },
    {
      x_start: "505px",
      y_start: "1007px",
      x_end: "469px",
      y_end: "739px",
      size: 41,
    },
    {
      x_start: "758px",
      y_start: "1007px",
      x_end: "1439px",
      y_end: "591px",
      size: 31,
    },
  ],
];

export const AnimatedCircles = ({ pageNum }) => {
  // const { x } = useSpring({
  //   from: { x: 0 },
  //   config: { duration: 1000 },
  // });

  const transition = useTransition(circlePosition[pageNum], {
    from: (item) => ({ top: item.y_start, left: item.x_start }),
    enter: (item) => ({
      top: item.y_end,
      left: item.x_end,
    }),
    update: (item) => ({
      top: item.y_end,
      left: item.x_end,
    }),
    config: { duration: 700 },
    trail: 200,
  });
  return (
    <div className={"circle-container"}>
      {transition((style, item, t) => {
        console.log(style, item, t);

        return <animated.div className={"circle"} style={{ width: item.size, height: item.size, ...style }} />;
      })}
    </div>
  );
};
