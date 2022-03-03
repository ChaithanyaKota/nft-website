import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="flex p-8 justify-between">
        <div>
          <ol>
            <li>
              <img
                className="flex flex-row items-start py-1 px-5 bg-teal-700 rounded-md text-white font-sans text-sm leading-4 font-bold relative"
                href=""
                src="../images/小さい.svg"
              ></img>
            </li>
          </ol>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <Button>home</Button>
          <Button>roadmap</Button>
          <Button>team</Button>
          <Button>gallery</Button>
          <Button>shop</Button>
          <img
            className="flex flex-column justify-center items-center py-1.5 px-4 relative bg-white rounded-md text-black uppercase text-sans text-xs leading-4 font-500 bg-opacity-20 duration-500 hover:bg-opacity-70 tracking-widest"
            src="../images/icons8-instagram.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
