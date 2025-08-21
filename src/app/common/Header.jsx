import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="w-full border-b-2 border-gray-200">
        <div className="container mx-auto flex justify-between items-center ">
          {/* logo */}
          <div>
            <Link href="/">
              <img
                src="/Grocito-High-Quality-Logo.png"
                alt="logo"
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
