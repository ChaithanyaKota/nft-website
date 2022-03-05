import React from "react";

function Button(props) {
  return (
    <div className="flex space-x-2">
      <span>
        <a className="cursor-pointer flex flex-row justify-center items-center py-1.5 px-3 relative bg-red-600 rounded-md text-white uppercase font-semibold font-sans text-xs leading-4 font-100 duration-300 hover:bg-teal-600 hover:text-black tracking-widest ">
          {props.children}
        </a>
      </span>
    </div>
  );
}

export default Button;
