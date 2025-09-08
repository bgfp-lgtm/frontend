import React from "react";

type Props = {};

export default function Video({}: Props) {
  return (
    <div className="">
      <video autoPlay loop muted={true} className="w-full h-full">
        <source src="/background.mp4" />
      </video>
    </div>
  );
}
