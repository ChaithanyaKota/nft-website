import React from "react";

function Button(props) {
  return (
    <div className="flex space-x-2">
      <span>
        <a className="cursor-pointer flex flex-row justify-center items-center py-1.5 px-3 relative bg-red-400 rounded-md text-black uppercase font-medium font-mono text-xs leading-4 font-100 duration-500 hover:bg-red-500 tracking-widest ">
          {props.children}
        </a>
      </span>
    </div>
  );
}

export default Button;
