import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="w-full border-b-2 border-gray-200">
        <div className="container mx-auto flex justify-between items-center ">
          {/* logo */}
          <div>
            <Link href="/">
              <Image
                src="/Grocito-High-Quality-Logo.png"
                alt="logo"
                width={100}
                height={50}
                className="w-[100px] h-[50px]"
              />
            </Link>
          </div>
          <div>menu</div>
          {/* navigation */}
        </div>
      </header>
    </>
  );
}
