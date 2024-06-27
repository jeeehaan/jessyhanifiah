import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const navlinks = [
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];
  return (
    <div className="mx-auto flex max-w-7xl justify-between border-b p-4">
      <div>
        <Link href="/" className="font-bold text-[#fe68a7]">
          Jeeehaan
        </Link>
      </div>
      <ul className="flex gap-6">
        {navlinks.map((navlink, index) => (
          <li key={`navlink-${index}`}>
            <Link href={navlink.href}>{navlink.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
