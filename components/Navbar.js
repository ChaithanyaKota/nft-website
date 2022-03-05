import React from "react";
import Image from "next/image";

function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ROADMAP", link: "/" },
    { name: "TEAM", link: "/" },
    { name: "GALLERY", link: "/" },
    { name: "SHOP", link: "/" },
  ];
  return (
    <div className="w-full fixed top-0 left-0 font-sans">
      <div className="p-8 flex items-center justify-between">
        <div className="">
          <a href="/">
            <span className="items-center">
              <Image
                src="/Logo.svg"
                alt="Chiisai Logo"
                width={82}
                height={28}
              />
            </span>
          </a>
        </div>

        <ul className="md:flex md:items-center space-x-2 text-black">
          {Links.map((link) => (
            <li key={link.name} className="">
              <a
                href={link.link}
                className="text-black hover:text-teal-700 duration-500 p-1.5 px-3 text-xs leading-4 font-semibold font-sans tracking-wider"
              >
                {link.name}
              </a>
            </li>
          ))}
          <hr className="rotate-90 h-0.5 w-7 bg-black" />

          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex flex-col justify-center items-center py-2 px-4 relative">
                <Image
                  src="/discord.svg"
                  alt="Social Media Image"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex flex-col justify-center items-center py-2 px-4 relative">
                <Image
                  src="/icons8-twitter.svg"
                  alt="Social Media Image"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex flex-col justify-center items-center py-2 px-4 relative">
                <Image
                  src="/icons8-instagram.svg"
                  alt="Social Media Image"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex flex-col justify-center items-center py-2 px-4 relative">
                <Image
                  src="/OpenSea-icon.svg"
                  alt="Social Media Image"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
