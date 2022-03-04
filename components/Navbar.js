import Image from "next/image";
import React from "react";

function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ROADMAP", link: "/" },
    { name: "TEAM", link: "/" },
    { name: "GALLERY", link: "/" },
    { name: "SHOP", link: "/" },
  ];
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="p-8 flex items-center justify-between">
        <div className="">
          <span>
            <Image src="/logo.svg" width={82} height={28} />
          </span>
        </div>

        <ul className="md:flex md:items-center ">
          {Links.map((link) => (
            <li
              key={link.name}
              className="px-1.5 py-3 text-xs leading-4 font-semibold font-sans tracking-wider"
            >
              <a
                href={link.link}
                className="text-black hover:text-teal-600 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
