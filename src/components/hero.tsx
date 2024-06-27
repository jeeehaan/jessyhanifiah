import React from "react";
import Image from "next/image";
import { Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="mx-auto mt-24 flex h-screen max-w-7xl flex-col items-center bg-[]">
      <div className="mask-squircle w-[120px]">
        <Image
          src="https://avatars.githubusercontent.com/u/72622302?v=4"
          alt="jeeehaan"
          width={120}
          height={120}
        />
      </div>
      <div className="mt-8 flex max-w-2xl flex-col items-center space-y-4 leading-relaxed">
        <h1 className="text-3xl font-bold">Jessy Hanifiah</h1>
        <p> Front-end developer</p>
        <p>
          I am a fresh graduate of informatics at Universitas Syiah Kuala. I am deeply passionate
          about software engineering. I am actively utilizing Next.js in my current tech stack.
        </p>
        <div className="flex gap-2">
          <Link href="https://www.linkedin.com/in/jessy-hanifiah/" target="__blank">
            <Linkedin />
          </Link>
          <Link href="https://github.com/jeeehaan" target="__blank">
            <Github />
          </Link>
          <Link href="https://instagram.com/jeee.haan" target="__blank">
            <Instagram />
          </Link>
        </div>
      </div>
    </div>
  );
};
