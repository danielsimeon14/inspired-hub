"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathName = usePathname();
  const navebarLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "blog", href: "/blog" },
  ].map((link) => {
    const isactive = pathName === link.href;
    return (
      <Link
        key={link.name}
        href={link.href}
        className={isactive ? "text-[#ff8a00] font-bold" : "text-white"}
      >
        {link.name}
      </Link>
    );
  });

  return (
    <div className="flex h-fit  fixed rounded-2xl  top-0  left-0 right-0 z-50 royal  flex-col md:flex-row justify-between items-center py-2 px-4 md:px-8  mx-8 shadow-md">
      <div className="flex justify-center   px-2 py-2 rounded-lg items-center text-white">
        <div className="h-15 text-white w-15 lg:h-20 lg:w-20 relative">
          <Image fill src="/logo.png" alt=" inspired hub logo" />
        </div>
        <span className="text-xl font-bold">Inspired Hub</span>
      </div>
      <div className="flex space-x-4">{navebarLinks}</div>
    </div>
  );
}
