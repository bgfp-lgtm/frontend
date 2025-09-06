import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex items-center justify-between px-20 py-10">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={160}
          height={160}
          className=""
        />
      </Link>
      <div className="flex items-center justify-between gap-10">
        <p className="text-lg font-semibold cursor-pointer hover:text-red-500">
          Services
        </p>
        <p className="text-lg font-semibold cursor-pointer hover:text-red-500">
          About us
        </p>
        <p className="text-lg font-semibold cursor-pointer hover:text-red-500">
          Projects
        </p>
        <p className="text-lg font-semibold cursor-pointer hover:text-red-500">
          Blog Posts
        </p>
      </div>
      <Button className="p-7 rounded-xl text-xl bg-red-500/8 text-red-500 cursor-pointer">
        Contact
      </Button>
    </div>
  );
}
