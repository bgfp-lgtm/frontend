import React from "react";

type Props = {
  url: string;
};

export default function Video({ url }: Props) {
  return (
    <div className="">
      <video autoPlay loop muted={true} className="w-full h-full">
        <source src={url} />
      </video>
    </div>
  );
}
