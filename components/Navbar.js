import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex py-4">
        <div>
          <span>
            <Image src="/logo.svg" width={82} height={28} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
