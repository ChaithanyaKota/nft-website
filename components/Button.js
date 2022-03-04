import React from "react";

function Button(props) {
  return (
    <div>
      <ul className="flex space-x-2">
        <li>
          <a className="cursor-pointer flex flex-row justify-center items-center py-1.5 px-3 relative bg-white rounded-md text-black uppercase font-medium font-mono text-xs leading-4 font-100 bg-opacity-10 duration-500 hover:bg-opacity-60 tracking-widest shadow-sm">
            {props.children}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Button;
